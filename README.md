Welcome to **Book Social Network**, an online platform where users can explore, share, and manage books with ease. This project is developed using **Spring Framework** and provides a robust API for interacting with books, users, and feedback. Below is a brief overview of the application and its main features.

## Overview

The Book Social Network app enables users to:

- Manage books (add, update, delete).
- Track book transaction history.
- Share feedback on books.
- Authenticate and manage user roles and permissions.

## Features

### User Management
- **Register/Login**: Users can create accounts, log in, and manage their credentials.
- **Role Management**: Users can be assigned different roles with varying levels of access.
- **Token Management**: The application uses tokens for session management and security.

### Book Management
- **Add/Update Books**: Users can add new books, update existing books, and manage book details (title, author, ISBN, etc.).
- **Book Sharing**: Books can be marked as shareable, allowing other users to borrow them.
- **Transaction History**: Track the history of borrowed and returned books.

### Feedback Management
- **Provide Feedback**: Users can provide feedback on books they have borrowed or read.
- **View Feedback**: View feedback history for better decision-making about book choices.

## API Documentation

The app provides a fully functional API to interact with the platform. You can explore the API through the **OpenAPI Specification**.

![image](https://github.com/user-attachments/assets/a61651b1-0183-4a02-a52c-ade362f2a47b)

---

### ER Diagram

![image](https://github.com/user-attachments/assets/38798a96-abe9-4d35-a90f-c4099f206898)

---

## Tech Stack
Spring Framework
- **Spring Security** for user authentication and role management.
- **JPA/Hibernate** for data persistence and entity management.
- **OpenAPI** for API documentation and testing.
- **Docker** for deploy be, fe and mail service.
- **Angular** for implementing booking pages, inject jwt token (just noob learner).

## How to Run the Application

1. Clone the repository to your local machine.
2. Ensure you have Java and Maven installed.
3. Set up your datasource and app configuration in `application-dev.yml`.
4. Build the project:
   ```bash
   mvn clean install
   
   docker-compose up

   ng for frontend
5. Run the application:
   ```bash
   mvn spring-boot:run
   ```
6. Access the API documentation at: `http://localhost:8080/api/v1/swagger-ui/index.html`
