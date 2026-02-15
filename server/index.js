const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.use("/api/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
