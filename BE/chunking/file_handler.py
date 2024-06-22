import os
from docx import Document
import fitz
import base64
class FileHandler:
    def __init__(self, upload_folder="uploads"):
        pass
    
    def save_file(self, file):
        filename = file.filename
        file_path = os.path.join(self.upload_folder, filename)
        file.save(file_path)
        return file_path
    
    def read_docx(self, file_path):
        doc = Document(file_path)
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
        return '\n'.join(full_text)
    
    def read_pdf(self, file_path):
        doc = fitz.open(file_path)
        text = ""
        for page_num in range(doc.page_count):
            page = doc.load_page(page_num)
            text += page.get_text()
        return text
    
    @staticmethod
    def decode_base64string(file):
        return base64.b64decode(file.split(",")[1])
    