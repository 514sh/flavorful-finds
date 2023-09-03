

from application.repo.postgres.users import Users
from application.utils.error_handler import ErrorHandler
from flask import Flask, jsonify, request
from application.routes import users
from application.routes import user_recipe_mapping
from application.routes import recipes
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.register_blueprint(users.blueprint, url_prefix='/api/users')
app.register_blueprint(user_recipe_mapping.blueprint,
                       url_prefix='/api/user_recipe_mapping')
app.register_blueprint(recipes.blueprint, url_prefix='/api/recipes')

if __name__ == "__main__":

    app.run()
