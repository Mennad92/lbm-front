function profileService() {
  const API_URL = 'http://localhost:8000/api/profile/';

  const getProfile = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return Promise.reject(new Error('Token d\'authentification manquant'));
    }

    return fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((err) => Promise.reject(err));
      }
      return res.json();
    });
  };

  const updateProfile = (profileData) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return Promise.reject(new Error('Token d\'authentification manquant'));
    }

    return fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((err) => Promise.reject(err));
      }
      return res.json();
    });
  };

  return {
    getProfile,
    updateProfile,
  };
}

export default profileService();
