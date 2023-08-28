const { User } = require("../db")
const bcrypt = require('bcryptjs');

const postUserController = async(email, password, rol, provider, first_name, last_name, phone) => {
    const saltRounds = 10;
    if (password) password = await bcrypt.hash(password, saltRounds);
    if(!provider) provider = 'credentials'

    // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
    let user = await User.findOne({ where: { email, provider } });

    if (!user) {
      // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
      user = await User.create({
        email,
        password,
        rol,
        provider,
        first_name, 
        last_name,
        phone
      });
    }
    return user;
  };


module.exports = postUserController