export const portfolioData = {
  personal: {
    name: "Vamsi Krishna Pasam",
    email: "vamsipasam2k@gmail.com",
    phone: "864-765-4929",
    linkedin: "https://linkedin.com/in/vamsipasam/",
    github: "https://github.com/vamsipasam2000",
    headline: "Building Multimodal AI Systems That Understand the Real World.",
    subheadline: "I am an Applied AI Engineer specializing in Multimodal LLMs, computer vision, and scalable AWS cloud infrastructure. Bridging SOTA research with enterprise engineering.",
    about: "My journey in tech started with building scalable cloud infrastructure at TCS, but my passion for solving complex problems led me to the cutting edge of Artificial Intelligence. Today, I specialize in Multimodal LLMs, building systems that can reason across text, images, and video. From reducing enterprise cloud costs by 25% to achieving 95% F1 scores on complex NLP tasks, I am driven by measurable impact."
  },
  projects: [
    {
      id: "multimodal-customer-journey",
      title: "Multimodal Customer Journey AI",
      summary: "Integrated text, image, and video data using Llama 3.2 and Gemini 1.5 to predict customer engagement with 92.9% accuracy.",
      tags: ["PyTorch", "Llama 3.2", "Gemini 1.5"],
      metric: "92.9% Accuracy",
      businessValue: "Enabled personalized recommendations, increasing relevance by 30%.",
      problem: "Traditional customer journey mapping relies heavily on structured data and text, ignoring the rich context provided by images and videos that customers interact with. This leads to incomplete engagement predictions.",
      architecture: "Developed a multimodal pipeline that processes text, images, and video frames simultaneously. Used Meta-LLaMA 3.2-1B for text reasoning and Gemini 1.5 Flash for visual feature extraction, fusing the embeddings to predict journey stages.",
      execution: "Fine-tuned the models on a custom dataset of customer interactions. Implemented a late-fusion architecture in PyTorch to combine the multimodal embeddings before the final classification layer.",
      results: [
        "Achieved 92.9% accuracy in predicting customer journey stages.",
        "Improved engagement prediction models, enabling personalized recommendations.",
        "Increased recommendation relevance by 30%."
      ]
    },
    {
      id: "hybrid-invoice-parser",
      title: "Hybrid Vision-Language Invoice Parser",
      summary: "Built a semantic enrichment framework using LayoutLMv3 and Qwen2.5-VL to automate complex invoice processing.",
      tags: ["LayoutLMv3", "Qwen2.5-VL", "OCR"],
      metric: "10% Extraction Boost",
      businessValue: "Improved key field extraction (currency, totals) by 10%, enabling automated expense categorization.",
      problem: "Enterprise invoice processing is highly manual due to the vast variety of invoice layouts, rare entities, and complex semantic relationships between fields.",
      architecture: "Architected a hybrid framework combining LayoutLMv3 for spatial document understanding with advanced Vision-Language Models (Qwen2.5-VL, LLaVA-LLaMA3) for semantic reasoning and anomaly detection.",
      execution: "Integrated OCR tools to extract bounding boxes and text, feeding them into LayoutLMv3. Used VLMs to perform semantic enrichment on the extracted entities, focusing on rare entity recognition and expense categorization.",
      results: [
        "Improved F1 scores by up to 10% for key fields like currency and total amounts.",
        "Successfully automated expense categorization and anomaly detection.",
        "Reduced manual review time for complex invoices."
      ]
    }
  ],
  experience: [
    {
      role: "Artificial Intelligence Research Assistant",
      company: "Clemson University",
      period: "Aug 2024 – Jul 2025",
      description: "Pushing the boundaries of what's possible with SOTA multimodal models at the Human AI Empowerment Lab.",
      highlights: [
        "Achieved 92.9% accuracy in multimodal customer journey mapping using Llama 3.2 and Gemini 1.5.",
        "Built an AI-powered comment triage system using GEMMA-2B and RoBERTa, improving collaboration efficiency by 40%.",
        "Developed a hybrid framework for invoice understanding using LayoutLMv3 and Qwen2.5-VL, boosting F1 scores by 10%."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Clemson Engineers for Developing Communities",
      period: "May 2023 – Apr 2024",
      description: "Turning messy data into automated, efficient pipelines for grant allocation and disaster resilience.",
      highlights: [
        "Automated federal grant categorization using NLP and Naive Bayes, achieving 91.67% accuracy.",
        "Improved grant allocation strategies by 45% and increased data pipeline throughput by 35%.",
        "Analyzed disaster resilience using CNNs and GIS tools, reducing assessment times by 50%."
      ]
    },
    {
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      period: "Dec 2021 – Jul 2022",
      description: "Building the robust, scalable cloud foundations that make enterprise AI possible.",
      highlights: [
        "Architected auto-scaling AWS cloud infrastructure using EC2, S3, and RDS.",
        "Performed cost optimization using AWS Cost Explorer, reserved, and spot instances.",
        "Reduced overall infrastructure costs by 25%."
      ]
    }
  ],
  skills: {
    foundationModels: ["Llama 3", "Gemini 1.5", "Qwen-VL", "LayoutLMv3", "RoBERTa", "GEMMA"],
    mlData: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-Learn", "Pandas"],
    cloudArch: ["AWS (EC2, S3, RDS)", "Linux", "Git", "REST APIs", "Docker"],
    languages: ["Python", "C++", "Java", "JavaScript", "HTML/CSS"]
  },
  publications: [
    {
      title: "Customer Journey Mapping with Multimodal Large Language Models",
      conference: "The Web Conference (WWW) 2025",
      tldr: "Demonstrates how combining text, image, and video data with LLMs significantly improves customer engagement predictions.",
      link: "https://dl.acm.org/doi/10.1145/3701716.3717863"
    },
    {
      title: "AI-Powered Comment Triage for Efficient Collaboration and Feedback Management",
      conference: "SAC '25, ACM Symposium on Applied Computing",
      tldr: "Introduces a fine-tuned NLP system that automatically classifies intent and sentiment to streamline team collaboration.",
      link: "https://dl.acm.org/doi/10.1145/3672608.3707835"
    }
  ]
};
