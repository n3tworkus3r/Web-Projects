const Router = require("express");

const router = Router();

const orderProductController = require("../controllers/orderProductController");

router.get("/", orderProductController.get);
router.patch("/update", orderProductController.update);
router.post("/", orderProductController.create);
router.get("/", orderProductController.getAll);
router.delete("/:id", orderProductController.deleteUser);

module.exports = router;
