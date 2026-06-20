# LeadForge

LeadForge is a modern Lead Management and Product CRM built with TypeScript, Express, Prisma, MySQL, and Paseto.

The platform provides secure authentication, role-based access control (RBAC), lead lifecycle management, product catalog management, category organization, email notifications, and audit-ready architecture designed for scalable business applications.

---

## Features

### Authentication & Authorization

* Paseto-based authentication
* Secure password hashing
* Access and refresh token support
* Role-Based Access Control (RBAC)
* Module-level permissions

### User Management

* Create, update, and manage users
* Assign roles
* Activate or deactivate accounts
* Soft delete support

### Role & Permission Management

* Dynamic role creation
* Module-based permission assignment
* Read and write access controls

### Lead Management

* Lead creation and tracking
* Lead status updates
* Lead assignment workflows
* Automated email notifications
* Lead lifecycle monitoring

### Product Management

* Product catalog management
* Product image support
* Product video support
* Rich HTML product descriptions

### Category Management

* Organize products into categories
* Category-based product filtering

### Email Notifications

* Thank-you emails
* Lead status update emails
* SMTP integration
* MailHog support for local development

### Audit & Activity Tracking

* Activity logging
* Audit trail support
* Change history tracking

---

## Technology Stack

| Layer            | Technology |
| ---------------- | ---------- |
| Runtime          | Node.js    |
| Language         | TypeScript |
| Framework        | Express.js |
| Database         | MySQL      |
| ORM              | Prisma     |
| Authentication   | Paseto     |
| Validation       | Zod        |
| Email            | Nodemailer |
| Development SMTP | MailHog    |

---

## Project Structure

```text
src/
├── app.ts
├── server.ts
│
├── config/
├── constants/
├── middlewares/
├── routes/
├── shared/
├── types/
├── utils/
│
└── modules/
    ├── auth/
    ├── user/
    ├── role/
    ├── permission/
    ├── lead/
    ├── product/
    └── category/
```

---

## Planned Modules

* [ ] Authentication Module
* [ ] User Module
* [ ] Role Module
* [ ] Permission Module
* [ ] Lead Module
* [ ] Product Module
* [ ] Category Module
* [ ] Activity Logs
* [ ] Audit Logs

---

## API Versioning

```text
/api/v1
```

Example:

```text
/api/v1/users
/api/v1/roles
/api/v1/permissions
/api/v1/leads
/api/v1/products
/api/v1/categories
```

---

## Development Goals

* Clean Architecture
* Modular Design
* Strong Type Safety
* Production-Ready Security
* Maintainable Codebase
* Scalable API Design

---

## License

This project is licensed under the MIT License.
