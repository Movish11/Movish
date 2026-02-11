import { v2 as cloudinary } from 'cloudinary'
import { db } from '../config/firebaseConfig.js'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore'
import BlogModel from '../models/blogModel.js'

// Add Blog
const addBlog = async (req, res) => {
    try {
        const { title, date, description, category, tags, meta, stats } = req.body;
        
        const imageFile = req.file;
        if (!imageFile) {
            return res.json({ success: false, message: "No image provided" });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        const imageUrl = imageUpload.secure_url;

        // Parse JSON strings if necessary (Common with FormData)
        const parsedTags = typeof tags === 'string' ? JSON.parse(tags) : tags;
        const parsedMeta = typeof meta === 'string' ? JSON.parse(meta) : meta;
        const parsedStats = typeof stats === 'string' ? JSON.parse(stats) : stats;

        // Use BlogModel to structure data
        const blogData = BlogModel.create({
            title,
            date,
            description,
            category,
            tags: parsedTags,
            meta: parsedMeta,
            stats: parsedStats,
            image: imageUrl
        });

        const docRef = await addDoc(collection(db, "blogs"), blogData);

        res.json({ success: true, message: "Blog added successfully", id: docRef.id });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update Blog
const updateBlog = async (req, res) => {
    try {
        const { id, title, date, description, category, tags, meta, stats } = req.body;
        const imageFile = req.file;

        let blogData = {
            title,
            date,
            description,
            category,
            tags: typeof tags === 'string' ? JSON.parse(tags) : tags,
            meta: typeof meta === 'string' ? JSON.parse(meta) : meta,
            stats: typeof stats === 'string' ? JSON.parse(stats) : stats,
        }

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            blogData.image = imageUpload.secure_url;
        }

        const blogRef = doc(db, "blogs", id);
        await updateDoc(blogRef, blogData);

        res.json({ success: true, message: "Blog updated successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// List Blogs
const listBlogs = async (req, res) => {
    try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        
        const blogs = [];
        querySnapshot.forEach((doc) => {
            blogs.push({ id: doc.id, ...doc.data() });
        });
        res.json({ success: true, blogs });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Remove Blog
const removeBlog = async (req, res) => {
    try {
        const { id } = req.body;
        await deleteDoc(doc(db, "blogs", id));
        res.json({ success: true, message: "Blog removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addBlog, listBlogs, removeBlog, updateBlog }
