export function Project() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 align="center">Projects</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          background: "white",
          color: "black",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
          alt="fashion"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>
          <h2>Fashion E-Commerce Website</h2>

          <p>
            Developed a responsive fashion shopping website with
            product categories, attractive UI and modern design.
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
            }}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;