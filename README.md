
# TechScribe Backend Setup

This is the backend for the **TechScribe** project. The application is built using Node.js, Express, and PostgreSQL. Below are the steps to set up the project using Docker.
## If Docker not installed
- npm i --force
- npm run start
- set env to
  - `DATABASE_URL`: Your PostgreSQL connection string.
  - `ACCESS_TOKEN_SECRET`: A secret key for session management.
## Prerequisites

- Docker installed on your system.
- PostgreSQL database URL.

## Environment Variables

Before running the application, ensure that the following environment variables are set up:

- `DATABASE_URL`: Your PostgreSQL connection string.
- `ACCESS_TOKEN_SECRET`: A secret key for session management.

## Docker Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/backend.git
      - Replace `your-username` with your GitHub username.
   cd backend
   ```

### 2. Create `.env` File

In the project root directory, create a `.env` file with the following content:

```
DATABASE_URL=postgresql://<username>:<password>@<host>/<database>?sslmode=require
ACCESS_TOKEN_SECRET=<your-session-secret>
```

Replace `<username>`, `<password>`, `<host>`, `<database>`, and `<your-session-secret>` with your actual PostgreSQL credentials and a secure session secret.

### 3. Build the Docker Image

Run the following command to build the Docker image:

```bash
docker build -t techscribe-backend .
```

### 4. Run the Docker Container

Use the following command to start the container and pass the environment variables:

```bash
docker run -p 8000:8000 --env-file .env techscribe-backend
```

This will map port `8000` from the container to your local machine, making the application accessible at `http://localhost:8000`.

### 5. Database Migrations (If Needed)

If you need to run Prisma migrations manually, use the following steps:

1. Find your container ID:

   ```bash
   docker ps
   ```

2. Run the migration command:
   ```bash
   docker exec -it <container-id> npx prisma migrate deploy
   ```
   Replace `<container-id>` with the ID of your running container.

## Development

To make changes to the project:

1. Stop the running container (if any).
2. Make your changes to the code.
3. Rebuild the Docker image:
   ```bash
   docker build -t techscribe-backend .
   ```
4. Start a new container with the updated image:
   ```bash
   docker run -p 8000:8000 --env-file .env techscribe-backend
   ```

## Troubleshooting

If you encounter any issues, please check the following:

1. Ensure Docker is running on your machine.
2. Verify that the environment variables in the `.env` file are set correctly.
3. Check the Docker logs for any error messages:
   ```bash
   docker logs <container-id>
   ```

If problems persist, please open an issue in the GitHub repository.
=======
Welcome to HACKTOBERFEST 2024
Go through CONTRIBUTING && CODE OF CONDUCT
Happy Coding!!
