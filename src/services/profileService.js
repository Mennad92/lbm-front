import { client } from "./axiosClient";

function profileService() {

  const register = ({ email, password }) => {
    return client.post(
      "register",
      { email, password },
      { authorization: false }
    );
  }
  
  const login = ({ email, password }) => {
      return client.post(
        "login",
        { email, password },
        { authorization: false }
      );
    }

  const getProfile = () => {
    return client.get('profile',
      { authorization: true }
    );
  };

  const updateProfile = (profileData) => {
    return client.put('profile/',
      {
        first_name: profileData.firstName,
        last_name: profileData.lastName,
        address: profileData.address,
        phone: profileData.phone,
        city: profileData.city,
        postal: profileData.postal
      },
      { authorization: true }
    );
  };

  return {
    login,
    register,
    getProfile,
    updateProfile,
  };
}

export default profileService();
