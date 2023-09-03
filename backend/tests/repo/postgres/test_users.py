import pytest
from application.repo.postgres.users import Users
from application.repo.postgres.initialize import run_sql_script
from application.utils.config import test_db_params
from werkzeug.security import check_password_hash, generate_password_hash


@pytest.fixture
def new_user():
    run_sql_script(db_params=test_db_params,
                   sql_file="application/repo/postgres/tables/drop_tables.sql")
    run_sql_script(db_params=test_db_params,
                   sql_file="application/repo/postgres/tables/users.sql")

    newUser = Users(test_db_params)

    data = {"username": "test_admin", "password": "admin", "user_id": 1}
    hashed_password = generate_password_hash(
        password=data["password"])
    data["hashed_password"] = hashed_password
    created = newUser.create(data)
    return newUser, data


def test_user_get(new_user):
    user = new_user[0].get(new_user[1])
    correct_pass = check_password_hash(
        new_user[1]["hashed_password"], new_user[1]["password"])
    assert user[0] == 1
    assert user[1] == "test_admin"
    assert correct_pass == True


def test_user_login(new_user):
    login_user = new_user[0].get(new_user[1])
    assert login_user[0] == 1
    assert login_user[1] == "test_admin"
