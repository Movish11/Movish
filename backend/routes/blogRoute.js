import express from 'express'
import { addBlog, listBlogs, removeBlog, updateBlog } from '../controllers/blogController.js'
import multer from 'multer'
import authAdmin from '../middlewares/authAdmin.js';

const blogRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage })

blogRouter.post('/add', authAdmin, upload.single('image'), addBlog);
blogRouter.get('/list', listBlogs);
blogRouter.post('/remove', authAdmin, removeBlog);
blogRouter.post('/update', authAdmin, upload.single('image'), updateBlog);

export default blogRouter;
