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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const schoolName = formData.school; // Get the school name from the form

    try {
      const response = await fetch(`http://localhost:5000/api/parents?school=${schoolName}`);
      if (response.ok) {
        const data = await response.json();
        setParents(data); // Update the table with fetched data
        alert("Parents data fetched successfully!");
      } else {
        alert("Failed to fetch parents data. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching parents data:", error);
      alert("An error occurred while fetching data.");
    }

    // Clear the form after submission
    setFormData({
      school: "",
      name: "",
      email: "",
      phone: "",
      Childname: "",
      className: "",
      number: "",
    });

    // Close the modal
    document.getElementById("parentModal").classList.add("hidden");
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
                
                <td className="border px-4 py-2">{parent.name}</td>
                <td className="border px-4 py-2">{parent.email}</td>
                <td className="border px-4 py-2">{parent.number}</td>
                <td className="border px-4 py-2">{parent.Childname}</td>
                <td className="border px-4 py-2">{parent.className}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No parents data available. Please submit a school name.
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
              placeholder="Enter School Name"
              value={formData.school}
              onChange={handleChange}
              required
              className="mb-4"
            />
            {/* Other fields are optional for now since the focus is on fetching */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Submit
            </button>
            <button
              type="button"
              onClick={() => console.log("parentModal").classList.add("hidden")}
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
