# Suppliers Backend

This project is a backend service for managing suppliers, built with Node.js, Express, TypeScript, and Dapr.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 20 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Dapr CLI](https://docs.dapr.io/getting-started/install-dapr-cli/)
- [Docker](https://www.docker.com/) (for running PostgreSQL)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/suppliers-backend.git
   cd suppliers-backend
   docker compose up -d build

GitHub Copilot
Sure! Here is a sample README.md file to describe how to run the app, including setting up the environment, running the Dapr sidecar, and starting the application.

2. **Install dependencies:**

- Navigate to the ```suppliers-data-service``` directory and install the dependencies:
   
   ```sh
   cd services/suppliers-data-service
   npm install

- Navigate to the ```suppliers-service``` directory and install the dependencies:

   ```sh
   cd ../suppliers-service
   npm install

3. **Set up environment variables:**

- Create a .env file in the suppliers-data-service and suppliers-service directories with the following content:

   ```sh
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_PORT=5432
   PORT=3001

4. **Run PostgreSQL using Docker:**

- Start PostgreSQL using Docker Compose:

   ```sh
   docker-compose up -d postgres

##Running the Application

Running Locally with Dapr

1. **Navigate to the application directory:**

   ```sh
   cd /path/to/suppliers-data-service

2. **Run the Dapr sidecar and application:**

   ```sh
   dapr run --app-id suppliers-data-service --app-port 3001 --dapr-http-port 3501 --log-level debug --resources-path ./components --app-protocol http -- npm start```

3. **Navigate to the second application directory:**

   ```sh
   cd /path/to/suppliers-service```

4. **Run the Dapr sidecar and application:**

   ```sh 
   dapr run --app-id suppliers-service --app-port 3002 --dapr-http-port 3502 --log-level debug --resources-path ./components --app-protocol http -- npm start

5. **Access the application:**

The application should now be running and accessible at ```http://localhost:3001``` and ```http://localhost:3002```.

##API Endpoints
**Suppliers Data Service**
- POST /suppliers: Create a new supplier
- POST /update-supplier: Update an existing supplier
- DELETE /supplier/:id: Delete a supplier by ID
- GET /suppliers: Get a list of suppliers

**Suppliers Service**
- POST /suppliers: Create a new supplier
- POST /update-supplier: Update an existing supplier
- DELETE /supplier/:id: Delete a supplier by ID
- GET /suppliers: Get a list of suppliers
