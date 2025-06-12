import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
    const posts = await getCollection('blog')

    return rss({
        title: 'Armando Borge',
        description: 'Armando Borge Personal Website',
        site: context.site,
        items: posts.map((post) => {
            const { id, title, description, date } = post.data

            return {
                title: title,
                date: date,
                description: description,
                link: `/blog/${id}/`,
            }
        }),
        customData: `<language>en-us</language>`,
    })
}
