import { dataChunkingType } from "../type";



export const dataChunking: dataChunkingType[] = [
    {
        name: "Character Chunking",
        description: "This strategy divides the text into chunks based on a fixed number of characters. Its simplicity makes it a great starting point, but it can sometimes disrupt the text's flow, breaking sentences or words in unexpected places. Despite its limitations, it's a great stepping stone towards more advanced methods."
    },
    {

        name: "Recursive Character Chunking",
        description: "Based on the basic concept of Character Chunking, this advanced version takes it up a notch by dividing the text into chunks until a certain condition is met, such as reaching a minimum chunk size. This method ensures that the chunking process aligns with the text's structure, preserving more meaning. Its adaptability makes Recursive Character Chunking great for texts with varied structures"
    },
    {

        name: "Document Specific Chunking",
        description: "Document Specific Chunking is a strategy that respects the document's structure. Rather than using a set number of characters or a recursive process, it creates chunks that align with the logical sections of the document, like paragraphs or subsections. This approach maintains the original author's organization of content and helps keep the text coherent. It makes the retrieved information more relevant and useful, particularly for structured documents with clearly defined sections"
    },
    {

        name: "Semantic Chunking",
        description: "Semantic Chunking considers the relationships within the text. It divides the text into meaningful, semantically complete chunks. This approach ensures the information's integrity during retrieval, leading to a more accurate and contextually appropriate outcome"
    },
    {

        name: "Agent Chunking",
        description: "Agent chunking, also known as human-in-the-loop chunking, is a technique in RAG that leverages human expertise and judgment for dividing text into meaningful segments. Unlike automated methods that rely on algorithms, agent chunking involves direct human intervention in the chunking process"
    }

]

export const defaultProse = `One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.

Teachers and coaches implicitly told us the returns were linear. "You get out," I heard a thousand times, "what you put in." They meant well, but this is rarely true. If your product is only half as good as your competitor's, you don't get half as many customers. You get no customers, and you go out of business.

It's obviously true that the returns for performance are superlinear in business. Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented. We see the same pattern in fame, power, military victories, knowledge, and even benefit to humanity. In all of these, the rich get richer. [1]

You can't understand the world without understanding the concept of superlinear returns. And if you're ambitious you definitely should, because this will be the wave you surf on.

It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.

The most obvious case of superlinear returns is when you're working on something that grows exponentially. For example, growing bacterial cultures. When they grow at all, they grow exponentially. But they're tricky to grow. Which means the difference in outcome between someone who's adept at it and someone who's not is very great.

Startups can also grow exponentially, and we see the same pattern there. Some manage to achieve high growth rates. Most don't. And as a result you get qualitatively different outcomes: the companies with high growth rates tend to become immensely valuable, while the ones with lower growth rates may not even survive.

Y Combinator encourages founders to focus on growth rate rather than absolute numbers. It prevents them from being discouraged early on, when the absolute numbers are still low. It also helps them decide what to focus on: you can use growth rate as a compass to tell you how to evolve the company. But the main advantage is that by focusing on growth rate you tend to get something that grows exponentially.

YC doesn't explicitly tell founders that with growth rate "you get out what you put in," but it's not far from the truth. And if growth rate were proportional to performance, then the reward for performance p over time t would be proportional to pt.

Even after decades of thinking about this, I find that sentence startling.`
// Character Chunking
// Recursive Character Chunking
// Document Specific Chunking
// Semantic Chunking
// Agent Chunking