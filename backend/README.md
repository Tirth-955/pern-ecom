# PERN E-commerce Backend API

This project is the backend API for an e-commerce application, powered by the PERN stack (PostgreSQL, Express.js, Node.js). It handles all core product operations—creating, reading, updating, and deleting—and includes built-in security features with Arcjet for rate limiting and bot protection.

## Features

*   **Product Management:** CRUD operations for product data (name, image, price).
*   **Database Integration:** Seamless interaction with PostgreSQL for data storage.
*   **API Endpoints:** Well-defined RESTful API for easy client integration.
*   **Security:** Implements rate limiting and bot protection using Arcjet.
*   **Middleware:** Utilizes `helmet` for HTTP header security and `morgan` for request logging.
*   **CORS Enabled:** Configured for cross-origin resource sharing.

## Technologies Used

*   **Backend:** Node.js, Express.js
*   **Database:** PostgreSQL (via Neon Database client)
*   **Security:** Arcjet
*   **Other Libraries:** `cors`, `dotenv`, `helmet`, `morgan`, `nodemon` (for development)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)
*   A PostgreSQL database (e.g., a free tier from [Neon](https://neon.tech/) or a local PostgreSQL instance).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Tirth-955/pern-ecom-api.git
    cd pern-ecom-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
DATABASE_URL="YOUR_NEON_POSTGRES_CONNECTION_STRING"
ARCJET_KEY="YOUR_ARCJET_KEY"
ARCJET_ENV="development"
```

*   `PORT`: The port your server will run on (default: `3000`).
*   `DATABASE_URL`: Your PostgreSQL connection string. If you're using Neon, this will be provided by them.
*   `ARCJET_KEY`: Your API key for Arcjet. You can get one from [Arcjet](https://arcjet.com/).
*   `ARCJET_ENV`: Environment for Arcjet (development/production).

### Running the Server

To start the development server with `nodemon`:

```bash
npm run dev
```

The server will be running at `http://localhost:3000` (or your specified `PORT`).

## API Endpoints

The API provides the following endpoints for managing products:

| Method | Endpoint             | Description             | Body (JSON)                                       |
| :----- | :------------------- | :---------------------- | :------------------------------------------------ |
| `GET`  | `/api/products`      | Get all products        | None                                              |
| `GET`  | `/api/products/:id`  | Get a single product    | None                                              |
| `POST` | `/api/products`      | Create a new product    | `{"name": "string", "price": "decimal", "image": "string"}` |
| `PUT`  | `/api/products/:id`  | Update an existing product | `{"name": "string", "price": "decimal", "image": "string"}` (all fields required) |
| `DELETE` | `/api/products/:id` | Delete a product        | None                                              |

