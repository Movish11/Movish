import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "./config/firebaseConfig.js";
import { v2 as cloudinary } from 'cloudinary';
import userRouter from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log("Server started on Port: " + port);
});
