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
            tagline: 'AI-native content generation for creators and agencies',
            yearLabel: '2026',
            role: 'Founder & Sole Engineer',
            liveUrl: 'https://contentseed.app',
            context:
                "Content creation is the bottleneck for solo creators and small agencies. Most of the volume — carousels, story sequences, email funnels, content calendars — is repetitive, but quality matters too much to outsource cheaply. Content Seed generates structured, on-brand content end-to-end, with the creator's voice as input and publishable artifacts as output.",
            built: [
                'Solo build across architecture, AI pipelines, backend, frontend, and cloud infrastructure',
                'LLM orchestration layer with raw integrations to Anthropic, OpenAI, and Ollama — no framework abstractions, full control over prompts and tool use',
                'Agentic workflows for multi-step generation (research → outline → draft → refine)',
                'Streaming UI via Server-Sent Events for real-time output',
                'Vector retrieval with MongoDB Atlas Vector Search for brand-voice and context-aware generation',
                'End-to-end visual identity and product design',
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
        year: 2021,
        image: asanaImage,
        caseStudy: {
            logo: { light: tribuYogaLogoLight, dark: tribuYogaLogoDark },
            tagline: 'Multi-tenant SaaS for yoga studio management',
            yearLabel: '2021 – Present',
            role: 'Co-founder & CTO (Senior Developer → Web Architect → CTO)',
            liveUrl: 'https://www.tribu.yoga',
            context:
                "Yoga studios run on stitched-together tools — booking software, payment processors, video platforms, spreadsheets. Tribu Yoga consolidates the operational stack into a single multi-tenant platform with per-studio subdomains, owned data, and integrations the studio owners don't have to manage themselves.",
            built: [
                'Sole engineer across product, infrastructure, and engineering — every line of code in production is mine',
                'Cloud-native architecture on GCP, fully managed via Terraform IaC',
                'Multi-tenant system with auto-deployed per-studio subdomains',
                'End-to-end stack: React/Next.js frontend, Node.js backend, MongoDB',
                'Integrations with Stripe, Zoom, PayPal, and Intercom Fin AI',
                'Promoted from Senior Developer to CTO over four years as the platform scaled',
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
            role: 'Co-founder & Full-Stack Engineer · Built under Tripping Cats OÜ',
            liveUrl: 'https://capitallapp.netlify.app',
            context:
                'Personal finance tools sit at extremes — either too simple (budget trackers) or too professional (accounting software). Capitall lived in the middle: a single platform for goal-setting, expense tracking, payment reminders, and financial literacy for everyday users.',
            built: [
                'Front-end web portal end-to-end',
                'Database design and infrastructure setup',
                'Multi-feature application: goal tracking, expense logging, payment reminders, educational content',
                'Built with design and brand partner Melisa Redondo under Tripping Cats OÜ',
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
            tagline: 'Health app for women recovering from Candidiasis through nutrition and lifestyle',
            yearLabel: '2018',
            role: 'Co-founder & Full-Stack Engineer · Built under Tripping Cats OÜ',
            liveUrl: 'https://lacandidieta.netlify.app',
            context:
                "Candidiasis recovery requires sustained dietary discipline, but generic nutrition apps don't carry the specific protocols. La Candidieta delivered guided meal plans, condition-specific blog articles, and an internal ebook for women navigating recovery.",
            built: [
                'Full-stack application end-to-end',
                'Personalized meal plan delivery system',
                'Specialized content platform with blog articles and an internal ebook',
                'Built with design and brand partner Melisa Redondo under Tripping Cats OÜ',
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
            role: 'Full-Stack Engineer · Built for long-term design partner Melisa Redondo',
            liveUrl: 'https://melisaredondo.com',
            context:
                'A creative professional working across markets needs a portfolio that adapts to language and region without fragmenting the brand. The site provides a single multilingual showcase of projects and services, scaling with her international client base.',
            built: [
                'Custom multilingual portfolio with project and services showcase',
                'Markdown-based CMS — content owned in the repo, no third-party CMS dependency',
                'Statically generated for performance and zero ongoing infrastructure cost',
                'Designed and developed in collaboration with Melisa, who created all brand assets',
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
        year: 2018,
        description: 'Travel journal app for real-time travel memories.',
        url: 'https://travels.armandoborge.com',
        image: mexicoImage,
    },
    {
        name: 'Challenge Tracker',
        year: 2026,
        description: 'Minimalist private habits and challenges tracker.',
        url: 'https://challenge-tracker.armandoborge.com',
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
