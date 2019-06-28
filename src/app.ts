import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

dotenv.load();

// Express configuration
const app = express();
app.set("port", process.env.PORT || 3000);

// Set up view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// Set up middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(lusca.xframe("SAMEORIGIN"));
// app.use(lusca.xssProtection(true));

// Serve static assets from src/public directory
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;
