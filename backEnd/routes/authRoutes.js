const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const loginAndRegisterLimiter = require("../middleware/loginAndRegisterLimiter.js");

router.route("/login").post(loginAndRegisterLimiter, authController.login);
router
  .route("/register")
  .post(loginAndRegisterLimiter, authController.register);
router.route("/refresh").get(authController.refresh);
router.route("/logout").post(authController.logout);

module.exports = router;
