---
title: Creating a production-ready MongoDB plugin for Fastify
date: 2025-05-22
description: 'I recently migrated a huge application API (Fastify) from FaunaDB to MongoDB, in the process I realized how a reusable MongoDB plugin with proper connection management and performance optimizations was a must to improve the development experience and reduce code complexity.'
author: Armando Borge
tags: ['fastify', 'mongodb', 'databases', 'nodejs']
---

# Define and register the plugin

When building Node.js applications with Fastify and MongoDB, establishing a proper database connection pattern is crucial for performance, maintainability and scalability. In this article, we'll explore how to create a reusable MongoDB plugin for Fastify with the following goals in mind:

1. **Single Connection**: Create a single MongoDB client per server instance when the application starts, rather than creating a new connection for each request.
2. **Global Access**: Make the database instance available globally through the Fastify instance.
3. **Request-specific Access**: Make the database available on each request object for convenience.
4. **Proper Cleanup**: Ensure the connection is properly closed when the server shuts down.
5. **V8 Optimized**: Ensure the db plugin adheres to the optimization guidelines of the JavaScript Engine ([https://mathiasbynens.be/notes/shapes-ics](https://mathiasbynens.be/notes/shapes-ics)).

## 1. Defining the Fastify plugin

The plugin creates a MongoDB connection and makes it available throughout your Fastify application. Let's break down in the code comments how it works and why it is designed this way.

```javascript
// dbInstance.js
import fp from 'fastify-plugin'
import { MongoClient } from 'mongodb'

//
// Remember to define your environment variables somewhere
// process.env.MONGO_CONNECTION_STRING=mongodb://localhost:27017
// process.env.MONGO_DB_NAME=myDatabase

async function dbInstance(fastify) {
    // Step 1. Client instance
    const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
        compressors: ['snappy', 'zlib'],
    })

    // Step 2. Client connect
    await client.connect()

    // Step 3. Decorate the Fastify instance
    // This line adds the MongoDB database to the Fastify instance
    // so it's available globally within the app
    fastify.decorate('db', client.db(process.env.MONGO_DB_NAME))

    // Step 4: Predefine the request.db property
    // and ensures the request object's shape is consistent
    // from the beginning so V8 can optimize it
    // Importnat: We are not assigning the db here, just letting Fastify know the key exists
    fastify.decorateRequest('db', null)

    // Step 5: Define logic on hooks
    // Hook to assign the db per request
    fastify.addHook('onRequest', async (request) => {
        request.db = fastify.db
    })

    // Hook to assign close the db connection when the server shuts down
    fastify.addHook('onClose', async () => {
        await client.close()
    })
}

// Export wrapping the function with fastify-plugin
export default fp(dbInstance)
```

## 2. Register the plugin in the Fastify app

```javascript
// main.js or app.js
import Fastify from 'fastify'
import dbInstance from 'dbInstance.js'

// Step 1: Create Fastify instance
const fastify = Fastify({
    logger: true,
})

// Step 2: Register the database plugin
fastify.register(dbInstance)

// Step 3: Start the server
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

## 3. Using the DB in the routes and services

Once the plugin is registered, you can use the database in your route handlers:

```javascript
// Using request.db
fastify.get('/users', (request) => {
    return request.db.collection('users').find().toArray()
})

// Using fastify.db (if you need it outside a route handler or a service that receives the fastify instance)
export function getAllUsers(fastify) {
    return fastify.db.collection('users').find().toArray()
}
```

# Why Decorate Both Fastify and the request object?

Decorating the Fastify Instance makes the database available globally throughout your application. You can access it in any part of your code that has access to the Fastify instance, including:

- Plugins
- Hooks
- Services that receive the Fastify instance

Decorating the Request object makes the database available directly on each request object, which provides several benefits:

- **Convenience**: Route handlers automatically have access to the database without needing to reference the Fastify instance.
- **V8 Optimization**: By pre-defining the property structure with `decorateRequest('db', null)`, we help the V8 JavaScript engine optimize the request object's shape.
- **Cleaner Code**: Route handlers can access the database with `request.db` instead of `fastify.db`, making the code more intuitive.

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

## Conclusion

The `dbInstance` plugin provides a clean, efficient way to integrate MongoDB with Fastify applications. By creating a single connection and making it available throughout your application, you can:

1. Improve performance by reusing connections
2. Simplify your code with convenient database access
3. Ensure proper resource management
4. Optimize network traffic with compression

This pattern works well for most applications and can be extended to support more complex scenarios as needed. By following these practices, you'll have a solid foundation for building scalable, maintainable Fastify applications with MongoDB.

---

That's it for now, happy coding! 🚀
