import psycopg2


class UserRecipeMapping:
    def __init__(self, db_params):
        self.__db_params = db_params

    @property
    def db_params(self):
        return self.__db_params

    def create(self, data):
        try:
            with psycopg2.connect(**self.db_params) as conn:
                with conn.cursor() as cur:
                    cur.execute('INSERT INTO "user_recipe_mapping" ("user_id", "recipe_id") VALUES (%s, %s)',
                                (data["user_id"], data["recipe_id"]))
                    conn.commit()
                    return True
        except Exception as e:
            return e
        finally:
            if 'cur' in locals() and cur:
                cur.close()
            if 'conn' in locals() and conn:
                conn.close()

    def get(self, data):
        try:
            with psycopg2.connect(**self.db_params) as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        'SELECT "recipe_id" FROM "user_recipe_mapping" WHERE user_id = %s', (data["user_id"],))
                    row = cur.fetchall()
                    return row
        except Exception as e:
            return e
        finally:
            if 'cur' in locals() and cur:
                cur.close()
            if 'conn' in locals() and conn:
                conn.close()
