# 🔥LEADFORGE SET UP GUIDE

<img src="banner.png" alt="banner" width="368" />\# Getting started

This guide walks you through setting up **LeadForge** locally.

## Prerequisites

Install the following before you begin:

| Software | Recommended version |
| --- | --- |
| Node.js | &gt;= 22.x |
| npm | Latest |
| MySQL | &gt;= 8.0 |
| Redis | &gt;= 7 |
| Git | Latest |

Verify your installation:

```bash
node -v
npm -v
mysql --version
redis-server --version
```

---

## 1) Clone the repository

```bash
git clone https://github.com/ithesaurabh/lead-forge.git
cd lead-forge
```

---

## 2) Install dependencies

```bash
npm install
```

---

## 3) Create the environment file

Create a `.env` file in the project root and add the following:

```
####################################
# Server
####################################
PORT=5000
NODE_ENV=development

####################################
# Database
####################################
DATABASE_URL="mysql://username:password@localhost:3306/lead_forge"

####################################
# AWS S3
####################################
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=

####################################
# Redis
####################################
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

####################################
# SMTP
####################################
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
```

> Fill in all required variables before running the application.

---

## 4) Generate Paseto keys

LeadForge uses **Paseto** instead of JWT. Generate a new key pair:

```bash
npm run generate-keys
```

---

## 5) Create the database

Create a MySQL database:

```sql
CREATE DATABASE lead_forge;
```

---

## 6) Run Prisma migrations

Generate the Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

---

## 7) Seed initial data

Seed permissions:

```bash
npm run seed:permissions
```

Create a super admin user:

```bash
npm run seed:super-admin
```

---

## 8) Start Redis

BullMQ requires Redis.

If Redis is installed locally, start it:

```bash
redis-server
```

Verify Redis is responding:

```bash
redis-cli ping
```

Expected output:

```
PONG
```

---

## 9) Start the email worker

BullMQ processes email jobs through a dedicated worker. Start it in a separate terminal:

```bash
npm run worker
```

---

## 10) Start the API server

```bash
npm run dev
```

The server will be available at:

```
http://localhost:5000
```

---

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run worker` | Start BullMQ email worker |
| `npm run build` | Compile TypeScript |
| `npm start` | Run compiled application |
| `npm run generate` | Generate a new module scaffold |
| `npm run generate-keys` | Generate Paseto key pair |
| `npm run seed:permissions` | Seed RBAC permissions |
| `npm run seed:super-admin` | Create super admin user |

---

## Running in development

You’ll typically run **two to three terminals**:

1. **API server**

   ```bash
   npm run dev
   ```

2. **Email worker**

   ```bash
   npm run worker
   ```

3. **Redis (optional)**

   ```bash
   redis-server
   ```

   Only needed if Redis isn’t already running as a background service.

---

## Common issues

### Prisma client out of sync

```bash
npx prisma generate
```

### Migration issues

```bash
npx prisma migrate reset
```

> **Warning:** This deletes all database data.

### Redis connection error

Verify Redis is running and reachable:

```bash
redis-cli ping
```

Expected:

```
PONG
```

### SMTP emails not sending

Confirm the following:

- SMTP credentials are correct
- SMTP host and port are correct
- The worker process is running (`npm run worker`)

---

## Production build

Build the project:

```bash
npm run build
```

---

## Tech stack

- TypeScript
- Express.js
- Prisma ORM
- MySQL
- BullMQ
- Redis
- Paseto authentication
- AWS S3
- Nodemailer
- Zod validation

---

## First-time setup checklist

- [ ] Install Node.js

- [ ] Install MySQL

- [ ] Install Redis

- [ ] Clone the repository

- [ ] Run `npm install`

- [ ] Configure `.env`

- [ ] Generate Paseto keys

- [ ] Create the database

- [ ] Run Prisma migrations

- [ ] Seed permissions

- [ ] Seed super admin

- [ ] Start Redis

- [ ] Start the BullMQ worker

- [ ] Start the API server

Once these steps are complete, LeadForge should be operational in your local development environment.

*Author : Saurabh Kumar Jha*