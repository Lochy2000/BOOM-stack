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
A lightweight full-stack template for launching MVPs, internal tools, dashboards, and CRUD applications without the complexity of modern frontend frameworks.
BOOM combines a server-first architecture with a simple development experience, providing a solid starting point for projects that need to be built and deployed quickly.

- **Bun** - Fast JavaScript runtime and package manager
- **Astro** - Server-first web framework
- **HTMX** - Dynamic HTML without heavy JavaScript
- **MongoDB** - Document database ready to use


---
 
## Why BOOM?
 
Many modern web applications start with a large amount of tooling:
 
```text
React
↓
Next.js
↓
API Layer
↓
ORM
↓
Database
```
 
For highly interactive applications this can make sense.
 
For many MVPs and business applications, it can introduce unnecessary complexity.
 
BOOM takes a simpler approach:
 
```text
Browser
↓
HTMX
↓
Astro Server
↓
MongoDB
```
 
The server renders HTML.
 
HTMX handles dynamic updates.
 
MongoDB stores the data.
 
The result is a stack that is:
 
- Fast to develop
- Easy to understand
- Easy to deploy
- Lightweight
- Suitable for rapid iteration
 
---
 
## What BOOM Is
 
BOOM is an opinionated starter template built around:
 
- **Bun** for runtime and package management
- **Astro** for server-side rendering
- **HTMX** for dynamic user interactions
- **MongoDB** for persistence
- **Docker** for deployment
 
It is designed to help developers move from idea to working application quickly.
 
---
 
## What BOOM Is Not
 
BOOM is not:
 
- A new frontend framework
- A replacement for React, Vue, or Svelte
- A new database abstraction layer
- A new deployment platform
 
It is simply a curated stack and project structure that brings together proven tools for building and deploying web applications.
 
---
 
# The Stack
 
## Bun
 
[Bun](https://bun.sh) is used as the runtime and package manager.
 
Benefits:
 
- Fast installs
- Fast execution
- Simple tooling
- TypeScript support out of the box
 
Example:
 
```bash
bun install
bun run dev
```
 
---
 
## Astro
 
[Astro](https://astro.build) powers the application frontend and server.
 
Why Astro?
 
- Server-first architecture
- Excellent performance
- Minimal client-side JavaScript
- Component-based development
- Flexible routing
 
Pages are rendered on the server and delivered as HTML.
 
---
 
## HTMX
 
[HTMX](https://htmx.org) enables dynamic interactions without needing a full JavaScript framework.
 
Instead of writing API clients and managing frontend state, HTMX allows HTML to make requests directly.
 
Example:
 
```html
<button
hx-post="/api/tasks/create"
hx-target="#task-list"
hx-swap="innerHTML"
>
Add Task
</button>
```
 
The browser sends a request.
 
The server returns HTML.
 
HTMX updates the page.
 
No React state management required.
 
---
 
## MongoDB
 
MongoDB provides persistence for application data.
 
Ideal for:
 
- MVPs
- Dashboards
- Internal tools
- SaaS prototypes
- Content-driven applications
 
Connection handling is centralised within the application.
 
---
 
## Docker
 
Docker provides a repeatable deployment process.
 
Package the entire application into a container and deploy it anywhere that supports Docker.
 
Examples:
 
- VPS
- Digital Ocean
- Hetzner
- Railway
- Fly.io
- AWS
- Azure
 
---
 
# Architecture
 
A typical request follows this flow:
 
```text
User Action
↓
HTMX Request
↓
Astro Endpoint
↓
MongoDB Query
↓
Rendered HTML
↓
HTMX Page Update
```
 
This keeps most application logic on the server where it is easier to manage and debug.
 
---
 
# Project Structure
 
```text
src/
├── components/
├── layouts/
├── pages/
├── lib/
├── styles/
└── middleware
 
public/
docker/
```
 
### Components
 
Reusable UI elements.
 
```text
src/components/
```
 
### Layouts
 
Shared page templates.
 
```text
src/layouts/
```
 
### Pages
 
Application routes.
 
```text
src/pages/
```
 
### Lib
 
Database utilities, business logic, and shared helpers.
 
```text
src/lib/
```
 
---
 
# Getting Started
 
## Prerequisites
 
- Bun
- MongoDB
- Docker (optional)
 
---
 
## Install Dependencies
 
```bash
bun install
```
 
---
 
## Configure Environment Variables
 
Create a `.env` file:
 
```env
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=boom
```
 
---
 
## Start Development Server
 
```bash
bun run dev
```
 
Application will be available at:
 
```text
http://localhost:4321
```
 
---
 
## Build for Production
 
```bash
bun run build
```
 
---
 
## Preview Production Build
 
```bash
bun run preview
```
 
---
 
# Running with Docker
 
Build image:
 
```bash
docker build -t boom .
```
 
Run container:
 
```bash
docker run -p 4321:4321 boom
```
 
---
 
# Example Use Cases
 
BOOM works particularly well for:
 
### SaaS MVPs
 
Build and validate product ideas quickly.
 
### Internal Business Tools
 
Admin panels, reporting dashboards, and operational software.
 
### Customer Portals
 
Account management and business workflows.
 
### Booking Systems
 
Simple appointment and reservation systems.
 
### CRUD Applications
 
Applications that primarily create, read, update, and delete data.
 
### Content Management Tools
 
Server-rendered applications with rich content and minimal client-side complexity.
 
---
 
# When You Might Not Want BOOM
 
A different architecture may be more suitable if your application relies heavily on:
 
- Real-time collaborative editing
- Complex browser-side state
- Rich drag-and-drop interactions
- Browser-based design tools
- Highly interactive SPA experiences
 
For those applications, a frontend framework such as React or Vue may be a better fit.
 
---
 
# Philosophy
 
BOOM follows a simple idea:
 
> Prefer server-rendered HTML until there is a clear reason not to.
 
Many projects spend significant time managing frontend complexity before they have validated the problem they are trying to solve.
 
BOOM aims to reduce that overhead by combining modern tools with a server-first approach.
 
Build the product.
 
Validate the idea.
 
Add complexity only when it becomes necessary.
 
---
 
# Contributing
 
Contributions, improvements, and suggestions are welcome.
 
Feel free to open an issue or submit a pull request.
 
---
 
# Licence
 
MIT

**Clone it. Build it. Ship it.** 🚀
