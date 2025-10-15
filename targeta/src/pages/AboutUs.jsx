import Profile from "../components/Profile";
import incontImg from "../assets/icon.png"

function AboutUs() {
  const team = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      bio: "Sofware developer with a passion for building web applications using JavaScript and React.",
      url: incontImg,
      skills: ["JavaScript","React","CSS","Node.js"],
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      bio: "Sofware developer with a passion for building web applications using JavaScript and React.",
      url: incontImg,
      skills: ["JavaScript","React","CSS","Node.js"],
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      bio: "Sofware developer with a passion for building web applications using JavaScript and React.",
      url: incontImg,
      skills: ["JavaScript","React","CSS","Node.js"],
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