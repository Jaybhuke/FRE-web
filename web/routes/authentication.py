# Packages
from flask import request
from flask_restful import Resource

# Modules
from models.users import Users


class SignIn(Resource):
    """ Sign In """

    @staticmethod
    def post():
        username = request.json["username"]
        password = request.json["password"]

        users = Users.query.filter_by(username=username).first()
        if users is not None:
            if users.username == username and users.password == password:

                return ({"message": "Sign In Successfully"})
            else:
                return ({"message": "check your username or password"})
        else:
            return ({"message": "check your username or password"})




