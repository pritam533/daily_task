// const Login = () => {
//       return (
//             <div style={styles.container}>
//                   <form style={styles.form}>
//                         <h2>Login</h2>

//                         <input
//                               type="email"
//                               placeholder="Email"
//                               style={styles.input}
//                         />

//                         <input
//                               type="password"
//                               placeholder="Password"
//                               style={styles.input}
//                         />

//                         <button style={styles.button}>Login</button>
//                   </form>
//             </div>
//       );
// };

// const styles = {
//       container: {
//             minHeight: "100vh",
//             background: "linear-gradient(135deg, #43cea2, #185a9d)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//       },
//       form: {
//             background: "#fff",
//             padding: "30px",
//             borderRadius: "10px",
//             width: "300px",
//             boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
//             textAlign: "center",
//       },
//       input: {
//             width: "100%",
//             padding: "10px",
//             margin: "10px 0",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//       },
//       button: {
//             width: "100%",
//             padding: "10px",
//             background: "#185a9d",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//       },
// };


// export default Login;




import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
            e.preventDefault();

            const res = await fetch("http://localhost:5000/api/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            localStorage.setItem("token", data.token);

            const redirect = localStorage.getItem("redirectAfterLogin");
            navigate(redirect || "/");
            localStorage.removeItem("redirectAfterLogin");
      };

      return (
            <div style={styles.page}>
                  <form onSubmit={handleSubmit} style={styles.card}>
                        <h2>Login</h2>
                        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <button>Login</button>
                  </form>
            </div>
      );
}

/* 🎨 CSS */
const styles = {
      page: {
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg,#667eea,#764ba2)"
      },
      card: {
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
      }
};
