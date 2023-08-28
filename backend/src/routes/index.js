const { Router } = require('express');
const router = Router();

const { getUsersHandler } = require('../handlers/getUsersHandler');
const { postUserHandler } = require('../handlers/postUserHandler');
const { putUserHandler } = require('../handlers/putUserHandler');
const { getProductsHandler } = require('../handlers/getProductsHandler')

router.get('/users', getUsersHandler);
router.get('/products', getProductsHandler);

router.post('/users', postUserHandler);

router.put('/users', putUserHandler);
module.exports = router;