const express = require('express');
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");


const router = express.Router();
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch('/updateMyPassword',authController.protect, authController.updatePassword);

 router.route('/users').get(userController.getUsers);
router
  .route('/:id')
  .get(userController.getUser)
  .post(userController.postUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
  
module.exports = router;