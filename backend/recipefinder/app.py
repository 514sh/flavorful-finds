from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
app = Flask(__name__)
CORS(app)

hello = [{"message": "from flask"}]

db_params_local = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'postgres',
    # docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db_postgres
    'host': 'db',
    'port': '5432'
}

db_params = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'postgres',
    'host': 'db',
    'port': '5432'
}


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
        print(f"asdfsdfa has {data}")
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                cur.execute("INSERT INTO hello (message) VALUES (%s)",
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
