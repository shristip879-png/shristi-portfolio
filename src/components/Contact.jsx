export function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Contact Image */}
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
          alt="Contact"
          style={{
            width: "300px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        {/* Contact Details */}
        <div>
          <h1 style={{ color: "#222" }}>Contact Me</h1>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Feel free to contact me for projects, collaboration,
            or any queries related to web development.
          </p>

          <h3 style={{ color: "#333" }}>
            📧 shristip879@gmail.com
          </h3>

          <h3 style={{ color: "#333" }}>
            🏫 Bhausaheb Vartak Polytechnic
          </h3>

          <h3 style={{ color: "#333" }}>
            📍 Vasai(West), Maharashtra
          </h3>

          <a
            href="mailto:shristip879@gmail.com"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 25px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;