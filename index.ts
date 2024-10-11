import express from "express";
import session, { SessionData } from "express-session";
import passport from "passport";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import mainRoutes from "./routes/mainRoutes.js";

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/mail", mainRoutes);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
