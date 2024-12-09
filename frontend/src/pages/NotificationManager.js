import React, { useState } from "react";
import "../styles/NotificationManager.css";

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedAudience, setSelectedAudience] = useState("");
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleCreateOrUpdate = () => {
    if (!selectedAudience || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    if (isEditing) {
      const updatedNotifications = [...notifications];
      updatedNotifications[editingIndex] = { audience: selectedAudience, message };
      setNotifications(updatedNotifications);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setNotifications([...notifications, { audience: selectedAudience, message }]);
    }

    setSelectedAudience("");
    setMessage("");
  };

  const handleEdit = (index) => {
    setSelectedAudience(notifications[index].audience);
    setMessage(notifications[index].message);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
  };

  const handleSendNotification = () => {
    if (notifications.length === 0) {
      alert("No notifications available to send.");
      return;
    }

    // Logic for sending notification (e.g., API call)
    console.log("Sending notifications...");
    alert("Notifications sent successfully!");
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
              {notifications.map((notification, index) => (
                <tr key={index}>
                  <td>{notification.audience}</td>
                  <td>{notification.message}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
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
