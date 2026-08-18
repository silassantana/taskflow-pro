# TaskFlow Pro

A full-stack project and task management platform with real-time collaboration. Built with Node.js, React, TypeScript, MongoDB, and Socket.io.

## Features

- **Authentication** — JWT-based register/login with protected routes
- **Projects** — CRUD with progress stats and team collaboration
- **Tasks** — CRUD with filtering, status tracking, and file attachments
- **Comments** — Threaded discussions per task
- **Real-time** — Socket.io-powered live notifications and updates
- **Kanban Board** — Drag-and-drop task management view
- **Analytics Dashboard** — Project health and throughput metrics
- **Notifications** — Per-user inbox with real-time delivery

## Stack

| Layer | Tech |
|---|---|
| Backend | Node.js, Express, TypeScript |
| Database | MongoDB, Mongoose |
| Real-time | Socket.io |
| Frontend | React, Redux Toolkit, TypeScript |
| Auth | JWT |
| Testing | Jest |
| Container | Docker, Docker Compose |

## Getting Started

**Requirements:** Node 20+, MongoDB (local or set `MONGO_URI`)

```bash
git clone https://github.com/silassantana/taskflow-pro
cd taskflow-pro
npm install
cp .env.example .env   # fill in values
npm -w server run dev
npm run dev
```

Run `npm test` for the credential-free unit suite. It does not require MongoDB,
private credentials, or network access.

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | HTTP server port | `4000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/taskflow_pro_dev` |
| `JWT_SECRET` | Secret for signing tokens | — |
| `VITE_API_URL` | Client → API base URL | `http://localhost:4000` |

## Docker

```bash
docker compose up
```

## Project Structure

```
server/        Express API (controllers, models, services, middleware)
client/        React source (components, Redux slices, hooks)
shared/        Shared TypeScript types
tests/         Credential-free Jest unit tests
```

## License

MIT
