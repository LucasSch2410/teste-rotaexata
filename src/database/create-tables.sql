CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Addresses (
    id SERIAL PRIMARY KEY,
    postal_code VARCHAR(8),
    state VARCHAR(255),
    city VARCHAR(255),
    neighborhood VARCHAR(255),
    street VARCHAR(255),
    number VARCHAR(10),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);