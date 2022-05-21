const router = require("../loader/express");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


const userRouter = require("./userRouter");
//const userInfoRouter = require("./userInfoRouter");
//const reviewRouter = require("./reviewRouter");
const productRouter = require("./productRouter");
//const productSupplierRouter = require("./productsSupplierRouter");
//const suppliersRouter = require("./supplierRouter");
//const orderRouter = require("./orderRouter");
//const orderProductRouter = require("./orderProductRouter copy");


router.use("/users", userRouter);
//router.use("/users_info", userInfoRouter);
//router.use("/reviews", reviewRouter);
router.use("/products", productRouter);
//router.use("/products_suppliers", productSupplierRouter);
//router.use("/suppliers", supplierRouter);
//router.use("/orders", ordersRouter);
//router.use("/orders_products", orderProductRouter);

module.exports = router;
