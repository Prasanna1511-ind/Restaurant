const express = require("express");
const router = express.Router();
const db = require("../config/db");

// BOOK A TABLE
router.post("/book", (req, res) => {

    const {
        table_id,
        customer_name,
        purpose,
        phone,
        booking_date,
        booking_time
    } = req.body;

    if (!table_id || !customer_name || !phone ||
        !booking_date || !booking_time) {
        return res.status(400).json({
            message: "Please fill all required fields"
        });
    }

    const checkQuery = `
        SELECT booking_id
        FROM table_bookings
        WHERE table_id = ?
        AND booking_date = ?
        AND booking_time = ?
        AND booking_status IN ('PENDING', 'CONFIRMED')
    `;

    db.query(
        checkQuery,
        [table_id, booking_date, booking_time],
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            if (results.length > 0) {
                return res.status(409).json({
                    message: "This table is already booked for this time!"
                });
            }

            const insertQuery = `
                INSERT INTO table_bookings
                (table_id, customer_name, purpose, phone,
                 booking_date, booking_time)
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            db.query(
                insertQuery,
                [
                    table_id,
                    customer_name,
                    purpose,
                    phone,
                    booking_date,
                    booking_time
                ],
                (err, result) => {

                    if (err) {
                        return res.status(500).json({
                            message: "Booking failed"
                        });
                    }

                    res.status(201).json({
                        message: "Table booked successfully!",
                        booking_id: result.insertId
                    });
                }
            );
        }
    );
});

module.exports = router;
