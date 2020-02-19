const router = require('express').Router();

const customerController = require('../controllers/personaController');

router.get('/', customerController.list);


module.exports = router;

