export const STABILITY_BADGE = {
    evergreen: { label: 'Evergreen', color: '#34d399', bg: '#0a2018' },
    stable: { label: 'Stable', color: '#60a5fa', bg: '#0a1428' },
    current: { label: 'Current 2026', color: '#f59e0b', bg: '#1a1208' },
}

export const roadmap = [
    {
        quarter: 'Q0',
        months: 'Weeks 1–6 (Pre-Sprint)',
        theme: 'Math Ramp',
        subtitle: 'Intuition-first linear algebra, calculus & notation — no prior depth required',
        hours: '~90 hrs',
        color: '#f97316',
        rationale:
            "Most math courses teach procedures, not understanding. The goal here isn't a math degree — it's enough intuition to follow backpropagation, read ML papers without losing the plot, and know what matrix operations are actually doing. Six weeks, then we move on.",
        topics: [
            {
                week: 'Weeks 1–2',
                title: 'Linear Algebra — Intuition First',
                items: [
                    'Vectors: what they are geometrically, dot products, projections',
                    'Matrices as transformations — not just arrays of numbers',
                    'Matrix multiplication: why the order matters, what it means',
                    'Eigenvalues & eigenvectors: the conceptual picture (used in PCA, SVD)',
                    "SVD overview: don't derive it, understand what it does",
                ],
                resources: [
                    {
                        name: '3Blue1Brown – Essence of Linear Algebra (YouTube, 16 videos)',
                        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
                        stability: 'evergreen',
                    },
                    {
                        name: 'No Bullshit Guide to Linear Algebra – Ivan Savov (book)',
                        url: 'https://minireference.com/',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Khan Academy – Linear Algebra (fill gaps on demand)',
                        url: 'https://www.khanacademy.org/math/linear-algebra',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 3–4',
                title: 'Calculus — Just What ML Needs',
                items: [
                    'Functions, limits, derivatives — what a derivative actually means visually',
                    'Chain rule: this is the entire mathematical basis of backpropagation',
                    "Partial derivatives and gradients: how a model 'knows which way to improve'",
                    'The gradient descent intuition: walking downhill on a loss surface',
                    'No integrals needed — skip them entirely for now',
                ],
                resources: [
                    {
                        name: '3Blue1Brown – Essence of Calculus (YouTube, 12 videos)',
                        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Khan Academy – Derivatives & Chain Rule (on-demand reference)',
                        url: 'https://www.khanacademy.org/math/differential-calculus',
                        stability: 'stable',
                    },
                    {
                        name: 'Calculus Made Easy – Silvanus Thompson (free PDF, 1910, still brilliant)',
                        url: 'https://calculusmadeeasy.org/',
                        stability: 'evergreen',
                    },
                ],
            },
            {
                week: 'Weeks 5–6',
                title: 'Probability, Statistics & Notation',
                items: [
                    'Probability basics: events, conditional probability, Bayes theorem',
                    'Distributions: Normal, Bernoulli, Softmax — what they look like and when they appear',
                    'Mean, variance, standard deviation — from the ML perspective not the textbook',
                    'Reading math notation: Greek letters, summations, argmax/argmin',
                    'Log-likelihood and why we maximize it — intuition only, no heavy derivations',
                ],
                resources: [
                    {
                        name: 'StatQuest – Probability & Statistics playlist (YouTube)',
                        url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Seeing Theory – visual probability textbook (free online)',
                        url: 'https://seeing-theory.brown.edu/',
                        stability: 'stable',
                    },
                    {
                        name: 'Mathematics for Machine Learning – Ch 1–6 (free PDF, Cambridge)',
                        url: 'https://mml-book.github.io/',
                        stability: 'evergreen',
                    },
                ],
            },
        ],
        project:
            "No project this quarter — but do this: after Week 2, open Karpathy's micrograd repo and read it. Don't expect to understand it fully yet. After Week 4, read it again. By Week 6, understanding every line is your litmus test that the math ramp worked.",
        whyFutureProof:
            'Linear algebra and calculus predate computers by a century. They will still be the foundation of ML in 2030 and 2040. Hard to think of a better use of six weeks.',
    },
    {
        quarter: 'Q1',
        months: 'Months 1–3',
        theme: 'The Foundation Sprint',
        subtitle: 'Math that lasts forever, Python ML ecosystem, Classical ML',
        hours: '~180 hrs',
        color: '#e8c547',
        rationale:
            "These fundamentals haven't changed in 30 years and won't change by 2030. Get them right and you can reason about whatever architecture shows up next.",
        topics: [
            {
                week: 'Weeks 1–2',
                title: 'Math in Context — Applied to ML',
                items: [
                    'Revisit Q0 concepts now applied to real ML code: matrix ops in NumPy',
                    'Implement gradient descent from scratch in pure Python — no frameworks',
                    'Understand loss functions geometrically: MSE, cross-entropy, why they work',
                    'Build intuition for why scaling and normalization matter (tied to gradient flow)',
                    "Read Karpathy's micrograd fully — you should now understand every line",
                ],
                resources: [
                    {
                        name: '3Blue1Brown – Neural Networks series (YouTube, 4 videos)',
                        url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',
                        stability: 'evergreen',
                    },
                    {
                        name: 'StatQuest with Josh Starmer – ML fundamentals (YouTube)',
                        url: 'https://www.youtube.com/@statquest',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Karpathy – micrograd (GitHub) — your Q0 litmus test, now completed',
                        url: 'https://github.com/karpathy/micrograd',
                        stability: 'evergreen',
                    },
                ],
            },
            {
                week: 'Weeks 3–4',
                title: 'Python ML Ecosystem',
                items: [
                    'NumPy, Pandas — industry-standard for 15+ years, going nowhere',
                    'Matplotlib / Seaborn for visualization',
                    'Scikit-learn pipeline patterns and API conventions',
                    'Jupyter / VS Code workflows, reproducibility practices',
                ],
                resources: [
                    {
                        name: 'Kaggle – Free micro-courses: Python, Pandas, Visualization',
                        url: 'https://www.kaggle.com/learn',
                        stability: 'stable',
                    },
                    {
                        name: 'Python Data Science Handbook – free online (VanderPlas)',
                        url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
                        stability: 'evergreen',
                    },
                ],
            },
            {
                week: 'Weeks 5–11',
                title: 'Classical ML — Still Essential in 2030',
                items: [
                    'Linear & Logistic Regression: the baseline every ML engineer must beat',
                    'Ensemble methods: XGBoost / LightGBM — still dominate tabular data in production',
                    'Model evaluation: cross-validation, bias-variance, feature importance',
                    'Unsupervised: K-Means, PCA, UMAP — critical for embedding analysis',
                    'First Kaggle competition end-to-end (Titanic → House Prices progression)',
                ],
                resources: [
                    {
                        name: 'Hands-On Machine Learning 3rd ed. (Géron) – Ch 1–9',
                        url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/',
                        stability: 'stable',
                    },
                    {
                        name: 'fast.ai – Practical Deep Learning Part 1 (lessons 1–4)',
                        url: 'https://course.fast.ai/',
                        stability: 'stable',
                    },
                    {
                        name: 'Kaggle competitions – Titanic, House Prices, Tabular Playground',
                        url: 'https://www.kaggle.com/competitions',
                        stability: 'stable',
                    },
                ],
            },
        ],
        project:
            'Train an XGBoost model on a real dataset (churn, engagement, or revenue prediction). Deploy it as a REST API. Measure it. This is your first production ML system.',
        whyFutureProof:
            'XGBoost and classical ML dominate tabular data — the most common business use case — and will continue to in 2030. The math here is the same math that runs inside transformers.',
    },
    {
        quarter: 'Q2',
        months: 'Months 4–6',
        theme: 'Deep Learning Core',
        subtitle: 'Neural networks from scratch, PyTorch, Computer Vision, NLP foundations',
        hours: '~180 hrs',
        color: '#60a5fa',
        rationale:
            "PyTorch has won the research framework war. There's a real difference between engineers who understand what's happening inside a model and those who just wrap API calls — this quarter is where that gap opens up.",
        topics: [
            {
                week: 'Weeks 13–17',
                title: 'Neural Networks & PyTorch',
                items: [
                    'Backpropagation from scratch — code it manually once, understand it forever',
                    'PyTorch tensors, autograd, training loops — the industry standard framework',
                    'Regularization: Dropout, BatchNorm, weight decay',
                    'Optimizers: SGD, Adam, AdamW, learning rate schedules',
                    'Mixed precision training (FP16/BF16) — essential for modern GPU work',
                ],
                resources: [
                    {
                        name: 'Andrej Karpathy – Neural Networks: Zero to Hero (YouTube)',
                        url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
                        stability: 'evergreen',
                    },
                    {
                        name: 'PyTorch Official Tutorials – pytorch.org',
                        url: 'https://pytorch.org/tutorials/',
                        stability: 'stable',
                    },
                    {
                        name: 'fast.ai – Practical Deep Learning Part 1 (all lessons)',
                        url: 'https://course.fast.ai/',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 18–21',
                title: 'Computer Vision',
                items: [
                    'CNNs: convolutions, pooling, receptive fields — foundational intuition',
                    'ResNets, EfficientNet — transfer learning patterns still used in production',
                    'Vision Transformers (ViT) — the modern standard, same architecture as LLMs',
                    'CLIP and multimodal embeddings — increasingly central to AI systems',
                    'Image classification project: fine-tune on your own domain data',
                ],
                resources: [
                    {
                        name: 'Stanford CS231n – Lecture Notes (free, canonical reference)',
                        url: 'http://cs231n.stanford.edu/',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Hugging Face – Computer Vision Course (free)',
                        url: 'https://huggingface.co/learn/computer-vision-course',
                        stability: 'stable',
                    },
                    {
                        name: 'fast.ai Part 2 – Deep Learning Foundations to Stable Diffusion',
                        url: 'https://course.fast.ai/Lessons/part2.html',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 22–26',
                title: 'NLP Foundations → Attention',
                items: [
                    'Word embeddings: Word2Vec, GloVe — understand what embeddings mean geometrically',
                    'RNNs, LSTMs — understand their limits, not to use them going forward',
                    'The Attention Mechanism — the most important concept in modern AI',
                    'BERT fine-tuning for classification — still a production workhorse in 2026',
                    'Sentence transformers and semantic search — used in every RAG system',
                ],
                resources: [
                    {
                        name: 'Stanford CS224N – NLP with Deep Learning (YouTube, free)',
                        url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVx76',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Hugging Face NLP Course (free, actively maintained)',
                        url: 'https://huggingface.co/learn/nlp-course',
                        stability: 'stable',
                    },
                    {
                        name: 'The Illustrated Transformer – Jay Alammar (blog, canonical)',
                        url: 'https://jalammar.github.io/illustrated-transformer/',
                        stability: 'evergreen',
                    },
                ],
            },
        ],
        project:
            'Build a semantic search or text classification system for a real corpus — support tickets, documentation, or any domain dataset. Use sentence-transformers + a vector store. Make it actually replace a manual workflow.',
        whyFutureProof:
            'PyTorch is the uncontested framework for research and increasingly production. Attention is the engine inside every frontier model. These are not trends — they have a 10+ year horizon.',
    },
    {
        quarter: 'Q3',
        months: 'Months 7–9',
        theme: 'LLMs & AI Engineering',
        subtitle: 'Transformers architecture, Fine-tuning, RAG, Agents — the applied frontier',
        hours: '~180 hrs',
        color: '#a78bfa',
        rationale:
            'If you already know how to ship software, this is where that experience starts paying off. RAG, agents, and evals are not research topics anymore — they are the job.',
        topics: [
            {
                week: 'Weeks 27–30',
                title: 'Transformers: Architecture Deep Dive',
                items: [
                    "Read 'Attention is All You Need' — understand every equation",
                    'GPT architecture: tokenization, positional encoding, causal attention, KV cache',
                    "Build a mini-GPT from scratch (Karpathy's nanoGPT walkthrough)",
                    'Scaling laws, emergent abilities, context window mechanics',
                    'Reasoning models (o1/o3 style): chain-of-thought, test-time compute — the 2025 frontier',
                ],
                resources: [
                    {
                        name: "Karpathy – Let's build GPT from scratch (YouTube, 4hrs)",
                        url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Attention is All You Need – original paper (arXiv 1706.03762)',
                        url: 'https://arxiv.org/abs/1706.03762',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Build a Large Language Model From Scratch – Raschka (book)',
                        url: 'https://www.manning.com/books/build-a-large-language-model-from-scratch',
                        stability: 'stable',
                    },
                    {
                        name: 'Hugging Face Transformers Documentation + source code',
                        url: 'https://huggingface.co/docs/transformers',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 31–35',
                title: 'Fine-tuning, PEFT & Quantization',
                items: [
                    'Full fine-tuning vs. LoRA vs. QLoRA — when to use each in production',
                    'Instruction tuning and DPO (Direct Preference Optimization)',
                    'Quantization: INT8, INT4, GGUF for local inference',
                    'Hugging Face PEFT + Axolotl hands-on: fine-tune a 7B model',
                    'Unsloth for efficient fine-tuning on consumer hardware',
                ],
                resources: [
                    {
                        name: 'Hugging Face PEFT Documentation (actively maintained)',
                        url: 'https://huggingface.co/docs/peft',
                        stability: 'stable',
                    },
                    {
                        name: 'DeepLearning.AI – Finetuning LLMs short course (free)',
                        url: 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/',
                        stability: 'stable',
                    },
                    {
                        name: 'Unsloth – efficient fine-tuning framework + notebooks',
                        url: 'https://github.com/unslothai/unsloth',
                        stability: 'current',
                    },
                    {
                        name: 'Sebastian Raschka – Ahead of AI newsletter (Substack)',
                        url: 'https://magazine.sebastianraschka.com/',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 36–40',
                title: 'RAG Pipelines & Vector Search',
                items: [
                    'Embeddings: what they encode, distance metrics, dimensionality tradeoffs',
                    'Vector databases: pgvector (Postgres), Weaviate, Qdrant — production picks',
                    'RAG architecture: chunking strategies, retrieval, re-ranking',
                    'Advanced RAG: HyDE, multi-query, contextual retrieval, hybrid search',
                    'LLM API patterns: OpenAI, Anthropic, Gemini — structured outputs, tool use',
                    'Prompt engineering: CoT, few-shot, XML structure, system prompt design',
                ],
                resources: [
                    {
                        name: 'LlamaIndex Documentation + Tutorials (stable, widely used)',
                        url: 'https://docs.llamaindex.ai/',
                        stability: 'stable',
                    },
                    {
                        name: 'DeepLearning.AI – Building and Evaluating Advanced RAG (free)',
                        url: 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/',
                        stability: 'stable',
                    },
                    {
                        name: 'Anthropic Prompt Engineering Guide (official, updated regularly)',
                        url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
                        stability: 'stable',
                    },
                    {
                        name: 'pgvector – vector extension for PostgreSQL',
                        url: 'https://github.com/pgvector/pgvector',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 40 (overlap)–43',
                title: 'Agents & Agentic Systems',
                items: [
                    'ReAct pattern, chain-of-thought, tool-calling primitives',
                    'LangGraph for stateful agent workflows (more stable than LangChain)',
                    'Multi-agent patterns: orchestrator-subagent, reflection, critic',
                    'Memory architectures: short-term (context), long-term (vector DB), episodic',
                    'Claude Code & similar coding agents — understand how they work internally',
                ],
                resources: [
                    {
                        name: 'DeepLearning.AI – AI Agents in LangGraph (free short course)',
                        url: 'https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/',
                        stability: 'stable',
                    },
                    {
                        name: 'LangGraph Documentation (preferred over raw LangChain)',
                        url: 'https://langchain-ai.github.io/langgraph/',
                        stability: 'current',
                    },
                    {
                        name: 'Hugging Face Agents Course (free, 2025)',
                        url: 'https://huggingface.co/learn/agents-course',
                        stability: 'stable',
                    },
                    {
                        name: 'Anthropic – Building Effective Agents (official guide)',
                        url: 'https://www.anthropic.com/research/building-effective-agents',
                        stability: 'stable',
                    },
                ],
            },
        ],
        project:
            'Build a production RAG + agent system: ingest a real document corpus, answer questions, take actions via tool calls. Add streaming. Deploy it. This is what AI product work actually looks like.',
        whyFutureProof:
            'The specific libraries will come and go. Retrieval, tool use, memory — those ideas are not going anywhere.',
    },
    {
        quarter: 'Q4',
        months: 'Months 10–12',
        theme: 'Production AI & Leadership',
        subtitle: 'MLOps, Evals, Multimodal, Flagship Project, Community Presence',
        hours: '~190 hrs',
        color: '#34d399',
        rationale:
            'Plenty of people can get a model working in a notebook. Fewer can run it reliably in production. Even fewer do both and have something public to show for it.',
        topics: [
            {
                week: 'Weeks 44–48',
                title: 'MLOps & Production AI Systems',
                items: [
                    'Model serving: vLLM (for OSS LLMs), BentoML, AWS Bedrock/SageMaker',
                    'Observability: LangSmith, Langfuse, Helicone — trace every LLM call',
                    'CI/CD for ML: DVC for data versioning, MLflow for experiment tracking',
                    'Cost optimization: prompt caching, model routing, batching strategies',
                    'Docker + containerization for ML workloads (non-negotiable by 2030)',
                    "EU AI Act basics — compliance will become engineers' responsibility by 2027",
                ],
                resources: [
                    {
                        name: 'Designing ML Systems – Chip Huyen (the definitive MLOps book)',
                        url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',
                        stability: 'evergreen',
                    },
                    {
                        name: 'Full Stack Deep Learning – free course (production-focused)',
                        url: 'https://fullstackdeeplearning.com/course/',
                        stability: 'stable',
                    },
                    {
                        name: 'MLOps Zoomcamp – DataTalks.Club (free, runs annually)',
                        url: 'https://github.com/DataTalksClub/mlops-zoomcamp',
                        stability: 'stable',
                    },
                    {
                        name: 'vLLM Documentation – fast LLM serving',
                        url: 'https://docs.vllm.ai/',
                        stability: 'current',
                    },
                ],
            },
            {
                week: 'Weeks 49–50',
                title: 'Evals: The Discipline Most Engineers Skip',
                items: [
                    'Why vibes-based testing kills production AI systems',
                    'Building eval pipelines: automated, human, LLM-as-judge',
                    'RAGAS for RAG evaluation; custom eval harnesses',
                    'Red-teaming and adversarial testing — required by EU AI Act',
                    'Benchmark literacy: what MMLU, GPQA, SWE-bench actually measure',
                ],
                resources: [
                    {
                        name: 'RAGAS – RAG evaluation framework (widely adopted)',
                        url: 'https://ragas.io/',
                        stability: 'stable',
                    },
                    {
                        name: 'Langfuse – open-source LLM observability and evals',
                        url: 'https://langfuse.com/',
                        stability: 'current',
                    },
                    {
                        name: 'DeepLearning.AI – Automated Testing for LLMOps (free)',
                        url: 'https://www.deeplearning.ai/short-courses/automated-testing-llmops/',
                        stability: 'stable',
                    },
                    {
                        name: 'Papers With Code – track SOTA benchmarks over time',
                        url: 'https://paperswithcode.com/',
                        stability: 'stable',
                    },
                ],
            },
            {
                week: 'Weeks 51–52',
                title: 'Community & Visibility',
                items: [
                    'Publish 4 technical posts on a blog, Substack, or Medium',
                    'Submit to or attend top AI conferences',
                    'Attend or submit to AILAT — annual conference in Buenos Aires',
                    'Engage with AI communities and open-source events',
                    'Participate in AI schools or academic networks',
                    'Contribute to 1 open-source AI project (Hugging Face, LlamaIndex, etc.)',
                    "Read 1 paper/week from Q3 onward — use arXiv Sanity or Karpathy's Twitter",
                ],
                resources: [
                    {
                        name: 'Top Tier AI Conferences',
                        url: 'https://khipu.ai/',
                        stability: 'stable',
                    },
                    {
                        name: 'AILAT 2026 – Buenos Aires, October 2026 (ai-lat.com)',
                        url: 'https://ai-lat.com/',
                        stability: 'current',
                    },
                    {
                        name: 'Local & Global AI Communities',
                        url: 'https://globalai.community/',
                        stability: 'stable',
                    },
                    {
                        name: 'AI Summer/Winter Schools',
                        url: 'https://simbig.org/lasai/2025/',
                        stability: 'stable',
                    },
                    {
                        name: 'arXiv Sanity Lite – curated paper discovery',
                        url: 'https://arxiv-sanity-lite.com/',
                        stability: 'stable',
                    },
                ],
            },
        ],
        project:
            'Your flagship public project. An AI-powered product that solves a real problem — ideally something original in your domain. Open source it, write about it. This is the thing you point to for the next few years.',
        whyFutureProof:
            'Most people skip evals and never ship anything public. Technical depth combined with something tangible to show — that combination is rarer than it sounds.',
    },
]

export const books = [
    {
        title: 'Hands-On Machine Learning (3rd ed.)',
        author: 'Aurélien Géron',
        when: 'Q1–Q2',
        tier: 'Essential',
        note: 'Updated 2022, still the best practical intro',
    },
    {
        title: 'Build a Large Language Model From Scratch',
        author: 'Sebastian Raschka',
        when: 'Q3',
        tier: 'Essential',
        note: 'Published 2024, directly applicable',
    },
    {
        title: 'Designing ML Systems',
        author: 'Chip Huyen',
        when: 'Q4',
        tier: 'Essential',
        note: 'The production ML bible',
    },
    {
        title: 'Mathematics for Machine Learning',
        author: 'Deisenroth, Faisal, Ong',
        when: 'Q1',
        tier: 'Reference',
        note: 'Free PDF, Cambridge Press',
    },
    {
        title: 'Natural Language Processing with Transformers',
        author: 'Tunstall, von Werra, Wolf (Hugging Face)',
        when: 'Q2–Q3',
        tier: 'Essential',
        note: 'From the HF team, aligned with their ecosystem',
    },
    {
        title: 'The Alignment Problem',
        author: 'Brian Christian',
        when: 'Q4',
        tier: 'Context',
        note: 'Non-technical but essential for AI governance',
    },
]

export const stableFollows = [
    {
        name: 'Andrej Karpathy',
        platform: '@karpathy – X/Twitter',
        why: 'Deep technical insights, frontier research perspective',
    },
    {
        name: 'Sebastian Raschka',
        platform: 'Ahead of AI – Substack',
        why: 'Best paper-reading newsletter, ML engineering depth',
    },
    {
        name: 'The Batch',
        platform: 'deeplearning.ai newsletter',
        why: "Andrew Ng's weekly AI summary — quality signal filtering",
    },
    { name: 'Yannic Kilcher', platform: 'YouTube', why: 'Paper explanations at the highest technical level' },
    { name: 'Hugging Face Blog', platform: 'huggingface.co/blog', why: 'Where ecosystem changes are announced first' },
    {
        name: 'Simon Willison',
        platform: 'simonwillison.net blog',
        why: 'Best practical LLM engineering blog, updated daily',
    },
]

export const intel = {
    sources: stableFollows,
    communities: [
        {
            name: 'Top Tier AI Conferences',
            desc: 'Flagship biennial AI gatherings — research-grade, mentorship-focused. The highest-prestige events.',
            url: 'https://khipu.ai/',
            tag: 'Biennial',
        },
        {
            name: 'AILAT',
            desc: 'Regional AI conferences. Business + technical.',
            url: 'https://ai-lat.com/',
            tag: 'Annual',
        },
        {
            name: 'Global AI Networks',
            desc: 'Community events, workshops, networking. Active calendar.',
            url: 'https://globalai.community/',
            tag: 'Ongoing',
        },
        {
            name: 'AI Academic Sessions',
            desc: 'School of AI — intensive academic sessions. Research network for AI.',
            url: 'https://simbig.org/lasai/2025/',
            tag: 'Annual',
        },
        {
            name: 'NeurIPS',
            desc: 'The preeminent international conference on neural information processing systems.',
            url: 'https://nips.cc/',
            tag: 'Annual',
        },
        {
            name: "AI Engineer World's Fair",
            desc: 'The leading AI engineering conference in North America (San Francisco).',
            url: 'https://www.ai.engineer/worldsfair',
            tag: 'Annual',
        },
        {
            name: 'PyData & PyCon Europe',
            desc: 'European hubs for the data science and AI community, focusing on open-source tools.',
            url: 'https://pydata.org/',
            tag: 'Annual',
        },
    ],
}
