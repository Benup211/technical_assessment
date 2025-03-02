# Project Setup

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)

## Environment Configuration
1. Create a `.env` file in the project root directory.
2. Copy the contents of `.env.example` and paste them into `.env`.
3. Set the `MONGO_URI` value with your MongoDB Atlas connection string.

Example `.env` file:
```env
MONGO_URI="your_mongodb_atlas_connection_string_here"
```

## Installation
Run the following command to install dependencies from `package.json`:
```sh
npm install
```

## Running the Application
Start the development server with:
```sh
npm run dev
```

## Running Tests
To run tests using Jest and Supertest, use:
```sh
npm run test
```

## API Documentation
You can test and explore API endpoints using Swagger at:
```sh
http://<backend_url>/api-docs
```

## Additional Notes
- Ensure your MongoDB Atlas instance is properly configured and accessible.
- Modify `.env` settings as needed for different environments (development, production, etc.).

