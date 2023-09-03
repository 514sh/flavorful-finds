from flask import jsonify


class ErrorHandler:
    def __init__(self, app):
        self.app = app

        # Register error handlers
        self.register_handlers()

    def register_handlers(self):
        # Register common error handlers
        self.app.register_error_handler(400, self.handle_bad_request)
        self.app.register_error_handler(401, self.handle_unauthorized)
        self.app.register_error_handler(403, self.handle_forbidden)
        self.app.register_error_handler(404, self.handle_not_found)
        self.app.register_error_handler(500, self.handle_internal_server_error)
        self.app.register_error_handler(401, self.handle_incorrect_password)
        self.app.register_error_handler(409, self.handle_user_already_exist)

    def handle_bad_request(self, error):
        response = jsonify({"error": "Bad request"})
        response.status_code = 400
        return response

    def handle_user_already_exist(self, error):
        response = jsonify(
            {"error": f'Could not create new user. User {error["username"]} already exist.'})
        response.status_code = 409
        return response

    def handle_unauthorized(self, error):
        response = jsonify({"error": "Unauthorized"})
        response.status_code = 401
        return response

    def handle_incorrect_password(self, error):
        response = jsonify(
            {"error": f'Incorrect password for user {error["username"]}'})
        response.status_code = 401
        return response

    def handle_forbidden(self, error):
        response = jsonify({"error": "Forbidden"})
        response.status_code = 403
        return response

    def handle_not_found(self, error):
        response = jsonify({"error": f'User {error["username"]} not found'})
        response.status_code = 404
        return response

    def handle_internal_server_error(self, error):
        response = jsonify({"error": "Internal server error"})
        response.status_code = 500
        return response
