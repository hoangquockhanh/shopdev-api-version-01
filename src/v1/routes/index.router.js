const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get("/api/users", (req, res, next) => {
  res.status(200).json({
    status: "success api",
    message: "api ok",
    metadata: [
      {
        name: "khanh",
        age: 26,
      },
      {
        name: "ronaldo",
        age: 39,
      },
      {
        name: "messi",
        age: 37,
      },
    ],
  });
});

module.exports = router;
