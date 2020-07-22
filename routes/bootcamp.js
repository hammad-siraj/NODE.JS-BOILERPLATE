const express = require("express");

const router = express.Router();

const {
  createBootCamp,
  deleteBootCamp,
  getBootCamp,
  getBootCampById,
  updateBootCamp,
} = require("../controllers/bootcamp");

router.route("/").get(getBootCamp).post(createBootCamp);

router.route("/:id").put(updateBootCamp, getBootCampById, deleteBootCamp);

module.exports = router;
