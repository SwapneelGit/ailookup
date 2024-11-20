const tools = [
    {
        name: "ChatGPT",
        description: "An AI language model that can generate human-like text.",
        link : "https://chat.openai.com",
        logo: "https://example.com/chatgpt-logo.png"
    },
    {
        name: "Grammarly",
        description: "An AI writing assistant that helps with grammar and style.",
        link: "https://www.grammarly.com",
        logo: "https://example.com/grammarly-logo.png"
    },
    {
        name: "Copy.ai",
        description: "AI-powered writing tool for generating marketing copy.",
        link: "https://www.copy.ai",
        logo: "https://example.com/copyai-logo.png"
    },
    {
        name: "Jasper",
        description: "AI content generation tool for marketers and writers.",
        link: "https://www.jasper.ai",
        logo: "https://example.com/jasper-logo.png"
    },
    {
        name: "DALL-E",
        description: "AI model that generates images from textual descriptions.",
        link: "https://openai.com/dall-e",
        logo: "https://example.com/dalle-logo.png"
    },
    {
        name: "Lumen5",
        description: "AI video creation platform that turns text into video.",
        link: "https://www.lumen5.com",
        logo: "https://example.com/lumen5-logo.png"
    },
    {
        name: "Synthesia",
        description: "AI video generation platform for creating videos with avatars.",
        link: "https://www.synthesia.io",
        logo: "https://example.com/synthesia-logo.png"
    },
    {
        name: "DeepAI",
        description: "AI tools for image generation and text analysis.",
        link: "https://deepai.org",
        logo: "https://example.com/deepai-logo.png"
    },
    {
        name: "Runway ML",
        description: "AI tools for creatives to generate and edit media.",
        link: "https://runwayml.com",
        logo: "https://example.com/runway-logo.png"
    },
    {
        name: "Pictory",
        description: "AI tool for creating short videos from long content.",
        link: "https://pictory.ai",
        logo: "https://example.com/pictory-logo.png"
    },
    {
        name: "Kuki",
        description: "AI chatbot that can engage in conversations.",
        link: "https://www.kuki.ai",
        logo: "https://example.com/kuki-logo.png"
    },
    {
        name: "Chatbot.com",
        description: "AI chatbot platform for customer support and engagement.",
        link: "https://www.chatbot.com",
        logo: "https://example.com/chatbot-logo.png"
    },
    {
        name: "Otter.ai",
        description: "AI transcription service for meetings and lectures.",
        link: "https://otter.ai",
        logo: "https://example.com/otter-logo.png"
    },
    {
        name: "Descript",
        description: "AI-powered audio and video editing tool.",
        link: "https://www.descript.com",
        logo: "https://example.com/descript-logo.png"
    },
    {
        name: "Wordtune",
        description: "AI writing assistant that helps you rephrase sentences.",
        link: "https://www.wordtune.com",
        logo: "https://example.com/wordtune-logo.png"
    },
    {
        name: "Frase",
        description: "AI tool for content optimization and research.",
        link: "https://www.frase.io",
        logo: "https://example.com/frase-logo.png"
    },
    {
        name: "CopySmith",
        description: "AI tool for generating marketing copy and product descriptions.",
        link: "https://www.copysmith.ai",
        logo: "https://example.com/copysmith-logo.png"
    },
    {
        name: "Writesonic",
        description: "AI writing tool for generating articles and ads.",
        link: "https://writesonic.com",
        logo: "https://example.com/writesonic-logo.png"
    },
    {
        name: "AI Dungeon",
        description: "AI-powered text adventure game.",
        link: "https://play.aidungeon.io",
        logo: "https://example.com/aidungeon-logo.png"
    },
    {
        name: "Replika",
        description: "AI companion chatbot for conversation and support.",
        link: "https://replika.ai",
        logo: "https://example.com/replika-logo.png"
    },
    {
        name: "Lalal.ai",
        description: "AI tool for vocal and instrumental separation in music.",
        link: "https://www.lalal .ai",
        logo: "https://example.com/lalalai-logo.png"
    },
    {
        name: "DeepL",
        description: "AI translation service that provides high-quality translations.",
        link: "https://www.deepl.com",
        logo: "https://example.com/deepl-logo.png"
    },
    {
        name: "Scribe",
        description: "AI tool for creating documentation and guides.",
        link: "https://scribehow.com",
        logo: "https://example.com/scribe-logo.png"
    },
    {
        name: "Notion AI",
        description: "AI features integrated into Notion for productivity.",
        link: "https://www.notion.so/product/ai",
        logo: "https://example.com/notionai-logo.png"
    },
    {
        name: "Canva Magic Write",
        description: "AI writing assistant integrated into Canva.",
        link: "https://www.canva.com",
        logo: "https://example.com/canva-logo.png"
    },
    {
        name: "AI Picasso",
        description: "AI tool for generating artwork based on user input.",
        link: "https://aipicasso.com",
        logo: "https://example.com/aipicasso-logo.png"
    },
    {
        name: "CopyDash",
        description: "AI tool for generating copy and content ideas.",
        link: "https://copydash.com",
        logo: "https://example.com/copydash-logo.png"
    },
    {
        name: "ChatGPT-3",
        description: "Advanced AI language model for various applications.",
        link: "https://openai.com/chatgpt-3",
        logo: "https://example.com/chatgpt3-logo.png"
    },
    {
        name: "Paddle",
        description: "AI tool for automating business processes.",
        link: "https://paddle.com",
        logo: "https://example.com/paddle-logo.png"
    },
    {
        name: "Zyro",
        description: "AI website builder with content generation features.",
        link: "https://zyro.com",
        logo: "https://example.com/zyro-logo.png"
    },
    {
        name: "Tome",
        description: "AI tool for creating presentations and storytelling.",
        link: "https://beta.tome.app",
        logo: "https://example.com/tome-logo.png"
    },
    {
        name: "Jasper Art",
        description: "AI art generation tool from Jasper.",
        link: "https://www.jasper.ai/art",
        logo: "https://example.com/jasperart-logo.png"
    },
    {
        name: "AI Music Generator",
        description: "AI tool for generating music tracks.",
        link: "https://aimusicgenerator.com",
        logo: "https://example.com/aimusicgenerator-logo.png"
    },
    {
        name: "Scribbl AI",
        description: "AI tool for generating creative writing prompts.",
        link: "https://scribbl.ai",
        logo: "https://example.com/scribbl-logo.png"
    },
    {
        name: "Artbreeder",
        description: "AI tool for creating and blending images.",
        link: "https://www.artbreeder.com",
        logo: "https://example.com/artbreeder-logo.png"
    },
    {
        name: "Runway Gen-2",
        description: "AI video generation tool for creating unique videos.",
        link: "https://runwayml.com/gen2",
        logo: "https://example.com/runwaygen2-logo.png"
    },
    {
        name: "AI Writer",
        description: "AI tool for generating articles and blog posts.",
        link: "https://ai-writer.com",
        logo: "https://example.com/aiwriter-logo.png"
    },
    {
        name: "Kive",
        description: "AI tool for video editing and content creation.",
        link: "https://kive.ai",
        logo: "https://example.com/kive-logo.png"
    },
    {
        name: "ChatSonic",
        description: "AI chatbot with advanced conversational capabilities.",
        link: "https://writesonic.com/chat",
        logo: "https://example.com/chatsonic-logo.png"
    },
    {
        name: "Poe",
        description: "AI tool for generating poetry and creative writing.",
        link: "https://poe.com",
        logo: "https://example.com/poe-logo.png"
    },
    {
        name: "AI Dungeon 2",
        description: "Interactive storytelling game powered by AI.",
        link: "https://play.aidungeon.io/2",
        logo: "https://example.com/ aidungeon2-logo.png"
    },
    {
        name: "Copy.ai Pro",
        description: "Advanced version of Copy.ai for professional use.",
        link: "https://www.copy.ai/pro",
        logo: "https://example.com/copyai-pro-logo.png"
    },
    {
        name: "ChatGPT for Business",
        description: "Business-focused AI language model for customer interactions.",
        link: "https://openai.com/chatgpt-business",
        logo: "https://example.com/chatgpt-business-logo.png"
    },
];

function displayTools(tools) {
    const toolList = document.getElementById('tool-list');
    toolList.innerHTML = ''; // Clear existing tools

    tools.forEach(tool => {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = tool.link;
        card.target = '_blank'; // Open link in new tab

        card.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name} logo" class="tool-logo">
            <div class="tool-name">${tool.name}</div>
            <div class="tool-description">${tool.description}</div>
        `;

        toolList.appendChild(card);
    });
}

function searchTools() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchInput) || 
        tool.description.toLowerCase().includes(searchInput)
    );
    displayTools(filteredTools);
}

// Initial display of all tools
displayTools(tools);

// Event listener for search input
document.getElementById('search').addEventListener('input', searchTools);