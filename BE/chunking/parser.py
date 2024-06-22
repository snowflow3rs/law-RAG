from flask import request, jsonify
from unstructured.partition.pdf import partition_pdf
from unstructured.partition.docx import partition_docx
from unstructured.staging.base import elements_to_json

class DocumentsParser:
    def __init__(self):
        pass
    
    def parser_pdf(self, filename):
        elements = partition_pdf(filename, strategy="hi_res", model = "yolox",
                            infer_table_structure=True,
                            extract_image_block_types=["Image", "Table"],
                            languages=['vi'])
        elements = [e.to_dict() for e in elements]
        return elements


    def parser_docx(filename):
        elements = partition_docx(filename, strategy="hi_res", model = "yolox",
                            infer_table_structure=True,
                            extract_image_block_types=["Image", "Table"],
                            languages=['vi'])
        elements = [e.to_dict() for e in elements]
        return jsonify({'chunks': elements})

    def parser_doc(filename):
        elements = partition_docx(filename, strategy="hi_res", model = "yolox",
                            infer_table_structure=True,
                            extract_image_block_types=["Image", "Table"],
                            languages=['vi'])
        elements = [e.to_dict() for e in elements]
        return jsonify({'chunks': elements})