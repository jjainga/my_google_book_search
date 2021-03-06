const router = require("express").Router();
const bookController = require("../controller/bookController");

//match with /api/book
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

//Match with /api/book/:id
router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove)

module.exports = router;