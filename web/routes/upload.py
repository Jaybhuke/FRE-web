# Packages
import os
import sys
import Algorithmia

# Modules
sys.path.append('./')
from app import app, api, Resource, request, secure_filename, jsonify


def upload(file):
    client = Algorithmia.client('sim4+37zjHyVDgW0it2bsOiYcZw1')

    client.file("data://.my/files/" + file).putFile("./files/" + file)

    input = {
        "image": "data://johndoetest/files/" + file,
        "numResults": 7
    }

    algo = client.algo('deeplearning/EmotionRecognitionCNNMBP/0.1.2')

    result = algo.pipe(input).result

    return result


class Upload(Resource):

    @staticmethod
    def post():
        file = request.files['file']
        
        print(file)
        if file.filename == '':
            return({
                'statusCode': 1,
                'message': 'File Not Selected! '
            })

        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        result = upload(filename)
        return jsonify (result)


api.add_resource(Upload, '/upload')