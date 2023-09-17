# [FlavorfulFinds.xyz](http://flavorfulfinds.xyz)

![FlavorfulFinds Logo](frontend/build/images/logo.png)

Welcome to FlavorfulFinds.xyz – Your Ultimate Recipe Finder!

## Introduction

FlavorfulFinds.xyz is your go-to web application for discovering and managing your favorite recipes with ease. Whether you're searching for recipes based on the ingredients you have in your kitchen or looking for a specific recipe by title, FlavorfulFinds.xyz has got you covered. With its user-friendly interface and robust feature set, meal planning and cooking have never been more enjoyable.

## Features

- **Recipe Search:** Easily find recipes by ingredients or title.
- **User Accounts:** Create an account to save and organize your favorite recipes.
- **Intuitive Interface:** Enjoy a smooth and user-friendly browsing experience.

## Access the App

Experience FlavorfulFinds.xyz by visiting [FlavorfulFinds.xyz](http://flavorfulfinds.xyz).

## File Structure

The project is structured into three main directories: `frontend`, `backend`, and `deploy`.

### Frontend

The `frontend` directory houses the user interface of the application, built using React. It includes the following scripts:

- `npm install`: Install all dependencies.
- `npm run build`: Build the production-ready frontend application.
- `npm run start:dev`: Start the development server.
- `npm run start:prod`: Launch the production server.
- `npm run start:db-json`: Initiate the JSON server for development.

For configuration, make sure to set the following environment variables in your `.env` file:

- `REACT_APP_FOOD_IMAGES_BUCKET`
- `REACT_APP_BACKEND_URL`
- `REACT_APP_PUBLIC_IP`

### Backend

The `backend` directory houses the server-side code for FlavorfulFinds.xyz. Set up the backend by running `pip install -r requirements.txt`.

For configuration, ensure that the following environment variables are set:

- `SECRET_KEY`
- `DBNAME`
- `DBUSER`
- `DBPASSWORD`
- `DBHOST`
- `DBPORT`
- `DEV_DBNAME`
- `DEV_DBUSER`
- `DEV_DBPASSWORD`
- `DEV_DBHOST`
- `DEV_DBPORT`
- `TEST_DBNAME=PORTGRES`
- `TEST_DBUSER=PORTGRES`
- `TEST_DBPASSWORD=PORTGRES`
- `TEST_DBHOST=127.0.0.1`
- `TEST_DBPORT=9999`

For testing, use the following commands:

```bash
docker run -d -p 127.0.0.1:9999:5432/tcp --name test_db -e POSTGRES_PASSWORD=postgres postgres:13.2-alpine
FLASK_CONFIG=test pytest
```

To access the database using Adminer, run:

```bash
docker run -d -p 8080:8080 --name adminer adminer
```

### Deploy

The `deploy` directory contains Docker Compose files for containerization and deployment:

- `docker-compose.yml` orchestrates the deployment of frontend, backend, database, Nginx, and Adminer.
- `nginx.conf` contains the Nginx configuration for reverse proxying.

## Getting Started

To start using the project, follow these steps:

1. Clone the repository: `git clone https://github.com/514sh/flavorful-finds.git`

2. Navigate to the `deploy` directory: `cd deploy`

3. Run Docker Compose to deploy the application: `docker-compose up -d`

4. Access the app at [http://localhost](http://localhost).

## Contributing

We welcome contributions to FlavorfulFinds.xyz! Feel free to fork the repository and submit pull requests to help improve the project.

## License

This project is licensed under the ISC License. For more details, please refer to the [LICENSE](LICENSE) file.

## Contact

If you have any questions or feedback, don't hesitate to reach out to the project author:

- **Name:** Mark Joseph M. Balagtas
- **Email:** mark.joseph.balagtas@outlook.com
- **GitHub:** [github.com/markbalagtas](https://github.com/514sh)

Thank you for choosing FlavorfulFinds.xyz, and may your culinary adventures be both flavorful and delightful! 🍽️👨‍🍳👩‍🍳