import express from "express";
import cors from "cors";
import userRouter from "./routes/user.router.js";
import serviceRouter from "./routes/servcie.router.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import roleRouter from "./routes/Role.router.js";
import applicationRouter from "./routes/applicationRout.js";
import categoryRouter from "./routes/categoryRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://pashok123321:pashok01072004@cluster0.aeal2zj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use("/api/user", userRouter);
app.use("/api/service", serviceRouter);
app.use("/api/role", roleRouter);
app.use("/api/application", applicationRouter);
app.use("/api/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
