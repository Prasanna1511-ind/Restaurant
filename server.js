const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
    res.send("Restaurant Booking API Running!");
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});