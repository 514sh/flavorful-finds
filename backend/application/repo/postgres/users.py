import psycopg2


class Users:
    def __init__(self, db_params):
        self.__db_params = db_params

    @property
    def db_params(self):
        return self.__db_params

    def create(self, data):
        try:
            with psycopg2.connect(**self.db_params) as conn:
                with conn.cursor() as cur:
                    cur.execute('INSERT INTO "users" ("username", "password") VALUES (%s, %s)',
                                (data["username"], data["hashed_password"]))
                    conn.commit()
                    return True
        except Exception as e:
            return e
        finally:
            if 'cur' in locals() and cur:
                cur.close()
            if 'conn' in locals() and conn:
                conn.close()

    def login(self, data):
        try:
            with psycopg2.connect(**self.db_params) as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        'SELECT * FROM "users" WHERE username = %s', (data["username"],))
                    row = cur.fetchone()
                    return row
        except Exception as e:
            return e
        finally:
            if 'cur' in locals() and cur:
                cur.close()
            if 'conn' in locals() and conn:
                conn.close()
