<img width="800" height="533" alt="image" src="https://github.com/user-attachments/assets/5a6b91aa-30d0-4be8-9f81-7aa69a5b982e" />


# BOOM Stack - Starter Template

> **B**un + **O**pen standards + **O**ptimized delivery + **M**inimal JavaScript

A ready-to-use template for building fast, HTML-first web applications with Bun, Astro, HTMX, and MongoDB.

## Quick Start

```bash
# Clone this template
git clone <your-repo-url> my-project
cd my-project

# Start everything with Docker
docker-compose up --build

# Visit http://localhost:4321
```

That's it! No dependencies to install. Just Docker.

## What You Get

- **Bun** - Fast JavaScript runtime and package manager
- **Astro** - Server-first web framework
- **HTMX** - Dynamic HTML without heavy JavaScript
- **MongoDB** - Document database ready to use

## The BOOM Philosophy

1. **Server-first** - Render HTML on the server
2. **HTML-over-the-wire** - Send HTML partials, not JSON
3. **Minimal JavaScript** - HTMX is ~14KB
4. **Fast by default** - Bun runtime, minimal bundles

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   └── api/
│   │       └── example.ts       # Example API endpoint
│   ├── layouts/
│   │   └── Base.astro          # Base layout with HTMX
│   ├── components/              # Your components
│   └── lib/
│       └── db.ts               # MongoDB connection
├── docker-compose.yml          # Full stack setup
├── Dockerfile                  # Production build
└── astro.config.ts            # Astro configuration
```

## How It Works

### The Pattern

```
1. User interacts with HTML
2. HTMX sends request to server
3. Server queries DB, renders HTML
4. HTMX swaps HTML into page
5. Done. No client framework needed.
```

### Example: Dynamic Content

**Component** ([src/pages/index.astro](src/pages/index.astro)):
```astro
<button
  hx-get="/api/example"
  hx-target="#result"
  hx-swap="innerHTML"
>
  Click me
</button>
<div id="result"></div>
```

**API Endpoint** ([src/pages/api/example.ts](src/pages/api/example.ts)):
```typescript
export const GET: APIRoute = async () => {
  const timestamp = new Date().toLocaleTimeString();

  return new Response(
    `<p>✅ Server time: ${timestamp}</p>`,
    { headers: { "Content-Type": "text/html" } }
  );
};
```

**What happens:**
- User clicks button
- HTMX sends GET request
- Server returns HTML partial
- HTMX swaps it into `#result`
- No JavaScript frameworks needed!

## Database

MongoDB connection is ready at [src/lib/db.ts](src/lib/db.ts):

```typescript
import { db } from "../lib/db";

// Use it anywhere
const items = await db().collection("items").find().toArray();
```

### Access MongoDB

- **App**: `mongodb://mongo:27017` (from Docker containers)
- **Web UI**: http://localhost:8081 (Mongo Express)
  - Username: `admin`
  - Password: `admin`

## Commands

```bash
# Start everything
docker-compose up

# Start in background
docker-compose up -d

# Stop
docker-compose down

# Rebuild
docker-compose up --build

# View logs
docker-compose logs -f web
```

## Customize

### 1. Update Homepage
Edit [src/pages/index.astro](src/pages/index.astro)

### 2. Add API Routes
Create files in `src/pages/api/`:

```typescript
// src/pages/api/your-endpoint.ts
import type { APIRoute } from "astro";
import { db } from "../../lib/db";

export const GET: APIRoute = async () => {
  const data = await db().collection("items").find().toArray();

  return new Response(`<ul>${data.map(i => `<li>${i.name}</li>`).join("")}</ul>`, {
    headers: { "Content-Type": "text/html" }
  });
};
```

### 3. Add Components
Create `.astro` files in `src/components/`

### 4. Use HTMX
Add attributes to any HTML element:

```astro
<div hx-get="/api/data" hx-trigger="load" hx-swap="innerHTML">
  Loading...
</div>
```

## Deploy

The Dockerfile builds a production-ready image with Bun:

```bash
# Build
docker build -t my-app .

# Run
docker run -p 4321:4321 -e MONGODB_URI=<your-uri> my-app
```

Deploy to:
- **Fly.io/Railway** - Deploy the Docker image
- **Any VPS** - Docker or Bun + MongoDB
- **Kubernetes** - Use the provided Dockerfile

## When to Use BOOM

✅ **Good for:**
- CRUD applications
- Dashboards and admin panels
- Internal tools
- Content sites with interactivity
- MVPs and prototypes

❌ **Not ideal for:**
- Highly interactive apps (complex client state)
- Offline-first applications
- Real-time collaborative tools

## Resources

- [Astro Docs](https://docs.astro.build)
- [HTMX Docs](https://htmx.org/docs/)
- [Bun Docs](https://bun.sh/docs)
- [MongoDB Driver](https://www.mongodb.com/docs/drivers/node/)

## License

MIT

---

**Clone it. Build it. Ship it.** 🚀
