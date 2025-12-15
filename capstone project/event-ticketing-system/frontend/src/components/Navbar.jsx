import { Link } from "react-router-dom";

const Navbar = () => {
      return (
            <nav style={styles.nav}>
                  <h2 style={styles.logo}><img src="" alt="" /> PVEvents</h2>
                  <div>
                        <Link to="/" style={styles.link}>Home</Link>
                        <Link to="/login" style={styles.link}>Login</Link>
                        <Link to="/register" style={styles.link}>Register</Link>
                        <Link to="/admin" style={styles.link}>Admin</Link>

                  </div>
            </nav>
      );
};

const styles = {
      nav: {
            backgroundColor: "#111827",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
      },
      logo: {
            color: "#fff",
            margin: 0,
      },
      link: {
            color: "#fff",
            marginLeft: "20px",
            textDecoration: "none",
            fontWeight: "bold",
      },
};

export default Navbar;
