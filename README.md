# TECHNOLOGEEK Back-End


 ##Overview
 
 Back side of an e-commerce project "Technologeek" to obtain the professional title "Web and Mobile Application Developer". The front-end part of the project can be found [here]([https://github.com/David-Chazoule/e-shop-front).

## Technologies Used

The application has been developed using:
- Javascript
- Express.js

## Installation and Execution

To set up and run the application locally, follow these steps:

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start the application:**

    ```bash
    nodemon index.js
    ```

## Project Structure

Here's an overview of the project structure:

- `controllers/`: directory manages the application's business logic. It defines functions to handle requests, interact with models, and send responses.
- `middlewares/`: directory contains middleware functions that handle request and response processing, such as error handling.
- `models/`:  directory defines database interactions. It contains functions for querying and manipulating data in the database.
- `routes/`: directory defines the application's routes and maps them to the corresponding controller functions.
- `db/`: Directory contains data files. This includes SQL files with the initial data. These files are used to populate the database with necessary data.


