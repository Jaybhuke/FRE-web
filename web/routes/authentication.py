# Packages
import os
import sys

# Modules
sys.path.append('./')
from app import app, api, Resource, request, db, secure_filename
from models.database import Users


class SignIn(Resource):

    @staticmethod
    def post():
        username = request.json['username']
        password = request.json['password']

        users = Users.query.filter_by(username=username).first()
        if users is not None:
            if users.username == username and users.password == password:
                return ({
                    'statusCode': 0,
                    'message': 'Sign In Successfully'
                })
            else:
                return ({
                    'statusCode': 1,
                    'message': 'Check Your Username or Password'
                })
        else:
            return ({
                'statusCode': 1,
                'message': 'Check Your Username or Password'
            })

class SignUp(Resource):

    @staticmethod
    def post():
        first_name = request.json['firstName']
        last_name = request.json['lastName']
        username = request.json['username']
        password = request.json['password']

        user = Users.query.filter_by(username=username).first()
        if user is not None:
            return ({
                'statusCode': 1,
                'message': 'Please Choose Different Username'
            })
        
        user = Users(first_name=first_name, last_name=last_name
                    , username=username, password=password)

        db.session.add(user)
        db.session.commit()
        return ({
            'statusCode': 0,
            'message': 'Registration Successful'
        })



# Endpoints
api.add_resource(SignIn, '/sign-in')
api.add_resource(SignUp, '/sign-up')