import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

export const collections = {
    blog: defineCollection({
        loader: glob({
            pattern: '**/[^_]*.md',
            base: './src/blog',
        }),
        schema: z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            author: z.string(),
            image: z
                .object({
                    url: z.string(),
                    alt: z.string(),
                })
                .optional(),
            tags: z.array(z.string()),
        }),
    }),
}
