# Import ErrorHandler from the error_handler module
from application.repo.postgres.user_recipe_mapping import UserRecipeMapping
from flask import Blueprint, jsonify, request
from application.utils.config import *
from application.utils.error_handler import ErrorHandler
from application.repo.csv.csv_repo import file_to_list_of_dict
import jwt
blueprint = Blueprint("user_recipe_mapping", __name__)

error_handler = ErrorHandler(blueprint)
recipe_list = file_to_list_of_dict()


@blueprint.route("/create", methods=['POST'])
def create():
    mapping = UserRecipeMapping(db_params=db_params)
    data = request.get_json()
    token = request.headers.get('Authorization')
    if token and token.startswith('Bearer '):
        try:
            token = token[7:]
            decodedToken = jwt.decode(
                token, secret, algorithms=["HS256"])
            user_id = decodedToken.get('user_id')
            username = decodedToken.get('username')
            data["user_id"] = user_id
            result = mapping.create(data=data)
            if result:
                return jsonify({"success": f'{username} added new favorite recipe - {data["recipe_id"]}'}), 201
            else:
                return error_handler.handle_unauthorized(error=data)
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
        except jwt.DecodeError:
            return jsonify({"error": "Invalid token"}), 401
    else:
        return jsonify({"error": "Missing or invalid token in the Authorization header"}), 401


@blueprint.route("/<int:user_id>")
def get(user_id):
    data = dict()
    print(db_params)
    mapping = UserRecipeMapping(db_params=db_params)
    data["user_id"] = user_id
    result = mapping.get(data=data)
    response = [recipe_list[id[0]] for id in result]
    print(response)
    if result:
        return jsonify(response), 200
    else:
        return error_handler.handle_not_found(error=data)
