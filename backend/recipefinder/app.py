from datetime import datetime, timedelta
import jwt
from werkzeug.security import check_password_hash, generate_password_hash
from recipefinder.domain.searchsorter import SearchSorter
from recipefinder.repository.csv_repo import file_to_list_of_dict
from tests.recipes_data import recipes_data
from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
app = Flask(__name__)
CORS(app)

recipe_list = file_to_list_of_dict()
app.config['secret_key'] = "123"
db_params_local = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'postgres',
    # docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db_postgres
    'host': '192.168.128.3',
    'port': '5432'
}

db_params = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'postgres',
    'host': '192.168.160.2',
    'port': '5432'
}


@app.route("/api/users")
def user():
    cur = None
    conn = None
    try:
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM users")
                row = cur.fetchall()
                print(row)
                return '', 200
    except Exception as e:
        print("An error occurred:", e)
        return e, 500
    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()


@app.route("/api/register", methods=['POST'])
def register():
    cur = None
    conn = None
    try:
        data = request.get_json()
        print(data)
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                hashed_password = generate_password_hash(
                    password=data["password"])
                print(hashed_password)
                print(type(hashed_password))
                cur.execute('INSERT INTO "users" ("username", "password") VALUES (%s, %s)',
                            (data["username"], hashed_password))
                conn.commit()
        return jsonify({"message": "Data added successfully"})
    except Exception as e:
        print("An error occurred:", e)
        return e, 500
    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()


@app.route("/api/login", methods=['POST'])
def login():
    cur = None
    conn = None
    try:
        data = request.get_json()
        print(data)
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                cur.execute(
                    'SELECT * FROM "users" WHERE username = %s', (data["username"],))
                row = cur.fetchone()
                correctPass = check_password_hash(row[2], data["password"])
                payload = {"user_id": row[0], "username": row[1], "expiration": str(
                    datetime.now() + timedelta(minutes=30))}
                token = jwt.encode(
                    payload, app.config['secret_key'], algorithm="HS256")
                return jsonify({"token": token})
    except Exception as e:
        print("An error occurred:", e)
        return e, 500
    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()


@app.route("/")
def root():
    return jsonify({"message": "hello"})


@app.route("/api/recipes")
def get_all_recipes():
    return jsonify(recipe_list)


@app.route("/api/users/favorites", methods=['POST'])
def add_to_favorites():
    data = request.get_json()
    token = request.headers.get('Authorization')
    if token and token.startswith('Bearer '):
        try:
            # Remove 'Bearer ' prefix and decode the token
            token = token[7:]
            decodedToken = jwt.decode(
                token, app.config['secret_key'], algorithms=["HS256"])

            # You can access the claims in the token like this:
            user_id = decodedToken.get('user_id')
            username = decodedToken.get('username')
            try:
                data = request.get_json()
                print(data)
                with psycopg2.connect(**db_params) as conn:
                    with conn.cursor() as cur:
                        cur.execute(
                            'INSERT INTO "user_recipe_mapping" ("user_id", "recipe_id") VALUES (%s, %s)',
                            (user_id, data["recipe_id"]))
                        conn.commit()
                        return jsonify({"token": token})
            except Exception as e:
                print("An error occurred:", e)
                return e, 500
            finally:
                if cur:
                    cur.close()
                if conn:
                    conn.close()
            return jsonify({"user_id": user_id, "username": username})

        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 401
        except jwt.DecodeError:
            return jsonify({"error": "Invalid token"}), 401
    else:
        return jsonify({"error": "Missing or invalid token in the Authorization header"}), 401


@app.route("/api/recipes/ingredients")
def search_by_ingredients():
    offset = int(request.args.get('offset', 0))
    batch = 20

    keywords = set(request.args.getlist('keywords'))
    search_sorter = SearchSorter(recipe_list=recipe_list)
    result = search_sorter.search_by_ingredients(
        keywords)[offset:offset + batch]
    return jsonify(result)


@app.route("/api/recipes/title")
def search_by_title():
    offset = int(request.args.get('offset', 0))
    batch = 20

    keywords = set(request.args.getlist('keywords'))
    search_sorter = SearchSorter(recipe_list=recipe_list)
    result = search_sorter.search_by_title(
        keywords)[offset:offset + batch]
    return jsonify(result)


@app.route("/hello")
def hello_world():
    cur = None
    conn = None
    data = dict()
    try:
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM hello")
                db_data = cur.fetchall()
                data["message"] = [i[0] for i in db_data]
        return jsonify(data)
    except Exception as e:
        print("An error occurred:", e)
        return e, 500
    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()


@app.route("/hello", methods=['POST'])
def post_hello():
    cur = None
    conn = None
    try:
        data = request.get_json()
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                cur.execute('INSERT INTO "hello" ("message") VALUES (%s)',
                            (data["message"],))
                conn.commit()
        return jsonify({"message": "Data added successfully"})
    except Exception as e:
        print("An error occurred:", e)
        return e, 500
    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()


if __name__ == "__main__":
    app.run()
