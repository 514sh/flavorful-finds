import secrets
import string


def generate_secret_key(length=32):
    characters = string.ascii_letters + string.digits + string.punctuation

    secret_key = ''.join(secrets.choice(characters) for _ in range(length))

    return secret_key


secure_key = generate_secret_key()
print(secure_key)
