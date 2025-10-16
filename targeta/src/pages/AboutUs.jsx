import Profile from "../components/Profile";
import iconImg from "../assets/icon.png";

function AboutUs() {
  const team = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      bio: "Software developer with a passion for building web applications using JavaScript and React.",
      url: iconImg,
      skills: ["JavaScript", "React", "CSS", "Node.js"],
      isPremium: true,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      bio: "",
      url: "",
      skills: [], 
      isPremium: false,
    },
    {
      name: "Carlos Díaz",
      email: "carlos.diaz@example.com",
      bio: "Backend developer especializado en Node.js y MongoDB.",
      url: iconImg,
      skills: ["Node.js", "Express", "MongoDB"],
      isPremium: true,
    },
  ];


  return (
    <div>
      <header style={{
        backgroundColor: "#000000ff",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}>
        <h1>About Us</h1>
      </header>

      <main style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
        padding: "2rem",
      }}>
        {team.map((person, index) => (
          <Profile key={index} {...person} />
        ))}
      </main>
    </div>
  );
}

export default AboutUs;