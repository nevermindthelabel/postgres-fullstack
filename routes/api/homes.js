const Router = require("express-promise-router");
const db = require("../../db");

const router = new Router()

router.route('/').get(db.getHouses);
router.route('/:id').get(db.getHousesById);
router.route('/new').post(db.createHouse)
router.route('/remove/:id').delete(db.removeHouse);

module.exports = router;
