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
  const [profileForm, setProfileForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    postal: ''
  });

  const handleChange = (event) => {
    setProfileForm({
      ...profileForm,
      [event.target.name]: event.target.value
    });
  };

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
        setProfileForm({
          firstName: data.first_name || '',
          lastName: data.last_name || '',
          address: data.address || '',
          phone: data.phone || '',
          city: data.city || '',
          postal: data.postal || ''
        });
      } catch (err) {
        setError('Erreur lors de la récupération du profil');
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      {profileForm ? (
        <div>
          <h2>Profil</h2>
          <AddressForm profileData={profileForm} handleChange={handleChange} />
           
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </>
  );
};

export default Profile;
