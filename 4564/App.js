import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import ProfileList from './ProfileList';

function App() {
  const [profiles, setProfiles] = useState([]);

  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm setProfiles={setProfiles} />
      <ProfileList profiles={profiles} />
    </div>
  );
}

export default App;