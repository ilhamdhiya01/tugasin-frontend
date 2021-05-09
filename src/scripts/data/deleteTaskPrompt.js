const { atom } = require('recoil');

const deletePrompt = atom({
  key: 'authenticated',
  default: "",
});

export {deletePrompt};