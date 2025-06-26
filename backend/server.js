import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoute from "./routes/product.route.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parses application/json
app.use(express.urlencoded({ extended: true })); // parses application/x-www-form-urlencoded

app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps you to protect your app by setting various HTTP headers
app.use(morgan("dev")); // log the requests 

app.use("/api/products", productRoute);

const initDB = async () => {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS products(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log("Database Initialized Successfully.")
    } catch (error) {
        console.log("Error initDB\n", error)
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running on port: ${PORT}`);
    });
});
