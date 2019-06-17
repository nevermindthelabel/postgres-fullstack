const Router = require("express-promise-router");
const homeRoutes = require("./homes");

const router = new Router();

router.use("/houses", homeRoutes);

module.exports = router;
