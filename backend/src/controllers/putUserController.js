const { User } = require("../db")
const bcrypt = require('bcryptjs');

const putUserController = async(email, password, first_name, last_name, phone, status) => {
    const user = await User.findOne({ where: { id } })
    const saltRounds = 10;
    if (!user) {
      throw new Error('No se encontró el usuario');
    }
    if(first_name) {
      user.name = name;
    }
    if(last_name) {
      user.name = name;
    }
    if(email){
      user.email = email;
    }
    if(phone){
      user.phone = phone;
    }
    if(password){
      user.password = await bcrypt.hash(password, saltRounds);
    }
    if(status){
      user.status = status;
    }
    await user.save();

    return user;
  };


module.exports = putUserController