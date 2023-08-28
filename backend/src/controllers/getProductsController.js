const { Product } = require("../db.js");

const getProductsController = async(req) => {
    try {
      const page = parseInt(req.query.page) || 1; // Página actual (por defecto 1)
      const limit = 10; // Cantidad de usuarios por página
      let products;
      if (req.query.id) {
        products = await Product.findOne({ where: { id: req.query.id } });
      } else if (req.query.first_name) {
        products = await Product.findOne({ where: { username: req.query.title } });
      } else if (req.query.email) {
      } else {
        products = await Product.findAndCountAll({
          limit,
          offset: (page - 1) * limit,
        });
      }
      return products;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar el/los producto/s')
    }
  };

module.exports = {
    getProductsController
};
