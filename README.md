# PERN E-commerce 

A full-stack e-commerce application built with the PERN stack (PostgreSQL, Express, React, Node.js).

## Features

- Product management (CRUD operations)
- Responsive React frontend with Tailwind CSS
- RESTful API with Express.js
- PostgreSQL database with Neon
- Security with Arcjet rate limiting
- Real-time updates and notifications

## Tech Stack

**Frontend:**
- React 18 + Vite
- Tailwind CSS + DaisyUI
- Zustand (state management)
- React Router DOM

**Backend:**
- Node.js + Express
- PostgreSQL (Neon)
- Arcjet (security)
- CORS, Helmet, Morgan

## Quick Start

1. Clone and install:
   ```bash
   git clone https://github.com/Tirth-955/pern-ecom.git
   cd pern-ecom
   ```

2. Set up environment variables in `.env`:
   ```
   PORT=3000
   DATABASE_URL="your_postgres_connection_string"
   ARCJET_KEY="your_arcjet_key"
   ARCJET_ENV="development"
   ```

3. Start server:
   ```bash
   npm run build
   ```

   ```bash
   npm start
   ```

4. Open http://localhost:3000

## Project Structure

```
├── frontend/          # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── store/
│   └── package.json
├── backend/           # Express API
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── server.js
└── package.json       # Root dependencies
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## Scripts

- `npm run dev` - Start backend with nodemon
- `npm run build` - Build frontend for production
- `npm start` - Start production server

## Environment

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Database: PostgreSQL (Neon)
