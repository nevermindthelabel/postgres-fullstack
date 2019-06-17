const Router = require("express-promise-router");
const db = require("../../db");

const router = new Router()

router.route("/").get(db.getHouses);

module.exports = router;
