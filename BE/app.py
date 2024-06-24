import os
import time
import tempfile
from flask import Flask, request, jsonify
from flask_cors import CORS
# from chunking.chunker import CharacterChunking, RecursiveCharacterChunking, DocumentSpecificChunking, SemanticChunking
# from chunking.chunker import CharacterChunking, RecursiveCharacterChunking, SemanticChunking
from chunking.CharacterSplitting import CharacterSplitting

from chunking.file_handler import FileHandler
import fitz
from werkzeug.utils import secure_filename
from docx import Document

from ultis.cvt_to_json import *

app = Flask(__name__)
CORS(app, resources={r"/chunk": {"origins": "http://localhost:3000"}})
app.config['UPLOAD_FOLDER'] = ""
outdir = 'BE\output'

@app.route('/')
def home():
    file_data = "test.file"
    chunk_size = 35
    chunk_overlap = 5
    selected_option = "Character Splitting"
    sub_selected_option = "Manually"
    text = "Đây là dòng chữ để thử nghiệm. Hôm nay trời thật đẹp!"
    if selected_option == 'Character Splitting':
        CS = CharacterSplitting(chunk_size, chunk_overlap)
        if sub_selected_option == "Manually":
            start_time = time.time()
            chunking_list = CS.manually(text)
            end_time = time.time()
            chunking_list = CS.cvt_manually_to_json(chunking_list)
            chunking_time = start_time - end_time
            outpath = os.path.join(outdir, file_data + '.json')
            write_to_json_file({'file_name': file_data, 'chunking_list': chunking_list, 'time': chunking_time}, outpath)
        elif sub_selected_option == "Langchain":
            start_time = time.time()
            chunking_list = CS.langchain(text, separator = '')
            end_time = time.time()
            chunking_list = CS.cvt_langchain_doc_to_json(chunking_list)
            chunking_time = start_time - end_time
            outpath = os.path.join(outdir, file_data)
            write_to_json_file(jsonify({'file_name': file_data, 'chunking_list': chunking_list, 'time': chunking_time}), outpath)
            
    return "test"



@app.route('/chunk', methods=['POST'])
def chunk_endpoint():
    # Get data
    data = request.get_json()
    file_data = data.get('file', '')[0]['base64String']
    chunk_size = data.get('chunk_size', 1000)
    chunk_overlap = data.get('chunk_overlap', 200)
    selected_option = data.get('selected_option', '')
    sub_selected_option = data.get('sub_selected_option', '')

    if not file_data:
        return jsonify({'error': 'No file data provided'}), 400

    
    # Decode the base64 string and save it as a temporary file
    filehandler = FileHandler(upload_folder=app.config['UPLOAD_FOLDER'])
    
    file_content = filehandler.decode_base64string(file_data)
    file_ext = '.pdf' if 'pdf' in file_data.split(",")[0] else '.docx'
    
    with tempfile.NamedTemporaryFile(delete=False, suffix=file_ext) as temp_file:
        temp_file.write(file_content)
        temp_file_path = temp_file.name
    
    if file_ext == '.pdf':
        text = filehandler.read_pdf(temp_file_path)
    elif file_ext == '.docx':
        text = filehandler.read_docx(temp_file_path)
    else:
        return jsonify({'error': 'Unsupported file type'}), 400
    if selected_option == 'Character Chunking':
        CS = CharacterSplitting(chunk_size, chunk_overlap)
        if sub_selected_option == "Manually":
            start_time = time.time()
            chunking_list = CS.manually(text)
            end_time = time.time()
            chunking_list = CS.cvt_manually_to_json(chunking_list)
            chunking_time = start_time - end_time
            outpath = os.path.join(outdir, file_data + '.json')
            write_to_json_file({'file_name': file_data, 'chunking_list': chunking_list, 'time': chunking_time}, outpath)
        elif sub_selected_option == "Langchain":
            start_time = time.time()
            chunking_list = CS.langchain(text, separator = '')
            end_time = time.time()
            chunking_list = CS.cvt_langchain_doc_to_json(chunking_list)
            chunking_time = start_time - end_time
            outpath = os.path.join(outdir, file_data)
            write_to_json_file(jsonify({'file_name': file_data, 'chunking_list': chunking_list, 'time': chunking_time}), outpath)
    # Call function for each option
    # if selected_option == "Character Chunking":
    #     characterchunking = CharacterChunking(chunk_size, chunk_overlap)
    #     return characterchunking.split_text(text)
    
    # elif selected_option == "Recursive Character Chunking" :
    #     recursive = RecursiveCharacterChunking(chunk_size, chunk_overlap)
    #     if sub_selected_option == "":
    #         return recursive.split_text(text)
    #     elif sub_selected_option == "markdown":
    #         return recursive.split_markdown(text)
    #     elif sub_selected_option == "python":
    #         return recursive.split_python(text)
    #     elif sub_selected_option == "js":
    #         return recursive.split_js(text)
        
    # elif selected_option == "Document Specific Chunking":
    #     document_chunking = DocumentSpecificChunking(chunk_size, chunk_overlap)
    #     if file_ext == '.pdf':
    #         return document_chunking.chunking_pdf(temp_file_path)
    #     elif file_ext == '.docx':
    #         return jsonify({"chunks":["Doc Document"]})
    else:
        return jsonify({"chunks":[]})
   
    os.remove(temp_file_path)
    
if __name__=="__main__": 
    app.run(debug=True)