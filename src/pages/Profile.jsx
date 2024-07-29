import React, { useState, useEffect } from 'react';
import profileService from '../services/profileService';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } catch (err) {
        setError('Erreur lors de la récupération du profil');
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await profileService.updateProfile(updatedProfile);
      setProfile({ ...profile, ...updatedProfile });
      setIsEditing(false);
    } catch (err) {
      setError('Erreur lors de la mise à jour du profil');
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      {profile ? (
        <div>
          <h2>Profil</h2>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={updatedProfile.name || profile.name}
                onChange={(e) => setUpdatedProfile({ ...updatedProfile, name: e.target.value })}
              />
              <input
                type="email"
                value={updatedProfile.email || profile.email}
                onChange={(e) => setUpdatedProfile({ ...updatedProfile, email: e.target.value })}
              />
              <button onClick={handleUpdate}>Enregistrer</button>
            </div>
          ) : (
            <div>
              <p>Nom: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <button onClick={() => setIsEditing(true)}>Modifier</button>
            </div>
          )}
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
};

export default Profile;
