const User = require('../Models/User');
const Post = require('../Models/Post');

// create a function for post a item
const createPost = async (req, res) => {
    const authorId = req.id;
    const authorAccountType = req.accountType;
    if (authorAccountType == 'Buyer') return res.status(404).json({ success: false, message: "forbidden ,only Seller can post !" });
    const { title, author, price, image, publicId } = req.body;

    try {
        const post = new Post({ title, author, price, image, publicId, authorId });
        await post.save();
        await User.findByIdAndUpdate(authorId, {
            $push: {
                uploads: post._id,
            }
        })
        return res.status(201).json({ success: true, message: "Post created successfully ", post })

    } catch (error) {

        res.status(5003).json({ success: false, messaage: "Internal Server Error !" })
    }



}
// crete a fuction for get all item form post
const getAllPost = async (req, res) => {

    try {
        const posts = await Post.find({});
        if (posts.length === 0) return res.status(404).json({ success: false, message: "No Post found !" });
        res.status(201).json({ success: true, data: posts });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server !" })
    }

}
//create a functionn for get my Items from post 
const getMyPost = async (req, res) => {
    const authorId = req.id;
    const authorAccountType = req.accountType;
    try {
        if (authorAccountType == 'Buyer') {
            const { purchased } = await User.findById(authorId).populate("purchased");

            if (!purchased) return res.status(404).json({ success: false, message: "No Recourd Founds !" });
            res.status(201).json({ success: true, data: purchased })
        }
        else {
            const { uploads } = await User.findById(authorId).populate("uploads");
            if (!uploads) return res.status(404).json({ success: false, message: "No Recourd Founds !" });
            res.status(201).json({ success: true, data: uploads });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
//create a function  for delet from posts
const deleteFromPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ success: false, message: "Post not Found !" });
        const { authorId } = post;
        await User.findByIdAndUpdate(authorId, {
            $pull: { upload: id },

        });
        // we will do  this as some  of the people had already purchased your assaid 
        // await post.findByIdAndDelete(id);
        return res.status(201).json({ success: true, message: "Post delete successfully " });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error !" })
    }
}
//create a function for serching of posts
const searchPosts = async (req, res) => {
    const { search } = req.query;
    try {
        const posts = await Post.find({ title: { $regex: search, $options: "i" } });
        if (posts.length == 0) return res.status(404).json({ success: false, message: "post not found  !" });
        res.status(200).json({ success: true, data: posts });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
//add to favorates
const addToFavourites = async (req, res) => {
    const { authorId } = req.id;
    const { postId } = req.params;
    try {
        const user = await User.findByIdAndUpdate(authorId, {
            $push: { favourites: postId },
        });
        if (!user) return res.status(404).json({ success: false, message: "User not found !" });
        res.status(201).json({ success: true, message: "Post added to favorites " });

    } catch (error) {
        res.status(500).jsonj({ success: false, message: error.message })
    }

}
//remove form favourates
const removeFromFavourites = async (req, res) => {
    const { authorId } = req.id;
    const { postId } = req.params;
    try {
        const user = await User.findByIdAndUpdate(authorId, {
            $pull: { favourites: postId },
        });
        if (!user) return res.status(404).json({ success: false, message: "User not found !" });
        res.status(201).json({ success: true, message: "Post remove form favourites " });

    } catch (error) {
        res.status(500).jsonj({ success: false, message: error.message })
    }

}
//get all favourites
const getFavourites = (req,res)=>{
    const {authorId}=req.id;
    try {
        const {favourites}= User.findById(authorId).populate("favourites");
        if(!favourites) return res.status(404).json({success:false, message:"no Favourites added !"})
            res.status(201).json({success:true, data:favourites})
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
}

module.exports = {
    createPost, getAllPost, getMyPost,
    deleteFromPost, searchPosts, addToFavourites, removeFromFavourites,getFavourites
}

