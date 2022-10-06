const express = require('express');
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");


const router = express.Router();
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.patch('/updateMyPassword', authController.protect, authController.updatePassword);

router.route('/getAllUsers').get(authController.protect, userController.getUsers);
router.route('/forgetPassword').post(authController.forgetPassword);
router.route('/resetPassword').patch(authController.resetPassword);
router.route('/deleteUser').delete(userController.deleteUser);



router
  .route('/:id')
  .get(userController.getUser)
  .post(userController.postUser)
  .patch(userController.updateUser);
  // .delete(userController.deleteUser);

module.exports = router;