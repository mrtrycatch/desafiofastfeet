const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Distribuidora FastFeet',
          Email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
