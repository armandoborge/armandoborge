import contentImage from '../assets/img/content.jpg'
import asanaImage from '../assets/img/yogis.jpg'
import yatchImage from '../assets/img/yatch.jpg'
import womanImage from '../assets/img/woman.jpg'
import cactusImage from '../assets/img/cactus.png'
import jaguarImage from '../assets/img/jaguar.jpg'
import mexicoImage from '../assets/img/mx.jpg'
import notebookImage from '../assets/img/notebook.jpg'
import conconImage from '../assets/img/concon.jpg'

// Logo filename suffix = the theme it is used in (`-light` = light mode, `-dark` = dark mode).
import contentSeedLogoLight from '../assets/logos/content-seed-light.png'
import contentSeedLogoDark from '../assets/logos/content-seed-dark.png'
import tribuYogaLogoLight from '../assets/logos/tribu-yoga-light.png'
import tribuYogaLogoDark from '../assets/logos/tribu-yoga-dark.png'
import capitallLogoLight from '../assets/logos/capitall-light.png'
import capitallLogoDark from '../assets/logos/capitall-dark.png'
import laCandidietaLogo from '../assets/logos/la-candidieta.png'
import melisaLogoLight from '../assets/logos/melisa-light.png'
import melisaLogoDark from '../assets/logos/melisa-dark.png'

import contentSeedShot1 from '../assets/screenshots/content-seed-1.png'
import contentSeedShot2 from '../assets/screenshots/content-seed-2.png'
import contentSeedShot3 from '../assets/screenshots/content-seed-3.png'
import tribuYogaShot1 from '../assets/screenshots/tribu-yoga-1.png'
import tribuYogaShot2 from '../assets/screenshots/tribu-yoga-2.png'
import tribuYogaShot3 from '../assets/screenshots/tribu-yoga-3.png'
import tribuYogaShot4 from '../assets/screenshots/tribu-yoga-4.png'
import tribuYogaShot5 from '../assets/screenshots/tribu-yoga-5.png'
import tribuYogaShot6 from '../assets/screenshots/tribu-yoga-6.png'
import tribuYogaShot7 from '../assets/screenshots/tribu-yoga-7.png'
import tribuYogaShot8 from '../assets/screenshots/tribu-yoga-8.png'
import tribuYogaShot9 from '../assets/screenshots/tribu-yoga-9.png'
import melisaShot1 from '../assets/screenshots/melisa-redondo-1.png'
import melisaShot2 from '../assets/screenshots/melisa-redondo-2.png'
import melisaShot3 from '../assets/screenshots/melisa-redondo-3.png'
import melisaShot4 from '../assets/screenshots/melisa-redondo-4.png'
import melisaShot5 from '../assets/screenshots/melisa-redondo-5.png'
import melisaShot6 from '../assets/screenshots/melisa-redondo-6.png'

export const selectedWork = [
    {
        slug: 'content-seed',
        name: 'Content Seed',
        subtitle: 'AI Content Generation Tool',
        description:
            'An AI-powered content generator that creates carousels, stories, email sequences and content plans for creators and agencies.',
        year: 2026,
        image: contentImage,
        caseStudy: {
            logo: { light: contentSeedLogoLight, dark: contentSeedLogoDark },
            tagline: 'AI-native content generation for founders, operators, and agencies',
            yearLabel: '2026',
            role: 'Co-founder & Engineer',
            liveUrl: 'https://contentseed.app',
            sections: [
                {
                    heading: 'The trigger',
                    body: [
                        `In early 2026, my co-founder Melisa and I were managing Instagram content for [Tribu Yoga](/projects/tribu-yoga). Every planning session followed the same rhythm: revisiting the brand voice, redefining the audience, debating positioning angles, and refining posts through nearly identical rounds of edits.`,
                        `Eventually it got hard to ignore what was actually going on. The work felt creative on the surface, but underneath it ran on a fixed structure — the same decisions, the same frameworks, the same kinds of posts, every time. We were really just running a system we'd never bothered to write down.`,
                        `Two months after applying that structure consistently to [Tribu Yoga](/projects/tribu-yoga)'s content, the account gained 5,000 new followers. Reaching the first 10,000 had taken years.`,
                        `That result is what pushed us to actually start building Content Seed.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The audience',
                    body: [
                        `Content Seed is built for people who already know what they want to communicate but don't have the time to turn ideas into polished content. Founders, operators, agencies, copywriters, and social media managers all face the same problem: content is necessary, but it isn't their primary job.`,
                        `The real bottleneck is usually execution, not creativity. There's a gap between "I know what I want to say" and "here's a finished, on-brand article ready to publish."`,
                        `That gap costs hours every week, and most generic AI tools don't actually solve it — they just hand back fragments. The user still has to structure the strategy, shape the messaging, and turn it all into something publishable.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'What it does',
                    body: [
                        `Content Seed runs structured workflows around the formats creators and brands actually publish: carousels, story sequences, email campaigns, monthly content plans, brand pillars, and idea generation.`,
                        `Users answer a concise set of strategic questions about their audience, positioning, and voice. The platform then produces publishable content tailored to the right format, tone, and objective in minutes instead of hours.`,
                        `The first release is focused on Spanish-speaking markets across Latin America and Spain, allowing us to iterate quickly within a specific audience before expanding globally.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The moat: encoded marketing strategy',
                    body: [
                        `The differentiation isn't the language models themselves. Everyone has access to the same foundational technology.`,
                        `What Content Seed captures is marketing judgment. Much of the system is built around Melisa's experience developing brand strategy across her own ventures, [Tribu Yoga](/projects/tribu-yoga), and client work. That expertise was translated into prompt structures, decision trees, and repeatable frameworks.`,
                        `The flows are not simply "generate a carousel." They are designed around concepts like audience awareness, educational hook patterns, funnel positioning, and conversion intent. The product guides users through strategic decisions they often don't know they should be making.`,
                        `Someone using a generic AI chatbot technically has access to the same model we use. What they don't have is the strategic layer embedded into the process itself. That layer is the product.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'A deliberate engineering choice',
                    body: [
                        `Before Content Seed, most of the systems I built followed the same philosophy: own everything end-to-end and build as much infrastructure internally as possible.`,
                        `This project was the first time I intentionally reversed that approach.`,
                        `I adopted third-party services wherever they created meaningful leverage — Resend for email delivery, Clerk for authentication, shadcn/ui for components, and React Router 7 as the framework layer. The tradeoff was deliberate: give up a degree of control in exchange for faster iteration and earlier customer feedback.`,
                        `That decision reflects a broader shift in how I think about engineering. After more than a decade of building software, I'd rather learn fast than enjoy building every layer myself. I can always write more code — what's genuinely hard to come by is real customer feedback.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The bet',
                    body: [
                        `The thesis behind Content Seed is straightforward: people with real expertise shouldn't spend hours every week fighting the mechanics of publishing.`,
                        `Content pays off over time — it builds an audience, sharpens positioning, and creates leverage. But for a lot of operators, actually producing it is still far more manual than it should be.`,
                        `If that assumption is correct, Content Seed becomes infrastructure for a category of professionals currently underserved by both generic AI tools and traditional agencies.`,
                    ].join('\n\n'),
                },
            ],
            screenshots: [
                { src: contentSeedShot1, alt: 'Content Seed landing page hero' },
                { src: contentSeedShot2, alt: 'Content Seed feature overview' },
                { src: contentSeedShot3, alt: 'Content Seed account sign-up screen' },
            ],
        },
    },
    {
        slug: 'tribu-yoga',
        name: 'Tribu Yoga',
        subtitle: 'SaaS Platform',
        description:
            'A wellness SaaS application designed to manage yoga studios, streamline class scheduling and support studio operations.',
        year: 2020,
        image: asanaImage,
        caseStudy: {
            logo: { light: tribuYogaLogoLight, dark: tribuYogaLogoDark },
            tagline: 'Multi-tenant SaaS for yoga studio management',
            yearLabel: '2020 – Present',
            role: 'Co-founder & CTO',
            liveUrl: 'https://www.tribu.yoga',
            sections: [
                {
                    heading: 'The origin',
                    body: [
                        `In early 2020, my co-founder Melisa and I were traveling through Mexico when the pandemic brought everything to a halt. At the time, we were already operating [La Candidieta](/projects/la-candidieta) and the early version of [Capitall](/projects/capitall) under Tripping Cats OÜ. As yoga studios shut down alongside thousands of other in-person businesses, we watched communities disappear almost overnight.`,
                        `Studio owners suddenly had to reinvent the way they operated. Classes moved online, payments became digital, and student management had to happen remotely. Most existing tools were either built for large gyms or assembled from disconnected booking software, spreadsheets, and payment platforms. Very little was designed specifically for yoga studios or the realities of small independent operators.`,
                        `Tribu Yoga began as a direct response to that gap. From the beginning, the goal was to build for the Latin American market at scale. Over time, the platform expanded into Europe and North America as well.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'What it does',
                    body: [
                        `Tribu Yoga consolidates the operational side of running a studio into a single multi-tenant platform. Scheduling, payments, virtual classes, student management, content delivery, and studio communication all live within the same system, with dedicated subdomains and localized integrations for each studio.`,
                        `Since launching in 2020, the platform has supported more than 250 yoga studios across 16 countries, serving over 15,000 students and facilitating more than 500,000 class bookings.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The arc',
                    body: [
                        `The progression from Senior Developer to Web Architect and eventually CTO wasn't a planned career ladder. Each role emerged because the platform demanded it.`,
                        `At first the work was straightforward: build the features studios needed to operate. As the product expanded internationally, the harder problems turned architectural — multi-currency payments, regional regulations, time zones, and country-specific integrations all pushed the system beyond feature work into real infrastructure.`,
                        `Later the hard part was operational. Running engineering at that scale meant building systems that held up consistently across countries, customer expectations, and edge cases I couldn't predict.`,
                        `The titles just tracked that growing complexity — they were never the point.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The hardest technical decision',
                    body: [
                        `Early in the project, I seriously considered building native mobile apps. At the time, browser-based push notifications were still unreliable, and yoga studios depend heavily on engagement loops: reminders, booking confirmations, cancellations, and payment notifications.`,
                        `A native app would have solved that cleanly — but I still chose the web. It came down to leverage: one codebase, one deployment pipeline, instant updates, and no waiting on app store approval cycles. The cost was putting more work into engagement systems without native advantages. What I got back was years of faster iteration and onboarding that worked across countries with no friction.`,
                        `Years later, that tradeoff has clearly paid off.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The hardest operational moment',
                    body: [
                        `In 2025, FaunaDB announced its shutdown with a tight migration timeline. Tribu Yoga had been built on top of it. That meant migrating more than half a million production records — along with nearly five years of accumulated functionality — while studios continued running classes on the platform.`,
                        `After evaluating both SQL and NoSQL alternatives, I chose MongoDB Atlas for its operational maturity and flexibility. The migration was completed over a three-month sprint without taking production offline.`,
                        `The experience reinforced a lesson I now take seriously: infrastructure portability matters. Proprietary systems can disappear on someone else's schedule, and when they do, you inherit the consequences immediately.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The customer truth',
                    body: [
                        `After years of running Tribu Yoga across different countries and markets, the clearest lesson is also a plain one: customers pay to have a real problem solved, not for a story about software.`,
                        `A polished interface, good branding, and a long feature list all help — but none of it matters if the underlying problem isn't painful enough. When the product genuinely improves something customers already have to do, they'll forgive the rough edges. When it doesn't, no amount of positioning or technical polish will save it.`,
                        `In the end, that's what decides whether the business exists at all.`,
                    ].join('\n\n'),
                },
            ],
            screenshots: [
                { src: tribuYogaShot1, alt: 'Tribu Yoga app screenshot 1' },
                { src: tribuYogaShot2, alt: 'Tribu Yoga app screenshot 2' },
                { src: tribuYogaShot3, alt: 'Tribu Yoga app screenshot 3' },
                { src: tribuYogaShot4, alt: 'Tribu Yoga app screenshot 4' },
                { src: tribuYogaShot5, alt: 'Tribu Yoga app screenshot 5' },
                { src: tribuYogaShot6, alt: 'Tribu Yoga app screenshot 6' },
                { src: tribuYogaShot7, alt: 'Tribu Yoga app screenshot 7' },
                { src: tribuYogaShot8, alt: 'Tribu Yoga app screenshot 8' },
                { src: tribuYogaShot9, alt: 'Tribu Yoga app screenshot 9' },
            ],
        },
    },
    {
        slug: 'capitall',
        name: 'Capitall',
        subtitle: 'SaaS Platform',
        description:
            'A personal finance SaaS platform that helps users set financial goals, track expenses, receive payment reminders, and gain financial education.',
        year: 2020,
        image: yatchImage,
        caseStudy: {
            logo: { light: capitallLogoLight, dark: capitallLogoDark },
            tagline: 'Personal finance SaaS for goals, expenses, and financial education',
            yearLabel: '2020',
            role: 'Co-founder & Full-Stack Engineer',
            liveUrl: 'https://capitallapp.netlify.app',
            sections: [
                {
                    heading: 'The origin',
                    body: [
                        `In 2020, while operating [La Candidieta](/projects/la-candidieta), we kept noticing the same pattern among friends and family across Latin America: inconsistent spending habits, unmanaged debt, little understanding of investing, and almost no access to trustworthy financial education.`,
                        `Most financial information available online felt polarized. It either came from banks selling financial products or creators selling courses. Very little was designed to help ordinary people build healthier long-term financial habits.`,
                        `Capitall was our attempt to close that gap.`,
                        `My co-founder Melisa and I built the product alongside Daniel, a financial specialist, as a platform focused on spending awareness, debt reduction, investment fundamentals, and financial education tailored specifically for Latin American users.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'What we built',
                    body: [
                        `The platform combined habit tracking, financial operations, OCR receipt scanning, contextual recommendations based on spending patterns, and an educational content layer backed by a relatively complex data model.`,
                        `From an engineering perspective, Capitall was a turning point for me personally. It was the first project where I had to think about the product as a complete operating system rather than a collection of isolated features.`,
                        `That shift changed the way I approached software permanently.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The truth',
                    body: [
                        `We launched, onboarded around 25 users, and it didn't take long to see the real issue: the product was treating symptoms, not the root problem.`,
                        `Financial behavior doesn't improve simply because a tracker exists. Users who already had healthy habits benefited from the platform. Users who struggled with discipline generally didn't. Tracking behavior wasn't enough to create behavior change on its own.`,
                        `Around the same time, [Tribu Yoga](/projects/tribu-yoga) began gaining meaningful traction. We decided to sunset Capitall and focus our energy on the product that was clearly solving a stronger problem.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The lesson',
                    body: [
                        `Capitall taught me one of the most important product lessons I've learned so far:`,
                        `**If your product depends on changing human behavior, it will almost always struggle. The strongest products reduce friction around habits people already have.**`,
                        `That idea has shaped nearly every product decision I've made since.`,
                        `[Tribu Yoga](/projects/tribu-yoga) succeeds because studio owners were already running classes and managing students — the platform simply made that work easier. [Content Seed](/projects/content-seed) works for the same reason: creators already need to publish content, and the product reduces the operational cost of doing it consistently.`,
                    ].join('\n\n'),
                },
            ],
            screenshots: [],
        },
    },
    {
        slug: 'la-candidieta',
        name: 'La Candidieta',
        subtitle: 'Health & Wellness App',
        description:
            'A health app designed to help women recover from Candidiasis through guided nutrition, practical recipes, and sustainable lifestyle tips.',
        year: 2018,
        image: womanImage,
        caseStudy: {
            logo: { light: laCandidietaLogo, dark: laCandidietaLogo },
            tagline: 'A health platform for women recovering from Candidiasis through diet, habits, and tracking',
            yearLabel: '2018 – 2023',
            role: 'Co-founder & Full-Stack Engineer',
            liveUrl: 'https://lacandidieta.netlify.app',
            sections: [
                {
                    heading: 'The origin',
                    body: [
                        `La Candidieta began because of someone close to my family.`,
                        `They were dealing with Candidiasis — a condition that can be deeply disruptive to daily life while also being frequently misunderstood and inconsistently treated. As my co-founder and I researched the topic, we kept encountering the same pattern: strong correlations between symptoms, diet, and everyday habits.`,
                        `People with the same diagnosis were often having completely different experiences depending on what they ate and how they lived.`,
                        `The project initially started as a blog and educational health magazine where we documented what we were learning. Over time, it evolved into a tracking platform that allowed users to log meals, macronutrients, and symptoms, making the relationship between diet and physical response more visible over time.`,
                        `At the time, I was still working as a software engineer at Eleven Systems. La Candidieta was the project that transformed entrepreneurship from an abstract interest into something I actively pursued.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The audience',
                    body: [
                        `During its lifespan, the platform served more than 3,000 women across Latin America, initially through social media and later through the product itself.`,
                        `What stood out most was the nature of the feedback. Users didn't just leave short comments or support tickets. They sent detailed messages, personal stories, and accounts of recovery. The response felt unusually human because the problem itself was deeply personal.`,
                        `It became clear very quickly that many users had struggled to find practical support anywhere else.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The five-year arc',
                    body: [
                        `Technically, the platform was relatively lightweight to maintain after launch. The difficult part was emotional scale.`,
                        `Users wanted more than a tracker. They wanted guidance, reassurance, and personal support from people who understood what they were experiencing. We responded as much as we could, but eventually the economics stopped making sense. The product was intentionally affordable, the audience was highly niche, and the amount of time required per user kept growing faster than revenue.`,
                        `By 2023, [Tribu Yoga](/projects/tribu-yoga) had become the clearer long-term opportunity, and we decided to sunset La Candidieta to focus there fully.`,
                        `I may eventually republish the educational side of the project — the research, articles, and private resources — because the information itself still holds value even if the business model did not.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The lesson',
                    body: [
                        `La Candidieta taught me that some meaningful products are never meant to scale aggressively, and that doesn't diminish their value.`,
                        `Some projects exist because they genuinely help a small group of people. They operate for as long as they make sense, and eventually they end without needing to become venture-scale businesses.`,
                        `It also taught me to distinguish earlier between a mission-driven project and a scalable business. Both matter. They simply operate under different constraints and should be evaluated by different standards.`,
                    ].join('\n\n'),
                },
            ],
            screenshots: [],
        },
    },
    {
        slug: 'melisa-redondo',
        name: 'Melisa Redondo',
        subtitle: 'Designer & Brand Strategist Portfolio',
        description:
            'A custom multilingual portfolio and personal brand showcase for a creative professional with an international client base.',
        year: 2023,
        image: cactusImage,
        caseStudy: {
            logo: { light: melisaLogoLight, dark: melisaLogoDark },
            tagline: 'Multilingual portfolio for a designer and brand strategist',
            yearLabel: '2023',
            role: 'Full-Stack Engineer',
            liveUrl: 'https://melisaredondo.com',
            sections: [
                {
                    heading: 'The context',
                    body: [
                        `My co-founder Melisa and I have spent years building products together: [Tribu Yoga](/projects/tribu-yoga), [La Candidieta](/projects/la-candidieta), [Capitall](/projects/capitall), and [Content Seed](/projects/content-seed).`,
                        `Alongside those shared ventures, she also runs an independent design and brand strategy practice serving clients across both Spanish and English-speaking markets.`,
                        `In 2023, she asked me to build her portfolio site. Compared to the SaaS platforms we'd already developed together, it was a relatively small project. But in a different sense, it carried a different kind of pressure: this time I was building against her standards as a designer, rather than collaborating on shared product decisions.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'Why build it personally',
                    body: [
                        `Melisa has an unusually high standard for visual detail, performance, and overall design quality. After years of working together, we had developed a shared understanding of what "finished" should feel like, which made it more natural to build the project internally than outsource it elsewhere.`,
                        `We both knew the level of refinement the site needed before it could be considered complete.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The technical decisions',
                    body: [
                        `One of our goals was to keep the project as self-contained and durable as possible.`,
                        `The site was built without dependencies on third-party CMS platforms or services that could later introduce pricing pressure, technical limitations, or migration headaches. Content lives directly in markdown files inside the repository, and the site itself is statically generated. Hosting is effectively the only external dependency.`,
                        `I also used the project as an opportunity to evaluate Next.js more seriously as part of my long-term stack. It was a low-risk environment where I could test architectural decisions without major operational consequences.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'The multilingual angle',
                    body: [
                        `The site supports both Spanish and English because that reflects Melisa's actual client base.`,
                        `The multilingual setup wasn't added as a technical exercise or portfolio feature. It was a practical requirement. Her work is viewed internationally, and the experience needed to feel consistent regardless of language without splitting the brand across multiple domains or disconnected experiences.`,
                    ].join('\n\n'),
                },
                {
                    heading: 'Why this project belongs here',
                    body: [
                        `Most of my work revolves around SaaS platforms and operational systems. Melisa's portfolio highlights a different side of my work: static, content-driven websites with a strong emphasis on performance, typography, and visual execution.`,
                        `It also demonstrates something equally important — the ability to build according to someone else's standards and creative direction, not only my own. Designing for users who never see the implementation details is one discipline. Building for a designer who notices every detail is another. Both have shaped the way I approach frontend engineering.`,
                    ].join('\n\n'),
                },
            ],
            screenshots: [
                { src: melisaShot1, alt: 'Melisa Redondo portfolio screenshot 1' },
                { src: melisaShot2, alt: 'Melisa Redondo portfolio screenshot 2' },
                { src: melisaShot3, alt: 'Melisa Redondo portfolio screenshot 3' },
                { src: melisaShot4, alt: 'Melisa Redondo portfolio screenshot 4' },
                { src: melisaShot5, alt: 'Melisa Redondo portfolio screenshot 5' },
                { src: melisaShot6, alt: 'Melisa Redondo portfolio screenshot 6' },
            ],
        },
    },
]

export const otherProjects = [
    {
        name: 'Tripping Cats',
        year: 2019,
        description: 'Minimalist landing page for Tripping Cats OÜ.',
        url: 'https://www.trippingcats.com',
        image: jaguarImage,
    },
    {
        name: 'Travel Photo Log',
        year: 2017,
        description: 'Travel journal app for travel memories and pictures.',
        url: 'https://travels.armandoborge.com',
        image: mexicoImage,
    },
    {
        name: 'Challenge Tracker',
        year: 2026,
        description: 'Minimalist private habits and challenges tracker.',
        url: 'https://tracker.armandoborge.com',
        image: notebookImage,
    },
    {
        name: 'Armando Borge',
        year: 2025,
        description: 'Minimalist, statically generated personal site.',
        url: 'https://www.armandoborge.com',
        image: conconImage,
    },
]
