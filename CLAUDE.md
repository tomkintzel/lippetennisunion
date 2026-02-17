# CLAUDE.md — Lippe Tennis Union

## Project Overview

Website for the Lippe Tennis Union (German tennis association). Headless CMS architecture with a Strapi backend and Nuxt frontend, orchestrated via Docker Compose.

**Production domain:** `https://api.lippetennisunion.site`

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | Nuxt 4 (Vue 3), TypeScript          |
| Styling  | Tailwind CSS, custom `ltu` palette  |
| Icons    | Lucide Vue Next                     |
| Backend  | Strapi 5 (Headless CMS), Node.js   |
| Database | MySQL 8.0                           |
| Runtime  | Node 22 (Alpine Docker images)      |
| Deploy   | Docker Compose, GHCR images         |

## Repository Structure

```
├── frontend/          # Nuxt 4 app
│   ├── app/
│   │   ├── components/    # Vue components (blocks/, renderers/)
│   │   ├── composables/   # Vue 3 composables
│   │   ├── layouts/       # Nuxt layouts
│   │   ├── pages/         # File-based routing (events/, news/)
│   │   └── assets/        # CSS, static assets
│   ├── public/            # Static files (favicon, images)
│   ├── nuxt.config.ts
│   └── tailwind.config.ts
├── backend/           # Strapi 5 CMS
│   ├── src/api/           # Content types (page, post, event, partner, menu, homepage, service, setting)
│   ├── src/components/    # Reusable Strapi components (blocks/)
│   ├── config/            # Strapi config (database, server, plugins, middlewares)
│   └── public/uploads/    # Media uploads
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── docker-compose.deploy.yml
```

## Development Setup

```bash
# Start all services (DB, Strapi, Nuxt)
docker compose -f docker-compose.dev.yml up --build

# Frontend: http://localhost:3000
# Strapi Admin: http://localhost:1337/admin
```

- Backend env: `backend/.env.dev`
- Frontend env configured in `nuxt.config.ts` (falls back to `http://localhost:1337`)

## Key Commands

```bash
# Frontend
cd frontend && npm run dev       # Local dev (outside Docker)
cd frontend && npm run build     # Production build

# Backend
cd backend && npm run develop    # Local dev (outside Docker)
cd backend && npm run build      # Build Strapi admin panel
```

## Architecture Notes

- **Content blocks system:** Pages use Strapi dynamic zones with block components (Hero, Text, Events, Partners, News, Button, Richtext). Frontend renders these via `components/blocks/`.
- **Strapi v5 API** accessed via `@nuxtjs/strapi` module with `/api` prefix.
- **SEO** handled by `@nuxtjs/seo` module.
- **Deep population** via `strapi-v5-plugin-populate-deep`.
- **Email** via `@strapi/provider-email-nodemailer`.

## Conventions

- Commit messages: short, lowercase, imperative (e.g., `add content richtext renderer`, `change favicon`)
- No linter or formatter configured — keep code style consistent with existing files
- No test framework configured
- Language: German for user-facing content, English for code and commits

## Environment Variables

### Backend (see `backend/.env.example`)
`HOST`, `PORT`, `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, `ENCRYPTION_KEY`, `DATABASE_*`

### Frontend
`NUXT_PUBLIC_STRAPI_URL`, `NUXT_PUBLIC_API_URL`

## Docker

- **Dev:** `docker-compose.dev.yml` — hot-reload for both frontend and backend
- **Prod:** `docker-compose.prod.yml` — multi-stage builds, production mode
- **Deploy:** `docker-compose.deploy.yml` — pulls pre-built images from `ghcr.io/tomkintzel/ltu-*`

## Design Tokens

- Primary blue: `#246d93` (`ltu.blue`)
- Accent yellow: `#fbdb57` (`ltu.yellow`)
- Font: Inter
