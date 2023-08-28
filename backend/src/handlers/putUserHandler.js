const { putUserController } = require('../controllers/putUserController')

const putUserHandler = async (req, res) => {
    try{
        const {email, password, first_name, last_name, phone, status} = req.body
     let user = await putUserController(email, password, first_name, last_name, phone, status);
     res.status(200).json({ user })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    putUserHandler
  };