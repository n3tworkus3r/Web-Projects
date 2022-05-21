const Router = require("express");
const router = Router();
const isAuthorize = require("../middleware/isAuthorize");

const UserController = require("../controllers/userController");

router.post(
  "/login",
  UserController.Login
  /*
    #swagger.tags = ['Users']
  */
);

router.post(
  "/register",
  //validate(userScheme.create),
  UserController.Register
  /*
    #swagger.tags = ['Users']
  */
);

router.use(isAuthorize);

router.get(
  "/:id",
  UserController.getById
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.get(
  "/",
  UserController.getAll
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.post(
  "/",
  UserController.createOne
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.delete(
  "/:id",
  UserController.delById
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.patch(
  "/:id",
  UserController.editById
  /*
    #swagger.tags = ['Users']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

module.exports = router;
