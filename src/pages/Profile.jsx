import React, { useState, useEffect } from 'react';
import profileService from '../services/profileService';
import AddressForm from '../components/order/AddressForm';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Profile = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const [isUpdated, setIsUpdated] = useState(true);
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
    setIsUpdated(false);
  };

  async function handleSubmit() {
    const data = await profileService.updateProfile(profileForm);
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isUpdated}
            onClick={handleSubmit()}
          >
            Mettre à jour le profil
          </Button>
           
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </>
  );
};

export default Profile;
