import express from "express";
import session, { SessionData } from "express-session";
import passport from "passport";
import cors from "cors";
const PORT = 8000;
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", require("./routes/authRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
