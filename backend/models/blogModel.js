/**
 * Blog Model for Firestore Structure
 * 
 * Since Firestore is schemaless, this file documents the expected structure
 * for a blog document in the "blogs" collection.
 */

class BlogModel {
    /**
     * @param {Object} data - Semi-parsed blog data
     * @returns {Object} - Sanitized and structured blog document
     */
    static create(data) {
        return {
            title: data.title || "",
            date: data.date || "",
            description: data.description || "",
            category: data.category || "",
            tags: Array.isArray(data.tags) ? data.tags : [],
            meta: Array.isArray(data.meta) ? data.meta : [],
            stats: Array.isArray(data.stats) ? data.stats : [],
            image: data.image || "",
            createdAt: data.createdAt || new Date(),
        };
    }
}

export default BlogModel;
