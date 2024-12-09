const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNotification = async (req, res) => {
  const { audience, message } = req.body;

  const newNotification = new Notification({ audience, message });

  try {
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { audience, message } = req.body;

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      id,
      { audience, message },
      { new: true }
    );
    res.json(updatedNotification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    await Notification.findByIdAndDelete(id);
    res.json({ message: 'Notification deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
