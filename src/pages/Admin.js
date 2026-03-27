import React, { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState([]);

  // =========================
  // ✅ Fetch data
  // =========================
  const fetchData = async () => {
    try {
      const res = await fetch("https://imsp-backend.onrender.com/api/forms");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // =========================
  // ✅ Delete data
  // =========================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await fetch(`https://imsp-backend.onrender.com/api/forms/${id}`, {
        method: "DELETE",
      });

      fetchData(); // refresh data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.studentClass}</td>
              <td>{item.parentEmail}</td>
              <td>{item.parentMobile}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;