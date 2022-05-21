const Router = require("express");
const router = Router();
const isAuthorize = require("../middleware/isAuthorize");
// const validate = require("../middleware/Validate");
const ProductSupplierController = require("../controllers/productSupplierController");
router.use(isAuthorize);

router.get(
  "/:id",
  ProductSupplierController.getById
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);
router.get(
  "/",
  ProductSupplierController.getAll
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.post(
  "/",
  // validate(productScheme.create),
  ProductSupplierController.createOne
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.delete(
  "/:id",
  ProductSupplierController.delById
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

router.patch(
  "/:id",
  //  validate(productScheme.edit),
  ProductSupplierController.editById
  /*
    #swagger.tags = ['Products']
    #swagger.security = [{ "bearerAuth": [] }]
  */
);

module.exports = router;
