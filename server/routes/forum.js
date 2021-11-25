
let express = require('express');
let router = express.Router();
let forumController = require('../controllers/forum')
const requiresAuth = require('../middleWare/authMiddleware')



/* GET post list */
router.get('/post', forumController.displayPostList); 

/* GET torunament by id */
router.get('/post/:id',forumController.displayPostById );

/* CREATE post*/
router.post('/post/create' ,requiresAuth, forumController.createNewPost );

/* UPDATE post */
router.post('/post/update/:id',requiresAuth, forumController.updatePost);

/* DELETE post */
router.delete('/post/delete/:id',requiresAuth,forumController.deletePost );



// COMMENTS

/* GET comment by  id */
router.get('/comment/:id',forumController.displayComment );

/* GET comment by post id */
router.get('/comment-by-post/:id',forumController.displayCommentsByPost );

/* CREATE comment*/
router.post('/comment/create' ,requiresAuth, );

/* UPDATE comment */
router.post('/comment/update/:id',requiresAuth, forumController.updateComment);

/* DELETE comment */
router.delete('/comment/delete/:id',requiresAuth );

module.exports = router;
