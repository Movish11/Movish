import { v2 as cloudinary } from 'cloudinary'
import { db } from '../config/firebaseConfig.js'
import { doc, getDoc, setDoc, collection, getDocs, deleteDoc, query, orderBy, serverTimestamp } from 'firebase/firestore'

// Upload Brand Image
const uploadBrand = async (req, res) => {
    try {
        const brandImageFile = req.file;

        if (!brandImageFile) {
            return res.json({ success: false, message: "No image provided" });
        }

        const brandUpload = await cloudinary.uploader.upload(brandImageFile.path, { resource_type: 'image' });
        const imageUrl = brandUpload.secure_url;

        const brandRef = doc(collection(db, "brands"));
        await setDoc(brandRef, {
            image: imageUrl,
            createdAt: Date.now()
        });

        res.json({ success: true, message: "Brand uploaded successfully", data: { id: brandRef.id, image: imageUrl } });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Get All Brands
const getBrands = async (req, res) => {
    try {
        const brandsCollection = collection(db, "brands");
        const brandsSnapshot = await getDocs(brandsCollection);
        const brandsList = brandsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Bulletproof sorting: latest at the end (Ascending)
        const getTime = (val) => {
            if (!val) return 0;
            if (typeof val === 'number') return val;
            if (val.toMillis) return val.toMillis();
            if (val.seconds !== undefined) return val.seconds * 1000 + (val.nanoseconds ? val.nanoseconds / 1000000 : 0);
            if (val.toDate) return val.toDate().getTime();
            const d = new Date(val);
            return isNaN(d.getTime()) ? 0 : d.getTime();
        };

        brandsList.sort((a, b) => getTime(a.createdAt) - getTime(b.createdAt));

        res.json({ success: true, data: brandsList });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Delete Brand
const deleteBrand = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.json({ success: false, message: "Brand ID is required" });
        }

        const brandRef = doc(db, "brands", id);
        await deleteDoc(brandRef);

        res.json({ success: true, message: "Brand deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { uploadBrand, getBrands, deleteBrand }
