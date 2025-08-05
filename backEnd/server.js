
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from "./routes/product.routes.js"
import cors from 'cors';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const allowedOrigins = ['https://product-store-frontend-gv0a.onrender.com'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api/products", productRoute);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});


 
