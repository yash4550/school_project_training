const School = require("../models/School");

// Add a new school
exports.addSchool = async (req, res) => {
  try {
    const newSchool = new School(req.body);
    await newSchool.save();
    res.status(201).json({ message: "School added successfully", school: newSchool });
  } catch (error) {
    res.status(400).json({ message: "Error adding school", error: error.message });
  }
};

// Get all schools
exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schools", error: error.message });
  }
};

// Update a school
exports.updateSchool = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedSchool) return res.status(404).json({ message: "School not found" });
    res.status(200).json({ message: "School updated successfully", school: updatedSchool });
  } catch (error) {
    res.status(400).json({ message: "Error updating school", error: error.message });
  }
};

// Delete a school
exports.deleteSchool = async (req, res) => {
    let id  = req.params.id 
  try {
    const deletedSchool = await School.findByIdAndDelete(id);
    if (!deletedSchool) return res.status(404).json({ message: "School not found" });
    res.status(200).json({ message: "School deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting school", error: error.message });
  }
};
