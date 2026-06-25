export function Skills() {
  const skills = [
    {
      name: "HTML",
      img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      name: "CSS",
      img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      name: "Java",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      name: "JavaScript",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "React",
      img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      name: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        My Skills
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              background: "white",
              color: "#2563eb",
              width: "180px",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              transition: "0.3s",
            }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              style={{
                width: "70px",
                height: "70px",
                marginBottom: "15px",
              }}
            />

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;