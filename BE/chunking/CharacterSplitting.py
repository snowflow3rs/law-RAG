import json

from langchain.text_splitter import CharacterTextSplitter


class CharacterSplitting:
    def __init__ (self, chunk_size, chunk_overlap):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.langchain_splitter = CharacterTextSplitter(chunk_size=self.chunk_size, chunk_overlap=self.chunk_overlap, separator='', strip_whitespace=False)
        # self.llama_splitter = SentenceSplitter(chunk_size=self.chunk_size, chunk_overlap=self.chunk_overlap)

    def manually(self, text):
        # Create a list that will hold your chunks
        chunks = []
        # Run through the a range with the length of your text and iterate every chunk_size you want
        for i in range(0, len(text), self.chunk_size - self.chunk_overlap):
            chunk = text[i:i + self.chunk_size]
            chunks.append({'page_content': chunk})
 
        return chunks

    def langchain(self, text, separator):
        self.langchain_splitter._separator = separator
        return self.langchain_splitter.create_documents([text])
    
    def cvt_manually_to_json(self, list_chunking):
        list = []
        chunk_count = 0
        for i in list_chunking:
            chunk = {'ID': chunk_count, 'content': i['page_content'], 'type': 'text'}
            list.append(chunk)
            chunk_count+=1
        return list
    
    def cvt_langchain_doc_to_json(self, list_chunking):
        list = []
        chunk_count = 0
        for i in list_chunking:
            chunk = {'ID': chunk_count, 'content': i.page_content, 'type': 'text'}
            list.append(chunk)
            chunk_count+=1
        return list

    
    
    # def llama(self, text):
        # return self.llama_splitter.get_nodes_from_documents([Document(text=text)], show_progress=False)