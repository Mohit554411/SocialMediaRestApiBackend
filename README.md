# Social Media Backend

## Table of Contents
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Security Considerations](#security-considerations)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
  This is a backend application for a social media platform that provides functionality for:

  -[User authentication and authorization (JWT-based).]
  -[Post creation, image uploads, and feed management.]
  -[Commenting and liking posts.]
  -[OTP-based password reset functionality.]

  The project is built with:

  -[Node.js: JavaScript runtime.]
  -[Express.js: Web framework.]
  -[MongoDB (Mongoose): NoSQL database for data storage.]
  -[JWT: For secure authentication.]
  -[Multer: For handling file uploads (images).]
  -[bcrypt: For password hashing.]

## Folder Structure

  /social-media-backend
├── /src                    
│   ├── /controllers        # Controller functions for handling logic
│   ├── /models             # Mongoose schemas/models for MongoDB
│   ├── /routes             # Route definitions for Express
│   ├── /middlewares        # Middlewares like authentication, error handling
│   ├── /utils              # Utility functions like OTP generation, JWT helper
│   ├── /config             # Configuration files for db, environment, etc.
│   ├── app.js              # Main application file inside /src
├── /uploads                # Directory for storing uploaded images or files
├── /tests                  # Unit and integration tests (Jest/Mocha)
├── .env                    # Environment variables (database URL, JWT secret)
├── .gitignore              # Git ignored files and folders
├── package.json            # NPM dependencies and scripts
└── README.md               # Documentation and setup guide


## Prerequisites
   Before you begin, ensure you have met the following requirements:

   -[Node.js (>= 14.x) installed on your machine.]
   -[MongoDB installed locally or access to a remote MongoDB instance.]
   -[Basic knowledge of JavaScript and Node.js.]

## Installation

 1. Clone the repository:
    git clone https://github.com/your-username/social-media-backend.git
 2. Navigate into the project directory:
    cd social-media-backend
 3. Install the dependencies:
    npm install

## Environment Variables
    To run this project, you will need to add a .env file in the root of your project with the following environment variables:

      PORT=3000
      DB_URI=mongodb://localhost:27017/social-media-db
      JWT_SECRET=your_jwt_secret_key
      OTP_EMAIL_API_KEY=your_smtp_or_email_api_key
      OTP_EMAIL_FROM=your_email_address_for_sending_otp

    Replace the values with your own credentials for MongoDB, JWT, and email service.

## Usage

   To start the server, run:
     npm start
   
   The server should now be running on http://localhost:3000.

   Available NPM Scripts
     -[npm start: Starts the server in production mode.]
     -[npm run dev: Starts the server in development mode using nodemon.]
     -[npm test: Runs unit and integration tests.]
     -[npm run lint: Lints the codebase using ESLint.]

## API Documentation
   ## Authentication Routes
        -[POST /api/register: Register a new user.]
        -[POST /api/login: Log in a user and return a JWT.]
        -[POST /api/reset-password: Send an OTP for password reset.]
        -[POST /api/change-password: Change the password after OTP verification.]
   ## User Profile Routes
        -[GET /api/user/:id: Get user profile by ID.]
        -[PUT /api/user/update: Update user profile.]
   ## Post Routes
        -[POST /api/posts: Create a new post.]
        -[GET /api/posts: Get all posts (paginated).]
        -[GET /api/posts/:id: Get a post by ID.]
        -[PUT /api/posts/:id: Update a post.]
        -[DELETE /api/posts/:id: Delete a post.]
   ## Comment Routes
        -[POST /api/posts/:postId/comments: Add a comment to a post.]
        -[GET /api/posts/:postId/comments: Get all comments for a post.]
        -[DELETE /api/comments/:commentId: Delete a comment.]
   ## Like Routes
        -[POST /api/posts/:postId/like: Like a post.]
        -[POST /api/posts/:postId/unlike: Unlike a post.]


## Testing
    Unit and integration tests are located in the /tests directory. To run the tests:
       npm test
    Make sure to set up a test database if required by configuring the DB_URI in the .env file for testing.