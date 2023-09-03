import pytest
from application.repo.postgres.users import Users
from application.repo.postgres.user_recipe_mapping import UserRecipeMapping
from application.repo.postgres.initialize import run_sql_script
from application.utils.config import test_db_params
from werkzeug.security import check_password_hash, generate_password_hash


@pytest.fixture
def data():
    run_sql_script(db_params=test_db_params,
                   sql_file="application/repo/postgres/tables/drop_tables.sql")
    run_sql_script(db_params=test_db_params,
                   sql_file="application/repo/postgres/tables/users.sql")
    run_sql_script(db_params=test_db_params,
                   sql_file="application/repo/postgres/tables/user_recipe_mapping.sql")
    new_user = Users(test_db_params)

    data = {"username": "test_admin", "password": "admin"}
    hashed_password = generate_password_hash(
        password=data["password"])
    data["hashed_password"] = hashed_password
    new_user.create(data)
    user = new_user.get(data)
    data["user_id"] = user[0]
    return data


def test_create_mapping(data):
    data["recipe_id"] = 4
    mapping = UserRecipeMapping(test_db_params)
    created = mapping.create(data)
    assert created == True


def test_get_mapping(data):
    data["recipe_id"] = 4
    mapping = UserRecipeMapping(test_db_params)
    mapping.create(data)
    data["recipe_id"] = 5
    mapping.create(data)
    result = mapping.get(data)
    assert len(result) == 2
    assert result[0][0] == 4
    assert result[1][0] == 5

# def test_user_login(new_user):
#     new_user[1]["recipe_id"] = 4
#     mapping = UserRecipeMapping(test_db_params)
#     created = mapping.create(new_user[1])
#     get_recipe = mapping.get(new_user[1])

#     assert get_recipe[0][0] == 4
