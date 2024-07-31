import React, { useState, useEffect } from 'react';
import profileService from '../services/profileService';
import AddressForm from '../components/order/AddressForm';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

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
    <>
      {profile ? (
        <div>
          <h2>Profil</h2>
          <AddressForm profileData={profile} />
           
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </>
  );
};

export default Profile;
