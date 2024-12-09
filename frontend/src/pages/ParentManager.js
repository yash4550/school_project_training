import React, { useState } from "react";
import "../styles/ParentsManager.css";

const ParentsManager = () => {
  const [parents, setParents] = useState([]);
  const [formData, setFormData] = useState({
    school: "",
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childClass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParents([...parents, formData]);
    setFormData({
      school: "",
      parentName: "",
      email: "",
      phone: "",
      childName: "",
      childClass: "",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Parents Manager</h1>
        <button
          onClick={() => document.getElementById("parentModal").classList.remove("hidden")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Parent
        </button>
      </div>

      <table className="table-auto border w-full mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2">School</th>
            <th className="border px-4 py-2">Parent Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Child Name</th>
            <th className="border px-4 py-2">Class</th>
          </tr>
        </thead>
        <tbody>
          {parents.length > 0 ? (
            parents.map((parent, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{parent.school}</td>
                <td className="border px-4 py-2">{parent.parentName}</td>
                <td className="border px-4 py-2">{parent.email}</td>
                <td className="border px-4 py-2">{parent.phone}</td>
                <td className="border px-4 py-2">{parent.childName}</td>
                <td className="border px-4 py-2">{parent.childClass}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No parents added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      <div id="parentModal" className="hidden fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add Parent</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="school"
              placeholder="Connected to School"
              value={formData.school}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              maxLength="10"
              onChange={handleChange}
              required
              className="mb-4"
            />
            <input
              type="text"
              name="childName"
              placeholder="Child Name"
              value={formData.childName}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <input
              type="text"
              name="childClass"
              placeholder="Class"
              value={formData.childClass}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Submit
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("parentModal").classList.add("hidden")}
              className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentsManager;
