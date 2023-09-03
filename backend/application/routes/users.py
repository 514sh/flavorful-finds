# Import ErrorHandler from the error_handler module
from application.repo.postgres.users import Users
from flask import Blueprint, jsonify, request
from application.utils.config import *
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta
from application.utils.error_handler import ErrorHandler
import jwt
blueprint = Blueprint("users", __name__)

error_handler = ErrorHandler(blueprint)


@blueprint.route("/register", methods=['POST'])
def register():
    new_user = Users(db_params=db_params)
    data = request.get_json()
    hashed_password = generate_password_hash(
        password=data["password"])
    data["hashed_password"] = hashed_password
    result = new_user.create(data=data)
    if result == True:
        return jsonify({"success": f'User {data["username"]} created'}), 201
    else:
        return error_handler.handle_user_already_exist(error=data)


@blueprint.route("/login", methods=['POST'])
def login():
    user = Users(db_params=db_params)
    data = request.get_json()
    result = user.login(data=data)
    if result:
        print(result)
        correctPass = check_password_hash(result[2], data["password"])
        payload = {"user_id": result[0], "username": result[1], "expiration": str(
            datetime.now() + timedelta(minutes=30))}
        if not correctPass:
            return ErrorHandler.handle_incorrect_password(error=data)
        else:
            token = jwt.encode(
                payload, secret, algorithm="HS256")
            return jsonify({"token": token}, 200)
    else:
        return ErrorHandler.handle_not_found(error=data)
