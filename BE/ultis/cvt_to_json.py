import json

def write_to_json_file(json_data, outpath):
    with open(outpath, "w") as f:
        json.dump(json_data, f)
        
def read_json(path):
    with open(path, 'r') as f: 
        json_object = json.load(f)
    return json_object