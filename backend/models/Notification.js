const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  audience: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Notification', notificationSchema);
