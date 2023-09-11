import os
from dotenv import load_dotenv
load_dotenv()

def get_db_params():
  flask_env = os.environ.get('FLASK_ENV', 'production')
  if flask_env == 'development':
    return {
        'dbname': os.getenv("DEV_DBNAME"),
        'user': os.getenv("DEV_DBUSER"),
        'password': os.getenv("DEV_DBPASSWORD"),
        'host': os.getenv("DEV_DBHOST"),
        'port': os.getenv("DEV_DBPORT")
    }
  elif flask_env == 'test':
    return {
        'dbname': os.getenv("TEST_DBNAME"),
        'user': os.getenv("TEST_DBUSER"),
        'password': os.getenv("TEST_DBPASSWORD"),
        'host': os.getenv("TEST_DBHOST"),
        'port': os.getenv("TEST_DBPORT")
    }
  else:
    return {
        'dbname': os.getenv("DBNAME"),
        'user': os.getenv("DBUSER"),
        'password': os.getenv("DBPASSWORD"),
        'host': os.getenv("DBHOST"),
        'port': os.getenv("DBPORT")
    }
  
secret = os.getenv("SECRET_KEY")
db_params=get_db_params()

# docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db_postgres
