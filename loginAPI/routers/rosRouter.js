const express = require('express');
const authController = require("./../controllers/authController");
const rossController = require("./../controllers/rosController");


const router = express.Router();

router.post('/rosApi',
    authController.protect,
    rossController.listenCommand);
router.post('/joystick',
    // authController.protect,
    rossController.joystick);


module.exports = router;