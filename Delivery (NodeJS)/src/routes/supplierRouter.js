const Router = require("express");
const router = Router();

const SupplierController = require("../controllers/SupplierController");

router.get("/:id", SupplierController.get);
router.get("/", SupplierController.getAll);

router.patch("/:id", SupplierController.update);
router.post("/", SupplierController.create);

router.delete("/:id", SupplierController.deleteUser);

module.exports = router;
