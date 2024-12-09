const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

router.post("/schools", schoolController.addSchool);
router.get("/schools", schoolController.getAllSchools);
router.put("/schools/:id", schoolController.updateSchool);
router.delete("/schools/:id", schoolController.deleteSchool);

module.exports = router;
