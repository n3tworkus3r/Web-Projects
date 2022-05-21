const Router = require("express");
const router = Router();
const isAuthorize = require("../middleware/isAuthorize");
// const validate = require("../middleware/Validate");
const ProductController = require("../controllers/productController");
router.use(isAuthorize);

router.get(
  "/:id",
  ProductController.getById
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);
router.get(
  "/",
  ProductController.getAll
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.post(
  "/",
  // validate(productScheme.create),
  ProductController.createOne
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.delete(
  "/:id",
  ProductController.delById
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.patch(
  "/:id",
  //  validate(productScheme.edit),
  ProductController.editById
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

module.exports = router;
