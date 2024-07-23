function profileService() {
    const getProfile = () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        return Promise.reject(new Error('Token d\'authentification manquant'));
      }
  
      return fetch("http://localhost:8000/profile", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((err) => Promise.reject(err));
        }
        return res.json();
      });
    };
  
    return {
      getProfile,
    };
  }
  
  export default profileService();
  