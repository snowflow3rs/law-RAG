from flask import request, jsonify
from langchain_text_splitters import CharacterTextSplitter, RecursiveCharacterTextSplitter, MarkdownTextSplitter
from langchain_text_splitters import PythonCodeTextSplitter, RecursiveCharacterTextSplitter, Language
# from .parser import DocumentsParser
    
class CharacterChunking:
    def __init__(self, chunk_size=100, chunk_overlap=10):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        
        
    def split_text(self, text):
        chunks = []
        text_splitter = CharacterTextSplitter(chunk_size=self.chunk_size,
                                            chunk_overlap=self.chunk_overlap,
                                            separator="", 
                                            strip_whitespace=False)
        texts = text_splitter.create_documents([text])
        string_texts = [texts[i].page_content for i in range(len(texts))]
        for i in range(len(texts)):
            chunks.append({'text':texts[i].page_content,
                        'type':'text',
                        'id':i})
        return jsonify({'chunks': chunks})

class RecursiveCharacterChunking:
    def __init__(self, chunk_size=100, chunk_overlap=10):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
    
    def split_text(self, text):
        chunks = []
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=self.chunk_size,
                                                    chunk_overlap=self.chunk_overlap)
        texts = text_splitter.create_documents([text])
        for i in range(len(texts)):
            chunks.append({'text':texts[i].page_content,
                        'type':'text',
                        'id':i})
        return jsonify({'chunks': chunks})
    
    def split_markdown(self, text):
        chunks = []
        splitter = MarkdownTextSplitter(chunk_size=self.chunk_size, chunk_overlap=self.chunk_overlap)
        texts = splitter.create_documents([text])
        for i in range(len(texts)):
            chunks.append({'text':texts[i].page_content,
                        'type':'text',
                        'id':i})
        return jsonify({'chunks': chunks})

    def split_python(self, text):
        chunks = []
        splitter = PythonCodeTextSplitter(chunk_size=self.chunk_size, chunk_overlap=self.chunk_overlap)
        texts = splitter.create_documents([text])
        for i in range(len(texts)):
            chunks.append({'text':texts[i].page_content,
                        'type':'text',
                        'id':i})
        return jsonify({'chunks': chunks})

    def split_js(text, chunk_size, chunk_overlap):
        chunks = []
        splitter = RecursiveCharacterTextSplitter.from_language(
            language=Language.JS, chunk_size=chunk_size, chunk_overlap=chunk_overlap
        )
        texts = splitter.create_documents([text])
        for i in range(len(texts)):
            chunks.append({'text':texts[i].page_content,
                        'type':'text',
                        'id':i})
        return jsonify({'chunks': chunks})

# class DocumentSpecificChunking:
    def __init__(self,  chunk_size, chunk_overlap):
        self.recursion_chunking = RecursiveCharacterChunking(chunk_size, chunk_overlap)
        self.parser = DocumentsParser()
        self.single_chunks_types = ['Formular','FigureCaption','Image','Table']
        self.ignore_types = ['Header', 'Footer', 'PageNumber']
        
    def chunking_pdf(self, pdf_file):
        elements = self.parser.parser_pdf(pdf_file)
        # chunks = []
        # sub_chunks = []
        # parser_elements = self.parser()
        # for parser_element in parser_elements:
        #     if parser_element['type'] in self.single_chunks_types:
        #         chunks.append(element)
        #     elif parser_element['type'] in ignore_types:
        #         pass
        #     elif parser_element['type']
        return jsonify({'chunks': elements})
    
    def chunking_docx(self, docx_file):
        return jsonify({'chunks': "Not implementations"})

class SemanticChunking:
    def __init__(self):
        pass
    
    def SemanticChunking(text):
        return jsonify({'chunks': "Not implementations"})

    def AgentChunking(text):
        return jsonify({'chunks': "Not implementations"})
        