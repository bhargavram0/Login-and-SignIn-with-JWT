require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Mongodb connected succesfully")
    })
    .catch((error)=>{
        console.log("Error: ", error)
    })


app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
