import React, { useState, useEffect } from 'react';
import profileService from '../services/profileService';
import AddressForm from '../components/order/AddressForm';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfile();
        setProfile(data);
      } catch (err) {
        console.log(err);
        setError('Erreur lors de la récupération du profil');
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className='m-5'>
      {profile ? (
        <div>
          <h2>Profil</h2>
          <AddressForm profileData={profile} />
           
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
};

export default Profile;
