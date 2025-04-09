import dotenv from 'dotenv'
dotenv.config()

import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/me", function (req, res) {
  res.json({
    name: "Priyanjal Saxena",
    email: "priyanjalsaxena7@gmail.com",
    age: 21,
    gender: "Male",
  });
});

const port = process.env.PORT || 5000
app.listen(port,function() {
    console.log(`Server is running on port ${port}`)
})