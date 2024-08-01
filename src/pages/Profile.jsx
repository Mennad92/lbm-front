import React, { useState, useEffect } from 'react';
import profileService from '../services/profileService';
import AddressForm from '../components/order/AddressForm';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const [isUpdated, setIsUpdated] = useState(true);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState(null);
  const [profileForm, setProfileForm] = useState({});

  
  function getUserId() {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);
        return decodedToken.user_id;
      } catch (error) {
        console.error("Erreur lors du décodage du token:", error);
        return null;
      }
    }
  }

  const handleChange = (event) => {
    setProfileForm({
      ...profileForm,
      [event.target.name]: event.target.value
    });
    setIsUpdated(false);
  };


  const handleSubmit = async () => {
    try {
      const data = await profileService.updateProfile(getUserId(), profileForm);
      setIsUpdated(true);
    } catch (err) {
      setError('Erreur lors de la mise à jour du profil');
    }
  };


  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if(!isFetched){
      const fetchProfile = async () => {
        try {
          const response = await profileService.getProfile();
          setProfileForm({
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            address: response.data.address,
            phone: response.data.phone,
            city: response.data.city,
            postal: response.data.postal
          });
        } catch (err) {
          setError('Erreur lors de la récupération du profil');
        }
      };
  
      fetchProfile();
      setIsFetched(true);
    }
  }, [isFetched]);

  if (error) return <div>{error}</div>;

  return (
    <>
      {isFetched ? (
        <div>
          <h2>Profil</h2>
          <AddressForm profileData={profileForm} handleChange={handleChange} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isUpdated}
            onClick={handleSubmit}
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
