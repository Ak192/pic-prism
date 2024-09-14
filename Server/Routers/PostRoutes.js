const { createPost, getAllPost, getMyPost, deleteFromPost, searchPosts, addToFavourites, removeFromFavourites, getFavourites } = require('../Controllers/PostControllers');
const { varification } = require('../Middleware/VarificationToken');

const router = require('express').Router();

router.post("/post/create",varification,createPost);
router.get("/post/getAll",getAllPost);
router.get("/post/mypost",varification,getMyPost);
router.delete("/post/delete/:id",varification,deleteFromPost);
router.get("/posts/search",searchPosts);
router.put("/post/addToFovourites/:postId",varification,addToFavourites)
router.put("/post/removeFromFavourites/:postId",varification,removeFromFavourites);
router.get("/post/favourites",varification,getFavourites);
module.exports=router;