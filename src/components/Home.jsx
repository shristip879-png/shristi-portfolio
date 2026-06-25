export function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <img
        src="C:\Users\Shristi\Downloads\profile.jpeg"
        alt="profile"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: "5px solid white",
        }}
      />
      <h1 style={{ fontSize: "55px" }}>Shristi Pandey</h1>

      <h2>Electronics Engineering Student</h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "auto",
          fontSize: "18px",
        }}
      >
        Passionate about Web Development, React Applications and
        creating beautiful digital experiences.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          borderRadius: "30px",
          border: "none",
          background: "white",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        Explore My Portfolio
      </button>
    </div>
  );
}

export default Home;
