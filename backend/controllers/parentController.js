const Parent = require('../models/Parent');

exports.getAllParents = async (req, res) => {
    try {
      const parents = await Parent.find();
      res.status(200).json(parents);
    } catch (error) {
      res.status(500).json({ message: "Error fetching schools", error: error.message });
    }
  };