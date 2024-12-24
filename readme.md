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

1. **Install dependencies:**

Navigate to the ```suppliers-data-service``` directory and install the dependencies:
``` cd services/suppliers-data-service
    npm install
    run 
    dapr run --app-id suppliers-data-service --app-port 3001 --dapr-http-port 3501 --log-level debug --resources-path ./components --app-protocol http -- npm start```
dapr run --app-id suppliers-service --app-port 3002 --dapr-http-port 3502 --log-level debug --resources-path ./components -- npm start

Navigate to the ```suppliers-service``` directory and install the dependencies:
```cd ../suppliers-service
npm install
dapr run --app-id suppliers-data-service --app-port 3001 --dapr-http-port 3501 --log-level debug --resources-path ./components --app-protocol http -- npm start```