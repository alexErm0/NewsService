const {Router} = require('express')
const User = require('../db/models/Article')
const config = require('config')
const ArticleController = require("../controllers/articles.controllers.js");
const router = Router()
router.post('/category',ArticleController.getByCategory);
router.post('/collect', ArticleController.collectArticles);
module.exports = router