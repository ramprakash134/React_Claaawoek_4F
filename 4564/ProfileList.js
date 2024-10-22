import React from 'react';
import ProfileCard from "./ProfileCard";

function ProfileList({ profiles }) {
  return (
    <div>
      <h2>Profiles Created: {profiles.length}</h2>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index}>
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;