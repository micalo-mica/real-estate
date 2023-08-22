import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import connect from "./utils/db.js";
import authRoute from "./routes/auth.route.js";
import usersRoute from "./routes/users.route.js";
import agentsRoute from "./routes/agents.route.js";
import propertyRoute from "./routes/property.route.js";
import roomRoute from "./routes/rooms.route.js";

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routs
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/agent", agentsRoute);
app.use("/api/property", propertyRoute);
app.use("/api/room", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
