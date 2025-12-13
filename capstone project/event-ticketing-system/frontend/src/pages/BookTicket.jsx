import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BookTicket() {
      const { id } = useParams();
      const [form, setForm] = useState({
            name: "",
            email: "",
            tickets: 1
      });

      const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const res = await fetch("http://localhost:5000/api/bookings", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ ...form, eventId: id })
            });

            const data = await res.json();
            alert(data.message);
      };

      return (
            <div style={{ padding: "30px" }}>
                  <h2>Book Ticket</h2>

                  <form onSubmit={handleSubmit}>
                        <input name="name" placeholder="Your Name" onChange={handleChange} /><br />
                        <input name="email" placeholder="Your Email" onChange={handleChange} /><br />
                        <input name="tickets" type="number" min="1" onChange={handleChange} /><br />
                        <button>Confirm Booking</button>
                  </form>
            </div>
      );
}
