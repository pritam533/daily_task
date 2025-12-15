// import { useParams } from "react-router-dom";
// import { useState } from "react";

// export default function BookTicket() {
//       const { id } = useParams();
//       const [form, setForm] = useState({
//             name: "",
//             email: "",
//             tickets: 1
//       });

//       const handleChange = (e) => {
//             setForm({ ...form, [e.target.name]: e.target.value });
//       };

//       const handleSubmit = async (e) => {
//             e.preventDefault();

//             const res = await fetch("http://localhost:5000/api/bookings", {
//                   method: "POST",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify({ ...form, eventId: id })
//             });

//             const data = await res.json();
//             alert(data.message);
//       };

//       return (
//             <div style={{ padding: "30px" }}>
//                   <h2>Book Ticket</h2>

//                   <form onSubmit={handleSubmit}>
//                         <input name="name" placeholder="Your Name" onChange={handleChange} /><br />
//                         <input name="email" placeholder="Your Email" onChange={handleChange} /><br />
//                         <input name="tickets" type="number" min="1" onChange={handleChange} /><br />
//                         <button>Confirm Booking</button>
//                   </form>
//             </div>
//       );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookTicket() {
      const { id } = useParams();
      const [event, setEvent] = useState(null);
      const [email, setEmail] = useState("");
      const [tickets, setTickets] = useState(1);

      useEffect(() => {
            fetch("http://localhost:5000/api/events")
                  .then(res => res.json())
                  .then(data => {
                        const found = data.find(e => e._id === id);
                        setEvent(found);
                  });
      }, [id]);

      if (!event) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

      const totalAmount = tickets * event.price;

      const handleBooking = async () => {
            if (!email) {
                  alert("Please enter email");
                  return;
            }

            const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, tickets })
            });

            const data = await res.json();
            alert(data.message);
      };

      return (
            <div style={styles.page}>
                  <div style={styles.card}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>

                        <input
                              style={styles.input}
                              type="email"
                              placeholder="Enter your email"
                              onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                              style={styles.input}
                              type="number"
                              min="1"
                              max={event.availableSeats}
                              value={tickets}
                              onChange={(e) => setTickets(Number(e.target.value))}
                        />

                        <h3>Total Amount: ₹{totalAmount}</h3>

                        <button style={styles.button} onClick={handleBooking}>
                              Confirm Booking 🎟️
                        </button>
                  </div>
            </div>
      );
}

/* 🎨 Styles */
const styles = {
      page: {
            minHeight: "100vh",
            background: "#f4f6fb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
      },
      card: {
            background: "#fff",
            padding: "30px",
            width: "360px",
            borderRadius: "12px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
      },
      input: {
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc"
      },
      button: {
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#667eea",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
      }
};
