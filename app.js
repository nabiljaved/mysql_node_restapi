require("dotenv").config();
const pool = require("./config/database")

const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/", (req,res)=> {
    res.send("hello")
});
const port = process.env.PORT || 4000;
app.listen(port, () => {

  pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Database connected successfully');
    console.log("server up and running on PORT :", port);
    connection.release();
  });
});
