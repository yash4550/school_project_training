import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/NotificationManager.css";

const API_URL = "http://localhost:5000/api/notifications"; // Updated API URL

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedAudience, setSelectedAudience] = useState("");
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch Notifications on Component Mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
      alert("Failed to fetch notifications. Please check the server.");
    }
  };

  const handleCreateOrUpdate = async () => {
    if (!selectedAudience || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    try {
      if (isEditing) {
        // Update Notification
        const updatedNotification = { audience: selectedAudience, message };
        await axios.put(`${API_URL}/${editingId}`, updatedNotification);
        alert("Notification updated successfully!");
      } else {
        // Create New Notification
        const newNotification = { audience: selectedAudience, message };
        await axios.post(API_URL, newNotification);
        alert("Notification added successfully!");
      }

      fetchNotifications();
      resetForm();
    } catch (error) {
      console.error("Error creating/updating notification:", error.message);
      alert("Failed to save notification. Please try again.");
    }
  };

  const handleEdit = (id) => {
    const notification = notifications.find((n) => n._id === id);
    setSelectedAudience(notification.audience);
    setMessage(notification.message);
    setIsEditing(true);
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Notification deleted successfully!");
      fetchNotifications();
    } catch (error) {
      console.error("Error deleting notification:", error.message);
      alert("Failed to delete notification. Please try again.");
    }
  };

  const handleSendNotification = () => {
    if (notifications.length === 0) {
      alert("No notifications available to send.");
      return;
    }

    console.log("Sending notifications:", notifications);
    alert("Notifications sent successfully!");
  };

  const resetForm = () => {
    setSelectedAudience("");
    setMessage("");
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="notification-container">
      <div className="header">
        <h1 className="title">Notification Manager</h1>
      </div>

      <div className="form-section">
        <label htmlFor="audience" className="label">
          Select Audience:
        </label>
        <select
          id="audience"
          className="dropdown"
          value={selectedAudience}
          onChange={(e) => setSelectedAudience(e.target.value)}
        >
          <option value="">-- Select Audience --</option>
          <option value="All Users">All Users</option>
          <option value="Only Parents">Only Parents</option>
          <option value="Only Schools">Only Schools</option>
        </select>

        <label htmlFor="message" className="label">
          Message:
        </label>
        <textarea
          id="message"
          className="textarea"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        <button className="send-btn" onClick={handleCreateOrUpdate}>
          {isEditing ? "Update Notification" : "Add Notification"}
        </button>
      </div>

      <div className="notification-list">
        <h2 className="sub-title">Existing Notifications</h2>
        {notifications.length === 0 ? (
          <p className="no-notifications">No notifications available.</p>
        ) : (
          <table className="notification-table">
            <thead>
              <tr>
                <th>Audience</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification._id}>
                  <td>{notification.audience}</td>
                  <td>{notification.message}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(notification._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(notification._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="send-section">
        <button className="send-all-btn" onClick={handleSendNotification}>
          Send Notification
        </button>
      </div>
    </div>
  );
};

export default NotificationManager;
