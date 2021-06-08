'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Cezar', phone: '+124433555' },

];

const findPhoneByName = (name) => {
 for (const user of phonebook) {
   if (name === user.name) return user.phone
 }
};


module.exports = { phonebook, findPhoneByName };
