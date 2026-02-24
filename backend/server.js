import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "./config/firebaseConfig.js";
import { v2 as cloudinary } from "cloudinary";
import userRouter from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";
import founderRouter from "./routes/founderRoute.js";
import contactRouter from "./routes/contactRoute.js";
import brandRouter from "./routes/brandRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://movish.in",
      "https://www.movish.in",
      "https://movish-admin.vercel.app",
      "https://movish-admin-amber.vercel.app",
      "https://movish-user.vercel.app",
      "https://movish-user-amber.vercel.app",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  }),
);

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/founder", founderRouter);
app.use("/api/contact", contactRouter);
app.use("/api/brand", brandRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// 404 Middleware for invalid API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

app.listen(port, () => {
  console.log("Server started on Port: " + port);
});
