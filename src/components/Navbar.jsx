 export function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <a href="#home" style={btn}>Home</a>
      <a href="#about" style={btn}>About</a>
      <a href="#skills" style={btn}>Skills</a>
      <a href="#project" style={btn}>Project</a>
      <a href="#contact" style={btn}>Contact</a>
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
