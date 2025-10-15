import "./Profile.css";

function Profile({ url, name, email, bio, skills }) {
  return (
    <div className="profile-horizontal">
      <img src={url} alt={name} className="profile-photo" />

      <div className="profile-info">
        <p className="email">{email}</p>
        <p className="bio">{bio}</p>

        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;