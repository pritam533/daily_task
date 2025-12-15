
// import { useEffect, useState } from "react";

// export default function Home() {
//       const [events, setEvents] = useState([]);

//       useEffect(() => {
//             fetch("http://localhost:5000/api/events")
//                   .then(res => res.json())
//                   .then(data => setEvents(data));
//       }, []);

//       return (
//             <div style={styles.page}>
//                   <h1 style={styles.heading}> Upcoming Events</h1>
//                   <img src="C:\Users\pritam\Downloads\Gemini_Generated_Image_cj1ai8cj1ai8cj1a.png" alt="Events" style={{width: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "12px", marginBottom: "30px"}}/>
//                   <div style={styles.grid}>
//                         {events.map(event => (
//                               <div key={event._id} style={styles.card}>
//                                     <img
//                                           src={`http://localhost:5000/uploads/${event.image}`}
//                                           alt={event.title}
//                                           style={styles.image}
//                                     />

//                                     <div style={styles.content}>
//                                           <h3>{event.title}</h3>
//                                           <p>{event.description}</p>
//                                           <p><b>📍</b> {event.location}</p>
//                                           <p><b>📅</b> {event.date}</p>
//                                           <p><b>₹</b> {event.price}</p>
//                                           <p><b>Seats:</b> {event.availableSeats}</p>

//                                           <input
//                                                 type="email"
//                                                 placeholder="Enter your email"
//                                                 style={styles.input}
//                                                 onChange={(e) => event.email = e.target.value}
//                                           />

//                                           <button
//                                                 style={styles.button}
//                                                 onClick={() => {
//                                                       fetch(`http://localhost:5000/api/bookings/${event._id}`, {
//                                                             method: "POST",
//                                                             headers: { "Content-Type": "application/json" },
//                                                             body: JSON.stringify({ email: event.email })
//                                                       })
//                                                             .then(res => res.json())
//                                                             .then(data => alert(data.message));
//                                                 }}
//                                           >
//                                                 🎟️ Book Ticket
//                                           </button>


//                                     </div>
//                               </div>
//                         ))}
//                   </div>
//             </div>
//       );
// }

// /* 🎨 Styles */
// const styles = {
//       page: {
//             padding: "40px",
//             background: "#f4f6fb",
//             minHeight: "100vh"
//       },
//       heading: {
//             textAlign: "center",
//             marginBottom: "30px"
//       },
//       grid: {
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "25px"
//       },
//       card: {
//             background: "#fff",
//             borderRadius: "12px",
//             overflow: "hidden",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//             transition: "0.3s"
//       },
//       image: {
//             width: "100%",
//             height: "180px",
//             objectFit: "cover"
//       },
//       content: {
//             padding: "15px"
//       },
//       button: {
//             marginTop: "10px",
//             width: "100%",
//             padding: "10px",
//             border: "none",
//             borderRadius: "8px",
//             background: "#667eea",
//             color: "#fff",
//             cursor: "pointer"
//       },
//       input: {
//             padding: "8px",
//             width: "100%",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//             marginBottom: "8px"
//       }

// };





import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
      const [events, setEvents] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
            fetch("http://localhost:5000/api/events")
                  .then(res => res.json())
                  .then(data => setEvents(data));
      }, []);

      const handleClick = (id) => {
            const token = localStorage.getItem("token");

            if (!token) {
                  localStorage.setItem("redirectAfterLogin", `/book/${id}`);
                  navigate("/login");
            } else {
                  navigate(`/book/${id}`);
            }
      };

      return (
            <div style={styles.page}>
                  <h1 style={styles.title}> Upcoming Events</h1>

                  <div style={styles.grid}>
                        {events.map(event => (
                              <div
                                    key={event._id}
                                    style={styles.card}
                                    onClick={() => handleClick(event._id)}
                              >
                                    <img
                                          src={`http://localhost:5000/uploads/${event.image}`}
                                          alt=""
                                          style={styles.image}
                                    />

                                    <div style={styles.body}>
                                          <h3>{event.title}</h3>
                                          <p>{event.description}</p>
                                          <p>📍 {event.location}</p>
                                          <p>💰 ₹{event.price}</p>
                                          <button style={styles.btn}>Book Now</button>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

/* 🎨 CSS-IN-JS */
const styles = {
      page: {
            padding: "40px",
            background: "#f4f6ff",
            minHeight: "100vh"
      },
      title: {
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "32px",
            color: "#333"
      },
      grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px"
      },
      card: {
            background: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            transition: "transform 0.3s",
      },
      image: {
            width: "100%",
            height: "180px",
            objectFit: "cover"
      },
      body: {
            padding: "15px"
      },
      btn: {
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#667eea",
            color: "#fff",
            cursor: "pointer"
      }
};
