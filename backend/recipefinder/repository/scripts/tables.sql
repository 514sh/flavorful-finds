CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_recipe_mapping (
    mapping_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    recipe_id INT 
);