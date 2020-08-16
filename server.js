const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000; // pag walang PORT env rekta port 5000 gagamitin

app.listen(PORT, () => console.log("server started on port ${PORT}"));
