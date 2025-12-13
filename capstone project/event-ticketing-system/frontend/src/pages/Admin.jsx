import { useState } from "react";

export default function AdminDashboard() {
      const [form, setForm] = useState({
            title: "",
            description: "",
            date: "",
            location: "",
            price: "",
            totalSeats: ""
      });

      const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            await fetch("http://localhost:5000/api/events", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(form),
            });

            alert("🎉 Event Created Successfully!");
      };

      return (
            <div style={styles.page}>
                  <div style={styles.card}>
                        <h2 style={styles.heading}>Create New Event</h2>

                        <form onSubmit={handleSubmit} style={styles.form}>
                              <input style={styles.input} name="title" placeholder="Event Title" onChange={handleChange} />
                              <textarea style={styles.textarea} name="description" placeholder="Event Description" onChange={handleChange} />
                              <input style={styles.input} name="date" type="date" onChange={handleChange} />
                              <input style={styles.input} name="location" placeholder="Location" onChange={handleChange} />
                              <input style={styles.input} name="price" type="number" placeholder="Price (₹)" onChange={handleChange} />
                              <input style={styles.input} name="totalSeats" type="number" placeholder="Total Seats" onChange={handleChange} />

                              <button style={styles.button}>Create Event</button>
                        </form>
                  </div>
            </div>
      );
}

/* 🎨 Styles */
const styles = {
      page: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
      },
      card: {
            background: "#fff",
            padding: "30px",
            width: "350px",
            borderRadius: "12px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
      },
      heading: {
            textAlign: "center",
            marginBottom: "20px",
            color: "#333"
      },
      form: {
            display: "flex",
            flexDirection: "column",
            gap: "12px"
      },
      input: {
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
      },
      textarea: {
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            resize: "none"
      },
      button: {
            marginTop: "10px",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#667eea",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
      }
};
