const { User } = require("../db.js");

const getUsersController = async(req) => {
    try {
      const page = parseInt(req.query.page) || 1; // Página actual (por defecto 1)
      const limit = 10; // Cantidad de usuarios por página
      let users;
      if (req.query.id) {
        users = await User.findOne({ where: { id: req.query.id } });
      } else if (req.query.first_name) {
        users = await User.findOne({ where: { username: req.query.first_name } });
      } else if (req.query.email) {
      } else if (req.query.last_name) {
        users = await User.findOne({ where: { username: req.query.last_name } });
      } else if (req.query.email) {
        users = await User.findOne({ where: { email: req.query.email } });
      } else {
        users = await User.findAndCountAll({
          limit,
          offset: (page - 1) * limit,
        });
      }
      return users;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar los usuarios')
    }
  };

module.exports = {
    getUsersController
};
