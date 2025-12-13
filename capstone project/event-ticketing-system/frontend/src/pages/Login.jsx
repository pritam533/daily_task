const Login = () => {
      return (
            <div style={styles.container}>
                  <form style={styles.form}>
                        <h2>Login</h2>

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

                        <button style={styles.button}>Login</button>
                  </form>
            </div>
      );
};

const styles = {
      container: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #43cea2, #185a9d)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
      },
      form: {
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            width: "300px",
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
            background: "#185a9d",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
      },
};

export default Login;
