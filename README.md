# TaskFlow Pro Starter

TaskFlow Pro is a full-stack project & task management platform (Node.js/Express + MongoDB + React + TypeScript + Socket.io). This starter repository is the baseline for 10 advanced tasks implementation exercises.

## Features (Starter)

- Auth (register/login, JWT)\n- Projects CRUD + simple progress stats\n- Tasks CRUD + basic filtering\n- Comments CRUD (pre-refactor)\n- Notifications retrieval\n- Socket.io stubs for real-time events

## Project Structure

```
server/        Backend (Express + Mongoose)
client/        Frontend (React + Redux Toolkit)
shared/        Shared TypeScript types
tasks/         Task challenge definitions & test scaffolds
run_tests.sh   Entry script used by Docker & graders
Dockerfile     Builds test runner image
```

## Running Locally

Requires: Node 20+, MongoDB running locally (or set `MONGO_URI`).

```
npm install
npm -w server run dev
npm -w client run dev
```

```
```

## License / Ownership

All code is original and intended for Project Anvil evaluation dataset. Not for external redistribution.

## Environment Variables

Copy .env.example to .env and fill in the values before running locally.

| Variable | Description | Default |
|---|---|---|
| PORT | HTTP server port | 4000 |
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/taskflow_pro_dev |
| JWT_SECRET | Secret key for signing JWTs â€“ **change in production** | dev-secret |
| VITE_API_URL | Base URL the client uses to reach the API | http://localhost:4000 |