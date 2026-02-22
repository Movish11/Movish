import { v2 as cloudinary } from 'cloudinary'
import { db } from '../config/firebaseConfig.js'
import { doc, getDoc, setDoc } from 'firebase/firestore'

// Upload Images
const uploadImages = async (req, res) => {
    try {
        const aboutImageFile = req.files?.aboutImage ? req.files.aboutImage[0] : null;
        const homeImageFile = req.files?.homeImage ? req.files.homeImage[0] : null;

        if (!aboutImageFile && !homeImageFile) {
            return res.json({ success: false, message: "No image provided" });
        }

        const docRef = doc(db, "settings", "founder_images");
        const docSnap = await getDoc(docRef);
        let currentData = docSnap.exists() ? docSnap.data() : {};

        let newAboutUrl = currentData.aboutImage || "";
        let newHomeUrl = currentData.homeImage || "";

        if (aboutImageFile) {
            const aboutUpload = await cloudinary.uploader.upload(aboutImageFile.path, { resource_type: 'image' });
            newAboutUrl = aboutUpload.secure_url;
        }

        if (homeImageFile) {
            const homeUpload = await cloudinary.uploader.upload(homeImageFile.path, { resource_type: 'image' });
            newHomeUrl = homeUpload.secure_url;
        }

        const updatedData = {
            aboutImage: newAboutUrl,
            homeImage: newHomeUrl,
            updatedAt: new Date()
        };

        await setDoc(docRef, updatedData, { merge: true });

        res.json({ success: true, message: "Founder images updated successfully", data: updatedData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Get Images
const getImages = async (req, res) => {
    try {
        const docRef = doc(db, "settings", "founder_images");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            res.json({ success: true, data: docSnap.data() });
        } else {
            res.json({ success: true, data: { aboutImage: "", homeImage: "" } });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Delete Image
const deleteImage = async (req, res) => {
    try {
        const { type } = req.body; // 'aboutImage' or 'homeImage'
        if (type !== 'aboutImage' && type !== 'homeImage') {
            return res.json({ success: false, message: "Invalid image type" });
        }

        const docRef = doc(db, "settings", "founder_images");
        await setDoc(docRef, { [type]: "" }, { merge: true });

        res.json({ success: true, message: "Image deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { uploadImages, getImages, deleteImage }
