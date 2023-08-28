const postUserController = require("../controllers/postUserController");

const postUserHandler = async (req, res) => {
  try {
    const { email, password, rol, provider, first_name, last_name, phone } =
      req.body;
    const userPosted = await postUserController(
      email,
      password,
      rol,
      provider,
      first_name,
      last_name,
      phone
    );
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
};
