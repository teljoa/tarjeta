import { useState } from "react";
import "./Profile.css";
import defaultImg from "../assets/defaults.jpg";

function Profile({ url, name, email, bio, skills, isPremium }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const profileImg = url ? url : defaultImg;
  const hasSkills = skills && skills.length > 0;
  const hasBio = bio && bio.trim() !== "";

  return (
    <div
      className={`profile-horizontal 
        ${isPremium ? "premium" : ""} 
        ${isFavorite ? "favorite" : ""}`}
    >
      <img src={profileImg} alt={name} className="profile-photo" />

      <div className="profile-info">
        <h2>{name}</h2>
        <p className="email">{email}</p>

        <p className="bio">
          {hasBio ? bio : "Este usuario no ha añadido una bio aún."}
        </p>

        {hasSkills && (
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        )}

        <button className="fav-btn" onClick={handleFavoriteToggle}>
          {isFavorite ? "Favorito" : " Marcar favorito"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
