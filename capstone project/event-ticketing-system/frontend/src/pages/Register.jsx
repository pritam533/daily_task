const Register = () => {
      return (
            <div style={styles.container}>
                  <form style={styles.form}>
                        <h2>Create Account</h2>

                        <input
                              type="text"
                              placeholder="Full Name"
                              style={styles.input}
                        />

                        <input
                              type="email"
                              placeholder="Email"
                              style={styles.input}
                        />

                        <input
                              type="password"
                              placeholder="Password"
                              style={styles.input}
                        />

                        <button style={styles.button}>Register</button>
                  </form>
            </div>
      );
};

const styles = {
      container: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
      },
      form: {
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            width: "320px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            textAlign: "center",
      },
      input: {
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
      },
      button: {
            width: "100%",
            padding: "10px",
            background: "#ff758c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
      },
};

export default Register;


// const handleSubmit = async (e) => {
//       e.preventDefault();

//       const res = await fetch("http://localhost:5000/api/auth/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, email, password })
//       });

//       const data = await res.json();
//       alert(data.message);
// };
