const Router = require("express");

const router = Router();

const OrderController = require("../controllers/orderController");

router.get("/", OrderController.get);
router.patch("/update", OrderController.update);
router.post("/", OrderController.create);
router.get("/", OrderController.getAll);
router.delete("/:id", OrderController.deleteUser);

module.exports = router;
