import Profile from "../components/Profile";
import iconImg from "../assets/icon.png";

function AboutUs() {
  const team = [
    {
      url: iconImg,
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Software developer with a passion for building web applications using JavaScript and React.',
      skills: ['JavaScript', 'React', 'CSS'],
      isPremium: true
      },
      {
      url:"",
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      bio: 'Frontend developer specializing in HTML, CSS, and UX design.',
      skills: ['HTML', 'CSS', 'UX Design'],
      isPremium: false
      },
      {
      url: iconImg,
      name: 'Michael Brown',
      email: 'michaelbrown@example.com',
      bio: 'Full-stack developer focusing on Node.js and database management.',
      skills: ['Node.js', 'MongoDB', 'SQL'],
      isPremium: true
    }
  ];

  return (
    <div>
      <header
        style={{
          backgroundColor: "#000000ff",
          color: "white",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h1>About Us</h1>
      </header>

      <main
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          padding: "3rem 0",
        }}
      >
        {team.map((person, index) => (
          <Profile key={index} {...person} />
        ))}
      </main>
    </div>
  );
}

export default AboutUs;