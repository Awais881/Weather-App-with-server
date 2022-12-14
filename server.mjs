import express from 'express';
import path from 'path';
import cors from "cors";

const app = express()
const port = process.env.PORT || 5001;

app.use(cors());


app.get("/abc", (req, res) => {
  console.log("request ip:", req.ip);
  res.send("Hello World" + new Date().toDateString());
});



app.get("/weather/:cityName", (req, res) => {
    
    console.log(`${req.ip} is asking for weather`)

    res.send({
        city: req.params.cityName,
        temp_c: 26,
        humidity: 72,
        max_temp_c: 31,
        min_temp_c: 19
    })
})

const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./web/build")));

app.use("*", express.static(path.join(__dirname, "./web/build")));

// app.use("/", express.static(path.join(__dirname, "./web/build/index.html")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});