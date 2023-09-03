from application.utils.config import db_params
import psycopg2


def create_table(sql_file):
    create_table_sql = ""
    with open(sql_file, 'r') as my_sql_file:
        create_table_sql = my_sql_file.read()
    print(create_table_sql)
    try:
        with psycopg2.connect(**db_params) as conn:
            with conn.cursor() as cur:
                cur.execute(create_table_sql)
                conn.commit()
                return True
    except Exception as e:
        return e
    finally:
        if 'cur' in locals() and cur:
            cur.close()
        if 'conn' in locals() and conn:
            conn.close()


created_table_users = create_table(
    "application/repo/postgres/tables/users.sql")

created_table_mapping = create_table(
    "application/repo/postgres/tables/user_recipe_mapping.sql")

if created_table_users and created_table_mapping:
    print("Users table created")
else:
    print("Table not created")
