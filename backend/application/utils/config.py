import os
from dotenv import load_dotenv
load_dotenv()
db_params = {
    'dbname': os.getenv("DBNAME"),
    'user': os.getenv("DBUSER"),
    'password': os.getenv("DBPASSWORD"),
    'host': os.getenv("DBHOST"),
    'port': os.getenv("DBPORT")
}
# docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db_postgres
secret = os.getenv("SECRET_KEY")
