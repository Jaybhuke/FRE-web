from flask import Flask, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
from flask_cors import CORS



app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/": {"origins": "http://127.0.0.1:4200"}})

app.config.from_pyfile('config.py')
 
db = SQLAlchemy(app)


if __name__ == '__main__':

    # We need to make sure Flask knows about its views before we run
    # the app, so we import them. We could do it earlier, but there's
    # a risk that we may run into circular dependencies, so we do it at the
    # last minute here.

    from routes.authentication import *
    from routes.upload import *
    
    app.run()
