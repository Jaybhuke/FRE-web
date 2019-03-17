# Packages
import sys
from flask_cors import CORS

# Modules
from routes import app, api
from routes.authentication import SignIn
from routes.upload import Upload


cors = CORS(app, resources={r"/": {"origins": "http://127.0.0.1:4200"}})


# Endpoints
""" API of authentication.py """
api.add_resource(SignIn, '/sign-in', endpoint='sign_in')

""" API of upload.py """
api.add_resource(Upload, '/upload', endpoint='upload_file')




if __name__ == '__main__':
    app.run(debug=True)

