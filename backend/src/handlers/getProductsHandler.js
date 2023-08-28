const { getProductsController } = require('../controllers/getProductsController');

const getProductsHandler = async (req, res) => {
    try{

     let products = await getUsersController(req);
     res.status(200).json({ products })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getProductsHandler
  };