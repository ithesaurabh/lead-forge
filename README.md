# 🔥LeadForge

![banner.png](setup/banner.png)&gt; A modern, modular Lead Management & Product CRM built with TypeScript, Express, Prisma, MySQL, Redis, BullMQ, and Paseto.

LeadForge is designed to provide businesses with a scalable backend for managing leads, products, categories, users, and role-based access control (RBAC). It follows a clean, modular architecture, making it easy to extend and maintain while remaining production-ready

---

## ✨ Features

### 🔐 Authentication & Authorization

- Paseto-based authentication
- Role-Based Access Control (RBAC)
- Permission-based route protection
- Secure password hashing with bcrypt

### 👥 User Management

- User CRUD operations
- Role assignment
- Permission management
- Super Admin seeding

### 📋 Lead Management

- Create and manage leads
- Lead status tracking
- Product association (optional)
- Automated confirmation emails
- Lead lifecycle management

### 📦 Product Management

- Product CRUD
- Category support
- Product images via AWS S3
- Redis caching for faster retrieval

### 🗂 Category Management

- Category CRUD
- Product categorization

### 📧 Email Automation

- Background email processing with BullMQ
- Non-blocking SMTP integration
- Queue-based architecture
- Dedicated email worker

### ☁ File Uploads

- AWS S3 integration
- Pre-signed upload URLs
- Folder-based upload organization

### ⚡ Performance

- Redis caching
- BullMQ job queues
- Modular service architecture

### 📝 Logging

- Structured logging with Pino
- HTTP request logging
- Production-friendly log formatting

### ✅ Validation

- Zod schema validation
- Request sanitization
- Centralized error handling

---

# 🛠 Tech Stack

| Category | Technology |
| --- | --- |
| Language | TypeScript |
| Runtime | Node.js |
| Framework | Express.js |
| Database | MySQL |
| ORM | Prisma |
| Authentication | Paseto |
| Queue | BullMQ |
| Cache | Redis |
| Storage | AWS S3 |
| Validation | Zod |
| Email | Nodemailer |

---

# 📁 Project Structure

```
src/
│
├── config/
├── constants/
├── database/
│   └── seeds/
├── middlewares/
├── modules/
├── redis/
│   └── bullmq/
│   └── cache/
├── routes/
├── services/
├── types/
├── utils/
└── app.ts
└── server.ts
```

---

# 🔒 Security

- Paseto authentication
- Password hashing with bcrypt
- Role-Based Access Control
- Permission-based authorization
- Input validation using Zod
- HTML sanitization
- Environment-based configuration
- Secure file uploads with AWS S3

---

# ⚡ Background Jobs

LeadForge uses BullMQ with Redis for asynchronous processing.

Current jobs include:

- Welcome emails
- Lead confirmation emails

This keeps API responses fast while processing email tasks in the background.

---

# 📚 API Modules

- Auth
- User
- Roles
- Permissions
- Category
- Product
- Lead
- Uploads

Each module follows the same layered structure:

```
module/
├── controller
├── service
├── repository
├── validation
├── routes
├── types
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

Please ensure new features include appropriate validation and follow the existing project structure.

---

## 📬 Contact Author

Have questions, suggestions, or want to collaborate? Feel free to reach out.

**Saurabh Jha**

- 📧 Email: [**saurabh.jha.connect@gmail.com**](mailto:saurabh.jha.connect@gmail.com)
- 🐙 GitHub: [**https://github.com/ithesaurabh**](https://github.com/ithesaurabh)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.