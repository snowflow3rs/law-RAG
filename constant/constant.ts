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