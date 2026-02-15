const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// POST: Add user
router.post("/", async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    const result = await pool.query(
      "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING *",
      [name, phone, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
