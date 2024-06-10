import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  try {
    const token = Cookies.get('token');
    console.log(token); 
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return false;
  }
};
