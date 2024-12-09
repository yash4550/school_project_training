import React, { useState } from "react";
import "../styles/SchoolManager.css";

const SchoolManager = () => {
  const [schools, setSchools] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    number: "",
    contactPerson: "",
    email: "",
    password: "",
    countryCode: "+1", // Default country code
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // To control modal visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setSchools(
        schools.map((school) =>
          school.id === formData.id ? { ...formData } : school
        )
      );
      setIsEditing(false);
    } else {
      setSchools([...schools, { ...formData, id: Date.now().toString() }]);
    }
    setFormData({
      id: "",
      name: "",
      address: "",
      number: "",
      contactPerson: "",
      email: "",
      password: "", // Reset password field
      countryCode: "+1", // Reset country code
    });
    setIsFormVisible(false); // Hide the form (modal) after submission
  };

  const handleDelete = (id) => {
    setSchools(schools.filter((school) => school.id !== id));
  };

  const handleEdit = (school) => {
    setFormData(school);
    setIsEditing(true);
    setIsFormVisible(true); // Keep the form visible when editing
  };

  const filteredSchools = schools.filter((school) =>
    Object.values(school)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">School Manager</h1>
    <button
      onClick={() => setIsFormVisible(true)}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add School
    </button>
  </div>

  {/* Modal for Add School Form */}
  {isFormVisible && (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? "Edit School" : "Add School"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="School Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
              maxLength="10"
              pattern="[0-9]{10}"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person Name"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="School Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          >
            {isEditing ? "Update School" : "Add School"}
          </button>
          <button
            type="button"
            onClick={() => setIsFormVisible(false)}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded ml-2"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  )}

  {/* Table */}
  <div className="overflow-x-auto mt-6">
    <table className="table-auto w-full border border-gray-300 mx-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Address</th>
          <th className="border px-4 py-2">Phone</th>
          <th className="border px-4 py-2">Contact Person</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school) => (
            <tr key={school.id}>
              <td className="border px-4 py-2">{school.name}</td>
              <td className="border px-4 py-2">{school.address}</td>
              <td className="border px-4 py-2">{school.number}</td>
              <td className="border px-4 py-2">{school.contactPerson}</td>
              <td className="border px-4 py-2">{school.email}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(school)}
                  className="bg-yellow-300 text-black px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(school.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center py-4">
              No schools found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
  )
};

export default SchoolManager;
