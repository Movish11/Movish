import express from 'express'
import multer from 'multer'
import authAdmin from '../middlewares/authAdmin.js';
import { uploadBrand, getBrands, deleteBrand } from '../controllers/brandController.js';

const brandRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage })

brandRouter.post('/upload', authAdmin, upload.single('image'), uploadBrand);
brandRouter.post('/delete', authAdmin, deleteBrand);
brandRouter.get('/', getBrands);

export default brandRouter;
