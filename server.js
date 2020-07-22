const express = require("express");
const dotenv = require("dotenv");
const bootcamp = require("./routes/bootcamp");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  next();
};
app.use(logger);

app.use("/api/v1/bootcamps", bootcamp);

app.listen(PORT, console.log(`SEVER IS RUNNING AT PORT${PORT}`));
