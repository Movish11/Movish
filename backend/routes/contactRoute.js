import express from "express";
import { submitContactForm, getContactRequests, deleteContactRequest } from "../controllers/contactController.js";
import authAdmin from "../middlewares/authAdmin.js";

const contactRouter = express.Router();

contactRouter.post("/submit", submitContactForm);
contactRouter.get("/", authAdmin, getContactRequests);
contactRouter.post("/delete", authAdmin, deleteContactRequest);

export default contactRouter;
