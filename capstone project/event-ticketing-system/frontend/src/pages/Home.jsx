// const Home = () => {
//       return (
//             <div style={styles.container}>
//                   <h1 style={styles.title}>🎉 Event Registration & Ticketing System</h1>
//                   <p style={styles.subtitle}>
//                         Discover events, register easily, and book tickets online
//                   </p>

//                   <div style={styles.card}>
//                         <h2>Upcoming Events</h2>
//                         <p>No events available right now</p>
//                         <button style={styles.button}>View Events</button>
//                   </div>
//             </div>
//       );
// };

// const styles = {
//       container: {
//             minHeight: "100vh",
//             background: "linear-gradient(135deg, #667eea, #764ba2)",
//             color: "#fff",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//             padding: "20px",
//       },
//       title: {
//             fontSize: "40px",
//             marginBottom: "10px",
//       },
//       subtitle: {
//             fontSize: "18px",
//             marginBottom: "30px",
//       },
//       card: {
//             background: "#fff",
//             color: "#333",
//             padding: "25px",
//             borderRadius: "10px",
//             width: "300px",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//       },
//       button: {
//             marginTop: "15px",
//             padding: "10px 20px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#667eea",
//             color: "#fff",
//             cursor: "pointer",
//       },
// };

// export default Home;


import { useEffect, useState } from "react";

export default function Home() {
      const [events, setEvents] = useState([]);

      useEffect(() => {
            fetch("http://localhost:5000/api/events")
                  .then(res => res.json())
                  .then(data => setEvents(data));
      }, []);

      return (
            <div style={{ padding: "20px" }}>
                  <h2>Available Events</h2>

                  {events.map(event => (
                        <div key={event._id} style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0" }}>
                              <h3>{event.title}</h3>
                              <p>{event.description}</p>
                              <p>Date: {event.date}</p>
                              <p>Location: {event.location}</p>
                              <p>Price: ₹{event.price}</p>
                              <p>Seats Left: {event.availableSeats}</p>

                              <a href={`/book/${event._id}`}>
                                    <button>Book Ticket</button>
                              </a>
                        </div>
                  ))}
            </div>
      );
}
