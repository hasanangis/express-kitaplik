# 📚 Express Bookcase API

This is a backend project developed to practice **Node.js** and **Express** fundamentals. It implements a modular RESTful API structure with CRUD operations.

## 🎯 Learning Outcomes

In this project, I focused on:
- **Modular Architecture:** Separating routers, models, and middleware for clean code.
- **RESTful API:** Building endpoints for Create, Read, Update, and Delete operations.
- **Middleware:** Writing custom middleware for validation (ID checks, data validation).
- **Environment Variables:** Managing configuration securely using `.env`.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Tools:** Postman, Dotenv

## 🚀 How to Run

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/hasanangis/express-bookcase.git](https://github.com/hasanangis/express-bookcase.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment:**
    Create a `.env` file in the root folder and add:
    ```text
    PORT=7000
    ```

4.  **Start the server:**
    ```bash
    node index.js
    ```

5.  **Test:**
    Send requests to `http://localhost:7000/api/books` using Postman.