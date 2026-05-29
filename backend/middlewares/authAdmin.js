import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Not Authorized. Login Again" });
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode.id !== "admin@movish.com" + "admin123") {
            return res.json({ success: false, message: "Not Authorized. Login Again" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default authAdmin;
