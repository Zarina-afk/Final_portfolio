Portfolio App

This is a simple portfolio application that connects to a MongoDB database using Mongoose, handles form submissions, and renders content using the EJS template engine.

Features

User data (name, email, subject, message) is saved to a MongoDB database.

MongoDB Atlas is used for cloud database storage.

Express.js is used to set up a server.

EJS is used for rendering dynamic views.


Technologies Used

Node.js: JavaScript runtime for the backend.

Express.js: Web framework for Node.js.

MongoDB: Database for storing user data.

Mongoose: MongoDB object modeling tool.

EJS: Embedded JavaScript templating engine.

dotenv: Used for environment variable management.


Setup Instructions

1. Clone the repository

git clone https://github.com/your-username/portfolio-app.git
cd portfolio-app

2. Install dependencies

Make sure you have Node.js installed. Then, install the necessary dependencies by running:

npm install

3. Create a .env file

Create a .env file in the root of your project and add your MongoDB Atlas URL:

DATABASEURL=mongodb+srv://your-username:your-password@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority

Replace your-username and your-password with your MongoDB Atlas credentials.

4. Start the application

Once the dependencies are installed and the .env file is configured, you can start the application by running:

npm start

The application should now be running on http://localhost:3000.

5. View the app

Open your browser and go to http://localhost:3000 to view the portfolio application.

File Descriptions

index.js: The main entry point of the app. It sets up Express, connects to the MongoDB database, and starts the server.

controllers/homeController.js: Contains the logic for the home route. It saves a user to the database and renders the index view.

db/connectDB.js: Contains the logic to connect to the MongoDB Atlas database using Mongoose.

model/userModel.js: Defines the Mongoose schema and model for storing user data.

routes/routes.js: Contains the routes for the application, including the home route.

views/index.ejs: The view template that is rendered when accessing the homepage.


Troubleshooting

Ensure that your MongoDB Atlas credentials are correct in the .env file.

Make sure MongoDB Atlas is properly set up and that your IP address is whitelisted for access.


License

This project is licensed under the MIT License - see the LICENSE file for details.
