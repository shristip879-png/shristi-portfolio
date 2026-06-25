 import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <Link style={btn} to="/">Home</Link>
      <Link style={btn} to="/about">About</Link>
      <Link style={btn} to="/skills">Skills</Link>
      <Link style={btn} to="/project">Project</Link>
      <Link style={btn} to="/contact">Contact</Link>
    </nav>
  );
}

const btn = {
  background: "#4f46e5",
  color: "white",
  textDecoration: "none",
  padding: "12px 22px",
  borderRadius: "30px",
  fontWeight: "bold",
};

export default Navbar;