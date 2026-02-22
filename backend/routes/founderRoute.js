import express from 'express'
import multer from 'multer'
import authAdmin from '../middlewares/authAdmin.js';
import { uploadImages, getImages, deleteImage } from '../controllers/founderController.js';

const founderRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage })

founderRouter.post('/upload', authAdmin, upload.fields([{ name: 'aboutImage', maxCount: 1 }, { name: 'homeImage', maxCount: 1 }]), uploadImages);
founderRouter.post('/delete', authAdmin, deleteImage);
founderRouter.get('/', getImages);

export default founderRouter;
