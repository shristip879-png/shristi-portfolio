export default function About() {
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
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Coding Image */}
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
          alt="Coding"
          style={{
            width: "320px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        {/* About Content */}
        <div>
          <h1
            style={{
              color: "#222",
              marginBottom: "15px",
            }}
          >
            About Me
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Hello! I'm <strong>Shristi Pandey</strong>, a student of
            Bhausaheb Vartak Polytechnic. I am passionate about web
            development and enjoy creating modern, responsive websites.
            I continuously learn new technologies such as HTML, CSS,
            JavaScript, and React to improve my development skills.
          </p>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            My goal is to become a skilled software developer and build
            innovative digital solutions that make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}