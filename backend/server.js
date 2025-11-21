import express from "express";
import dotenv from "dotenv";
import product from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config({ path: "./backend/.env", quiet: true });

const app = express();
app.use(express.json());
connectDB();

//Routes
app.use("/api/v1", product);

// app.get("/api/v1/products", getAllProducts);
// app.route("/api/v1/products").get(getAllProducts);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server runnign on PORT: ${PORT}`)
})