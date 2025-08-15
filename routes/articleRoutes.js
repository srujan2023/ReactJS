const express = require('express')
const router = express.Router();
 const {ListArticles,ListSingleArticle,CreateArticle, UpdateArticle, DeleteArticle,ListPublicArticles,ListSinglePublicArticle} = require('../controllers/articleControllers');
const { protect } = require('../middleware/authMiddleware');

 //public Routes
router.get('/public',ListPublicArticles)
router.get('/public/:articleId',ListSinglePublicArticle)


router.get('/',protect,ListArticles)

 
router.get('/:articleId',protect,ListSingleArticle)


 
router.post('/',protect,CreateArticle)

 
router.put('/:articleId',protect,UpdateArticle)

 
router.delete('/:articleId',protect,DeleteArticle)

module.exports = router;