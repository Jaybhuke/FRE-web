# Packages
import os
from flask import request
from flask_restful import Resource 
from werkzeug.utils import secure_filename

# Modules
from . import app


app.config['UPLOAD_FOLDER'] = 'files'


class Upload(Resource):
    """ Upload File """

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


