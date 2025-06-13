---
title: Creating a production-ready MongoDB plugin for Fastify
date: 2025-06-12
description: 'Learn how to create a reusable MongoDB plugin for a Fastify API with proper connection management and performance optimizations.'
author: Armando Borge
tags: ['fastify', 'mongodb', 'databases', 'nodejs']
---

# Creating a MongoDB Plugin for Fastify Applications

When building Node.js applications with Fastify and MongoDB, establishing a proper database connection pattern is crucial for performance, maintainability, and scalability. In this article, we'll explore how to create a reusable MongoDB plugin for Fastify that handles connection management, optimizes performance, and provides a clean interface for your application.

## Understanding the `dbInstance` Plugin

The `dbInstance` plugin creates a MongoDB connection and makes it available throughout your Fastify application. Let's break down how it works and why it's designed this way.

```javascript
import fp from 'fastify-plugin'
import { MongoClient } from 'mongodb'

async function dbInstance(fastify) {
    // Client instance
    const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
        compressors: ['snappy', 'zlib'],
    })

    // Connect
    await client.connect()

    // Decorate Fastify instance
    // This adds the MongoDB database to the Fastify instance (so it's available globally within the app)
    fastify.decorate('db', client.db(process.env.MONGO_DB_NAME))

    // This predefines the request.db property and ensures the request object's shape is consistent from the beginning (so V8 can optimize it)
    // We are not assigning the db here, just letting Fastify know the key exists
    fastify.decorateRequest('db', null)

    // Hook to assign the db per request
    fastify.addHook('onRequest', async (request) => {
        request.db = fastify.db
    })

    fastify.addHook('onClose', async () => {
        await client.close()
    })
}

export default fp(dbInstance)
```

## The Logic Behind `dbInstance`

The `dbInstance` function follows a specific pattern to ensure efficient database access:

1. **Single Connection**: It creates a single MongoDB connection when the application starts, rather than creating a new connection for each request.
2. **Global Access**: It makes the database instance available globally through the Fastify instance.
3. **Request-Specific Access**: It also makes the database available on each request object for convenience.
4. **Proper Cleanup**: It ensures the connection is properly closed when the application shuts down.

This approach provides several benefits:

- Reduces connection overhead
- Simplifies database access throughout the application
- Ensures proper resource management

## Using the Plugin in a Fastify Project

To use this plugin in your Fastify application, follow these steps:

### 1. Create the Plugin File

Save the code above as `dbInstance.js` in your project's structure (e.g., `src/database/dbInstance.js`).

### 2. Register the Plugin in Your Fastify App

```javascript
// main.js or app.js
import Fastify from 'fastify'
import dbInstance from './src/database/dbInstance.js'

// Create Fastify instance
const fastify = Fastify({
    logger: true,
})

// Register the database plugin
fastify.register(dbInstance)

// Now you can define your routes
fastify.get('/', async (request, reply) => {
    // The database is available on both the fastify instance and the request
    const users = await request.db.collection('users').find().toArray()
    return { users }
})

// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
```

### 3. Set Environment Variables

Make sure to set the required environment variables:

```
MONGO_CONNECTION_STRING=mongodb://localhost:27017
MONGO_DB_NAME=myDatabase
```

## Why Decorate Both Fastify and Request?

You might wonder why we decorate both the Fastify instance (`fastify.db`) and the request object (`request.db`). There are good reasons for this dual approach:

### Decorating the Fastify Instance

```javascript
fastify.decorate('db', client.db(process.env.MONGO_DB_NAME))
```

This makes the database available globally throughout your application. You can access it in any part of your code that has access to the Fastify instance, including:

- Plugins
- Hooks
- Services that receive the Fastify instance

### Decorating the Request Object

```javascript
fastify.decorateRequest('db', null)

fastify.addHook('onRequest', async (request) => {
    request.db = fastify.db
})
```

This makes the database available directly on each request object, which provides several benefits:

1. **Convenience**: Route handlers automatically have access to the database without needing to reference the Fastify instance.
2. **V8 Optimization**: By pre-defining the property structure with `decorateRequest('db', null)`, we help the V8 JavaScript engine optimize the request object's shape.
3. **Cleaner Code**: Route handlers can access the database with `request.db` instead of `fastify.db`, making the code more intuitive.

## Understanding the Compression Settings

```javascript
const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
    compressors: ['snappy', 'zlib'],
})
```

The plugin configures MongoDB with compression to optimize network traffic between your application and the database. Two compression algorithms are specified:

1. **Snappy**: A compression algorithm developed by Google that aims for very high speeds with reasonable compression.
2. **Zlib**: Provides better compression ratios but might be slightly slower than Snappy.

By specifying both, the MongoDB driver can negotiate with the server to use the best available option. This helps reduce network bandwidth and can improve performance, especially when transferring large amounts of data.

To use these compression options, you need to:

1. Ensure your MongoDB server supports compression (MongoDB 3.4+)
2. Install the required packages:

```bash
npm install snappy zlib
```

## Using the Database in Your Routes

Once the plugin is registered, you can use the database in your route handlers in several ways:

### Using `request.db`

```javascript
fastify.get('/users', async (request, reply) => {
    const users = await request.db.collection('users').find().toArray()
    return users
})
```

### Using `fastify.db` (in case you need it outside of a route handler)

```javascript
// In a service file that receives the fastify instance
export function userService(fastify) {
    return {
        async getAllUsers() {
            return await fastify.db.collection('users').find().toArray()
        },
    }
}
```

### Using Transactions

If you need to use transactions, you can extend this pattern:

```javascript
fastify.post('/transfer', async (request, reply) => {
    const { fromAccount, toAccount, amount } = request.body

    const session = request.db.client.startSession()

    try {
        session.startTransaction()

        await request.db
            .collection('accounts')
            .updateOne({ _id: fromAccount }, { $inc: { balance: -amount } }, { session })

        await request.db
            .collection('accounts')
            .updateOne({ _id: toAccount }, { $inc: { balance: amount } }, { session })

        await session.commitTransaction()
        return { success: true }
    } catch (error) {
        await session.abortTransaction()
        throw error
    } finally {
        session.endSession()
    }
})
```

## Advanced Usage: Database Selection

If your application needs to work with multiple databases, you can extend the plugin to support database selection:

```javascript
// Enhanced dbInstance.js
import fp from 'fastify-plugin'
import { MongoClient } from 'mongodb'

async function dbInstance(fastify) {
    const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
        compressors: ['snappy', 'zlib'],
    })

    await client.connect()

    // Decorate with the default database
    fastify.decorate('db', client.db(process.env.MONGO_DB_NAME))

    // Add a function to select different databases
    fastify.decorate('selectDb', (dbName) => {
        return client.db(dbName)
    })

    fastify.decorateRequest('db', null)
    fastify.decorateRequest('selectDb', null)

    fastify.addHook('onRequest', async (request) => {
        request.db = fastify.db
        request.selectDb = fastify.selectDb
    })

    fastify.addHook('onClose', async () => {
        await client.close()
    })
}

export default fp(dbInstance)
```

Then in your routes:

```javascript
fastify.get('/other-db-data', async (request, reply) => {
    // Use a different database
    const otherDb = request.selectDb('otherDatabase')
    const data = await otherDb.collection('items').find().toArray()
    return data
})
```

## Conclusion

The `dbInstance` plugin provides a clean, efficient way to integrate MongoDB with Fastify applications. By creating a single connection and making it available throughout your application, you can:

1. Improve performance by reusing connections
2. Simplify your code with convenient database access
3. Ensure proper resource management
4. Optimize network traffic with compression

This pattern works well for most applications and can be extended to support more complex scenarios as needed.

By following these practices, you'll have a solid foundation for building scalable, maintainable Fastify applications with MongoDB.

---

_Note: Remember to handle errors appropriately in your production code and consider implementing connection pooling for high-traffic applications._
