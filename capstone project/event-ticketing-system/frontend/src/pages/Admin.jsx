// import { useState } from "react";

// export default function AdminDashboard() {
//       const [form, setForm] = useState({
//             title: "",
//             description: "",
//             date: "",
//             location: "",
//             price: "",
//             totalSeats: ""
//       });

//       const [image, setImage] = useState(null);
//       const [preview, setPreview] = useState(null);

//       const handleChange = (e) => {
//             setForm({ ...form, [e.target.name]: e.target.value });
//       };

//       const handleImageChange = (e) => {
//             const file = e.target.files[0];
//             setImage(file);
//             setPreview(URL.createObjectURL(file)); // 👈 preview
//       };

//       const handleSubmit = async (e) => {
//             e.preventDefault();

//             const formData = new FormData();
//             Object.keys(form).forEach(key => {
//                   formData.append(key, form[key]);
//             });
//             formData.append("image", image);

//             await fetch("http://localhost:5000/api/events", {
//                   method: "POST",
//                   body: formData
//             });

//             alert("🎉 Event Created with Image");
//       };

//       return (
//             <div style={styles.page}>
//                   <div style={styles.card}>
//                         <h2 style={styles.heading}>Create New Event</h2>

//                         <form onSubmit={handleSubmit} style={styles.form}>
//                               <input
//                                     style={styles.input}
//                                     name="title"
//                                     placeholder="Event Title"
//                                     onChange={handleChange}
//                               />

//                               <textarea
//                                     style={styles.textarea}
//                                     name="description"
//                                     placeholder="Event Description"
//                                     onChange={handleChange}
//                               />

//                               <input
//                                     style={styles.input}
//                                     name="date"
//                                     type="date"
//                                     onChange={handleChange}
//                               />

//                               <input
//                                     style={styles.input}
//                                     name="location"
//                                     placeholder="Location"
//                                     onChange={handleChange}
//                               />

//                               <input
//                                     style={styles.input}
//                                     name="price"
//                                     type="number"
//                                     placeholder="Price (₹)"
//                                     onChange={handleChange}
//                               />

//                               <input
//                                     style={styles.input}
//                                     name="totalSeats"
//                                     type="number"
//                                     placeholder="Total Seats"
//                                     onChange={handleChange}
//                               />

//                               {/* ✅ IMAGE UPLOAD */}
//                               <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={handleImageChange}
//                                     style={styles.input}
//                               />

//                               {/* 👀 IMAGE PREVIEW */}
//                               {preview && (
//                                     <img
//                                           src={preview}
//                                           alt="Preview"
//                                           style={{
//                                                 width: "100%",
//                                                 height: "150px",
//                                                 objectFit: "cover",
//                                                 borderRadius: "8px"
//                                           }}
//                                     />
//                               )}

//                               <button style={styles.button}>Create Event</button>
//                         </form>
//                   </div>
//             </div>
//       );
// }

// /* 🎨 Styles */
// const styles = {
//       page: {
//             minHeight: "100vh",
//             background: "linear-gradient(135deg, #667eea, #764ba2)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//       },
//       card: {
//             background: "#fff",
//             padding: "30px",
//             width: "360px",
//             borderRadius: "12px",
//             boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
//       },
//       heading: {
//             textAlign: "center",
//             marginBottom: "20px",
//             color: "#333"
//       },
//       form: {
//             display: "flex",
//             flexDirection: "column",
//             gap: "12px"
//       },
//       input: {
//             padding: "10px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             fontSize: "14px"
//       },
//       textarea: {
//             padding: "10px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             fontSize: "14px",
//             resize: "none"
//       },
//       button: {
//             marginTop: "10px",
//             padding: "12px",
//             borderRadius: "8px",
//             border: "none",
//             background: "#667eea",
//             color: "#fff",
//             fontSize: "16px",
//             cursor: "pointer"
//       }
// };



import { useEffect, useState } from "react";

export default function AdminDashboard() {
      const [form, setForm] = useState({
            title: "",
            description: "",
            date: "",
            location: "",
            price: "",
            totalSeats: "",
      });

      const [image, setImage] = useState(null);
      const [events, setEvents] = useState([]);

      // 🔁 Fetch events
      const fetchEvents = async () => {
            const res = await fetch("http://localhost:5000/api/events");
            const data = await res.json();
            setEvents(data);
      };

      useEffect(() => {
            fetchEvents();
      }, []);

      const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const formData = new FormData();
            Object.keys(form).forEach((key) => {
                  formData.append(key, form[key]);
            });
            formData.append("image", image);

            await fetch("http://localhost:5000/api/events", {
                  method: "POST",
                  body: formData,
            });

            alert("Event Created 🎉");
            fetchEvents(); // refresh list
      };

      const deleteEvent = async (id) => {
            if (!window.confirm("Delete this event?")) return;

            await fetch(`http://localhost:5000/api/events/${id}`, {
                  method: "DELETE",
            });

            fetchEvents();
      };

      return (
            <div style={styles.page}>
                  {/* CREATE EVENT */}
                  <div style={styles.card}>
                        <h2>Create New Event</h2>

                        <form onSubmit={handleSubmit} style={styles.form}>
                              <input name="title" placeholder="Event Title" onChange={handleChange} />
                              <textarea name="description" placeholder="Description" onChange={handleChange} />
                              <input type="date" name="date" onChange={handleChange} />
                              <input name="location" placeholder="Location" onChange={handleChange} />
                              <input type="number" name="price" placeholder="Price" onChange={handleChange} />
                              <input type="number" name="totalSeats" placeholder="Total Seats" onChange={handleChange} />

                              <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                              <button>Create Event</button>
                        </form>
                  </div>

                  {/* UPCOMING EVENTS */}
                  <div style={styles.list}>
                        <h2>Upcoming Events</h2>

                        {events.map((event) => (
                              <div key={event._id} style={styles.eventCard}>
                                    <img
                                          src={`http://localhost:5000/uploads/${event.image}`}
                                          alt=""
                                          style={styles.img}
                                    />
                                    <div>
                                          <h3>{event.title}</h3>
                                          <p>{event.date}</p>
                                          <p>₹{event.price}</p>
                                    </div>

                                    <button
                                          style={styles.delete}
                                          onClick={() => deleteEvent(event._id)}
                                    >
                                          ❌ Delete
                                    </button>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

/* 🎨 STYLES */
const styles = {
      page: {
            padding: "40px",
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            minHeight: "100vh",
      },
      card: {
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            maxWidth: "400px",
            margin: "auto",
      },
      form: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
      },
      list: {
            marginTop: "50px",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
      },
      eventCard: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #5124e4ff",
            borderRadius: "10px",
      },
      img: {
            width: "80px",
            height: "60px",
            borderRadius: "6px",
            objectFit: "cover",
      },
      delete: {
            background: "red",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
      },
};
