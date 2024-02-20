const express = require("express");
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/adminlogin', userController.adminlogin);
router.post('/adminpanel',userController.isAdminLoggedIn, userController.adminpanel);
router.post('/refferal', userController.isLoggedIn, userController.refferal);
router.post('/withdraw', userController.isLoggedIn, userController.withdraw);
// router.post('/profile', userController.isLoggedIn, userController.profile);
router.post('/updateprofile',userController.isLoggedIn, userController.updateprofile);
router.post('/changepass',userController.isLoggedIn, userController.changepass);
router.post('/forgetpass', userController.forgetpass);


router.post('/updateStatus',userController.isAdminLoggedIn, userController.updateStatus);
router.post('/updatedata',userController.isAdminLoggedIn, userController.updatedata);
router.post('/handledata',userController.isAdminLoggedIn, userController.handledata);



module.exports = router;

