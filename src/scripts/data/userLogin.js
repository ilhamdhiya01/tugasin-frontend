import Cookies from 'js-cookie';

const { atom } = require('recoil');

const userLogin = atom({
  key: 'authenticated',
  default: Cookies.get('loggedIn') === 'true' || false,
});

export {userLogin};
