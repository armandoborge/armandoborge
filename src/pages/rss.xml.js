import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
    const posts = await getCollection('blog')

    return rss({
        title: 'Armando Borge',
        description: 'Personal Website',
        site: context.site,
        items: posts.map((post) => {
            const { id, title, description, pubDate } = post.data

            return {
                title: title,
                pubDate: pubDate,
                description: description,
                link: `/posts/${id}/`,
            }
        }),
        customData: `<language>en-us</language>`,
    })
}
