const express = require("express");
const bodyparse = require("body-parser");
const usersRoute = require("./routes/UsersRouter.js");
const adminRoute = require('./routes/AdminRouter');
const priceRoute = require("./routes/PriceRouter.js");
const orderRoute = require("./routes/OrderRouter.js");
const env = require("./config/config.json")[process.env.NODE_ENV];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparse.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    if (req.method === "OPTIONS") {
        res.send(200);
    } else {
        next();
    }
});
app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        Message: "Welcome To DeLaundry"
    });
});
app.use("/user", usersRoute);
app.use("/prices", priceRoute);
app.use('/admin', adminRoute);
app.use("/order", orderRoute);
if (process.env.NODE_ENV === 'production') {
    app.listen(process.env.NODE_PORT || 80);
} else {
    app.listen(process.env.NODE_PORT, () => {
        console.log("http://" + env.host + ":" + process.env.NODE_PORT);
    });
}
