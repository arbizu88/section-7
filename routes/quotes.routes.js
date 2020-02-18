const router = require("express").Router();
const { QuotesControler } = require("../controllers");

router.get("/quotes", QuotesControler.index);
router.get("/quotes/all", QuotesControler.get);
router.post("/quotes", QuotesControler.add);

module.exports = router;
