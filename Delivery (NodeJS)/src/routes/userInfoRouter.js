const Router = require("express");
const router = Router();
const isAuthorize = require("../middleware/isAuthorize");

const UserInfoController = require("../controllers/userInfoController");

router.post(
  "/login",
  UserInfoController.Login
  /*
    #swagger.tags = ['Users']
  */
);

router.post(
  "/register",
  //validate(userScheme.create),
  UserInfoController.Register
  /*
    #swagger.tags = ['Users']
  */
);

router.use(isAuthorize);

router.get(
  "/:id",
  UserInfoController.getById
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.get(
  "/",
  UserInfoController.getAll
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.post(
  "/",
  UserInfoController.createOne
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.delete(
  "/:id",
  UserInfoController.delById
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.patch(
  "/:id",
  UserInfoController.editById
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

module.exports = router;
