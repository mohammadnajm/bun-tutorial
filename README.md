# Bun Demo App — REST API Tutorial

This is a **tutorial demo project** built to explore and demonstrate how to run a simple REST API using **[Bun](https://bun.sh)** — a fast, modern JavaScript runtime.

The app includes:
- A lightweight server built with [Hono](https://hono.dev)
- Simple REST routes (`GET`, `POST`, `PATCH`, `DELETE`)
- A MongoDB connection using the official driver
- A clean folder structure with controllers, routes, and database utilities

---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Bun](https://bun.sh) — version **1.0.0+**
- [MongoDB](https://www.mongodb.com/) running locally or remotely
- Node.js *(optional, for comparison/testing only)*

---

## Project Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/bun-demo-app.git
cd bun-demo-app
```

Install dependencies:

```bash
bun install
```

Create an `.env` file in the root directory and set your database config:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=bun_demo
PORT=3000
```

---

## Run the App

Start the server in development mode:

```bash
bun run src/server.js
```

You’ll see something like:

```
Started development server: http://localhost:3000
```

Now open your browser or use curl:

```bash
curl http://localhost:3000/hello
```

Or test a POST route:

```bash
curl -X POST http://localhost:3000/echo   -H "Content-Type: application/json"   -d '{"name":"BunUser"}'
```

---

## Folder Structure

```
src/
├─ server.js         # Bun entry point
├─ app.js            # Hono app configuration
├─ routes/           # API route definitions
├─ controllers/      # Request handlers / business logic
├─ db/               # MongoDB connection setup
├─ middlewares/      # Custom middleware
└─ utils/            # Helpers (e.g. asyncHandler)
```

---

## Features

- ⚡️ Powered by Bun — extremely fast startup & install
- 🧭 Organized route structure (similar to Express)
- 🗄 MongoDB connection with async/await
- 🧱 Modular code separation (controllers, routes, db)
- 🧪 Perfect starting point for learning Bun in backend projects

---

## Notes

- Bun uses its own package manager, faster than npm/yarn.
- Dependencies are cached globally; the `node_modules` folder is mostly symbolic.
- You can easily switch to another port by updating the `.env` file.

---

## Scripts

| Command | Description |
|----------|-------------|
| `bun install` | Install dependencies |
| `bun run src/server.js` | Start the server |
| `bun test` | Run tests (if defined) |
| `pm2 start ecosystem.config.js` | Run in production with PM2 |

---

## License

MIT © 2025 — Created as a **tutorial demo** to learn and experiment with [Bun](https://bun.com)
