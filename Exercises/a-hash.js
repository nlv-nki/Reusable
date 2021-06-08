'use strict';

const phonebook = {
 id1 : { name: 'Marcus Aurelius', phone: '+380445554433' },
 id2 : { name: 'Cezar', phone: '+124433555' }
};

// const findPhoneByName = (s) => {
//   for (let user in phonebook) {
//     if (phonebook[user] === s) return phonebook[user].phone
//   }
// };


const findPhoneByName = name => phonebook[name];
module.exports = { phonebook, findPhoneByName };
