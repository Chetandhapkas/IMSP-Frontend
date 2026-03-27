import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Admin() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});
  const navigate = useNavigate();

  // =========================
  // ✅ Check Login + Fetch Data
  // =========================
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      navigate("/admin-login");
    } else {
      fetchData();
    }
  }, [navigate]);

  // =========================
  // ✅ Fetch Data
  // =========================
  const fetchData = async () => {
    try {
      const res = await fetch("https://imsp-backend.onrender.com/api/forms");

      if (!res.ok) throw new Error("Failed to fetch");

      const result = await res.json();
      setData(result);
    } catch (error) {
      alert("Error loading data ❌");
      console.log("Error:", error);
    }
  };

  // =========================
  // ✅ Delete Data
  // =========================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;

    try {
      await fetch(`https://imsp-backend.onrender.com/api/forms/${id}`, {
        method: "DELETE",
      });

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // ✅ Toggle Tick
  // =========================
  const toggleSelect = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // =========================
  // ✅ Download Selected PDF
  // =========================
  const downloadPDF = () => {
    const doc = new jsPDF();

    const tableColumn = ["Name", "Class", "Email", "Mobile"];
    const tableRows = [];

    const selectedData = data.filter((item) => selected[item._id]);

    if (selectedData.length === 0) {
      alert("Please select at least one user ❌");
      return;
    }

    selectedData.forEach((item) => {
      tableRows.push([
        item.name,
        item.studentClass,
        item.parentEmail,
        item.parentMobile,
      ]);
    });

    doc.text("Selected Student Data", 14, 15);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("selected_students.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      {/* Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={downloadPDF} style={{ marginRight: "10px" }}>
          Download Selected PDF
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("isAdmin");
            navigate("/admin-login");
          }}
        >
          Logout
        </button>
      </div>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Class</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr
                key={item._id}
                style={{
                  backgroundColor: selected[item._id]
                    ? "#c8f7c5"
                    : "white",
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selected[item._id] || false}
                    onChange={() => toggleSelect(item._id)}
                  />
                </td>

                <td>{item.name}</td>
                <td>{item.studentClass}</td>
                <td>{item.parentEmail}</td>
                <td>{item.parentMobile}</td>

                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;