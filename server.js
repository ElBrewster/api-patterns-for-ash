//importing packages
import express from "express";
import cors from "cors";
// require("dotenv").config();
import comments from "./data/commentsData.js";
import patterns from "./data/patternsData.js";
import users from "./data/usersData.js";

const app = express();
const port = process.env.PORT || 5500;

app.locals = {
    title: `Vintage Fit`,
    comments,
    patterns,
    users,
}

//middlewares
//our server needs to recognize the incoming request objects as JSON objects
app.use(cors());
app.use(express.json());


//adding routes
app.get("/comments", (req, res) => {
    res.status(200).json({patterns: app.locals.comments});
    // console.log("comments: ", comments);
});

app.get("/patterns", (req, res) => {
    res.status(200).json({patterns: app.locals.patterns});
    console.log("patterns: ", patterns);
});

app.get("/users", (req, res) => {
    res.status(200).json({patterns: app.locals.users});
    // console.log("users: ", users);
});



//port
//we need to listen for a connection to know our server is running
app.set("port", process.env.PORT || 5500);
app.listen(port, ( console.log(`${app.locals.title} is listening on Port: ${port}`)));