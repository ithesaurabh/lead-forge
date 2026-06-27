# TypeScript + Express + Prisma Backend Setup Guide

## 1. Initialize Project

```bash
npm init -y
```

---

## 2. Install TypeScript

```bash
npm install typescript -D
```

This installs the TypeScript compiler (`tsc`).

Verify installation:

```bash
npx tsc --version
```

> `npx` executes local npm binaries without requiring a global installation.

Initialize TypeScript configuration:

```bash
npx tsc --init
```

---

## 3. Configure TypeScript

Replace the entire contents of `tsconfig.json` with:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Explanation

| Option | Purpose |
| --- | --- |
| target | JavaScript version to generate |
| module | Controls import/export behavior |
| moduleResolution | Controls how imports are resolved |
| rootDir | Source code directory |
| outDir | Compiled JavaScript output directory |
| strict | Enables strict type checking |
| esModuleInterop | Better compatibility with CommonJS packages |
| forceConsistentCasingInFileNames | Prevents case-sensitivity issues between Windows and Linux |
| skipLibCheck | Skips type checking for external library typings |

---

## 4. Install Express

```bash
npm install express
```

Install development dependencies:

```bash
npm install -D @types/express tsx nodemon
```

### Packages

| Package | Purpose |
| --- | --- |
| @types/express | Type definitions for Express |
| tsx | Run TypeScript files directly |
| nodemon | Automatically restart server on file changes |

---

# Target Architecture

| Layer | Responsibility |
| --- | --- |
| Routes | URL definitions |
| Controllers | Handle HTTP request/response |
| Services | Business logic |
| Repositories | Database queries |
| Prisma | ORM access |
| Middleware | Shared request processing |
| Validators | Request validation |
| Config | Environment/app configuration |
| Utils | Reusable helper functions |
| Types | Shared typings/interfaces |

---

# Recommended Folder Structure

```text
src/
│
├── app.ts
├── server.ts
│
├── config/
│   ├── env.ts
│   └── db.ts
│
├── modules/
│   └── user/
│       ├── controller.ts
│       ├── service.ts
│       ├── repository.ts
│       ├── routes.ts
│       ├── validation.ts
│       ├── types.ts
│       └── index.ts
│
├── middlewares/
│   ├── error.ts
│   └── not-found.ts
│
├── utils/
│   └── api-response.ts
│
├── types/
│   └── express.d.ts
│
└── prisma/
    └── client.ts
```

---

# Generate Folder Structure

Run the following command from the project root:

```bash
mkdir -p src/config \
src/modules/user \
src/middlewares \
src/utils \
src/types \
src/prisma && \

touch src/app.ts \
src/server.ts \
src/config/env.ts \
src/config/db.ts \
src/modules/user/controller.ts \
src/modules/user/service.ts \
src/modules/user/repository.ts \
src/modules/user/routes.ts \
src/modules/user/validation.ts \
src/modules/user/types.ts \
src/modules/user/index.ts \
src/middlewares/error.ts \
src/middlewares/not-found.ts \
src/utils/api-response.ts \
src/types/express.d.ts \
src/prisma/client.ts
```

---

# Environment Variables

Install dotenv:

```bash
npm install dotenv
```

Load environment variables inside:

```text
src/config/env.ts
```

---

# Application Bootstrap

Implement:

```text
src/app.ts
src/server.ts
```

After implementation, verify the application starts correctly before proceeding.

---

# Prisma Setup

## Install Prisma CLI

```bash
npm install prisma -D
```

Provides commands such as:

```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
npx prisma studio
```

---

## Install Prisma Client

```bash
npm install @prisma/client
```

This is the runtime ORM client used by the application.

---

## Initialize Prisma

```bash
npx prisma init
```

Creates:

```text
prisma/
└── schema.prisma

.env
```

### Important

Do **not** add the database URL directly into the datasource object inside `schema.prisma`.

Use environment variables instead.

---

# Create First Model

Inside `prisma/schema.prisma`:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}
```

---

# Run Initial Migration

```bash
npx prisma migrate dev --name init
```

This:

- Creates migration files
- Updates the database schema
- Generates the Prisma Client

---

# Reset Database (Development)

If the database schema and migration history become out of sync:

```bash
npx prisma migrate reset
```

> Warning: This deletes all data in the database.

---

# Prisma v7 MariaDB Adapter

Install the MariaDB adapter:

```bash
npm install @prisma/adapter-mariadb
```

---

# Authentication Packages

Install password hashing and JWT support:

```bash
npm install bcrypt jsonwebtoken
```

These packages provide:

| Package | Purpose |
| --- | --- |
| bcrypt | Password hashing |
| jsonwebtoken | JWT creation and verification |

---

# Next Steps

After completing the above setup:

 1. Configure environment variables.
 2. Connect Prisma to MariaDB.
 3. Create Prisma client singleton.
 4. Implement User Repository.
 5. Implement User Service.
 6. Implement User Controller.
 7. Create Routes.
 8. Add Validation Layer.
 9. Add Global Error Handling.
10. Add Authentication & Authorization.
11. Add Logging.
12. Add Activity Tracking.
13. Add Role & Permission Management.