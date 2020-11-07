const {Router} = require('express')
const TagController = require("../controllers/tag.controllers.js");
const router = Router()
router.post('/update',TagController.updateTags);
module.exports = router;