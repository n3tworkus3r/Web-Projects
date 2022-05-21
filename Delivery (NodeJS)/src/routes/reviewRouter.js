const Router = require("express");
const router = Router();

const ReviewController = require("../controllers/reviewController");

router.get("/:id", ReviewController.get);
router.get("/", ReviewController.getAll);

router.patch("/:id", ReviewController.update);
router.post("/", ReviewController.create);

router.delete("/:id", ReviewController.deleteUser);

module.exports = router;
