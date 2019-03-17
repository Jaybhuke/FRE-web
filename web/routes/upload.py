# Packages
import os
import sys

# Modules
sys.path.append('./')
from app import app, api, Resource, request, secure_filename


class Upload(Resource):

    @staticmethod
    def post():
        file = request.files['file']
        
        if file.filename == '':
            return({
                'statusCode': 1,
                'message': 'File Not Selected! '
            })

        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        return ({
            'statusCode': 0,
            'message': 'File Uploaded! '
        })


api.add_resource(Upload, '/upload')