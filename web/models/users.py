# Packages
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from routes import app


app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://toor:toor@127.0.0.1:3306/fer"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


CORS(app)

db = SQLAlchemy(app)
api = Api(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    username = db.Column(db.String(20), unique=True)
    password = db.Column(db.String(20))
