CREATE TABLE IF NOT EXISTS user_recipe_mapping (
    mapping_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    CONSTRAINT uq_user_recipe_mapping UNIQUE (user_id, recipe_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);