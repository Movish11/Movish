import nodemailer from "nodemailer";
import { db } from "../config/firebaseConfig.js";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

const submitContactForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      locations,
      serviceInterest,
      challenges,
      assessmentData // Array of { question, answer }
    } = req.body;

    // Validate essential fields
    if (!name || !email || !phone || !challenges) {
      return res.json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format Email HTML
    const emailHtml = `
      <h2>New Contact Request from ${name}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr />
      <h3>Business Information</h3>
      <p><strong>Company/Restaurant:</strong> ${company || "Not provided"}</p>
      <p><strong>Locations:</strong> ${locations || "Not provided"}</p>
      <p><strong>Service Interest:</strong> ${serviceInterest || "Not provided"}</p>
      <hr />
      <h3>Operational Challenges</h3>
      <p>${challenges}</p>
      <hr />
      <h3>Operational Assessment Results</h3>
      ${assessmentData ? assessmentData.map((item, index) => `
        <p><strong>Q${index + 1}: ${item.question}</strong><br/>
        A: ${item.answer}</p>
      `).join('') : '<p>No assessment data provided.</p>'}
    `;

    // Save to Firebase database
    try {
      const contactCollection = collection(db, "contact_requests");
      await addDoc(contactCollection, {
        name,
        email,
        phone,
        company: company || "",
        locations: locations || "",
        serviceInterest: serviceInterest || "",
        challenges,
        assessmentData: assessmentData || [],
        createdAt: new Date()
      });
    } catch (dbError) {
      console.error("Failed to save contact request to database:", dbError);
      // We will still send the email even if DB save fails, but log it.
    }

    // Send email asynchronously to not block the response
    transporter.sendMail({
      from: `"Movish Portal" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry: ${name} (${company || 'No Company Provided'})`,
      html: emailHtml,
    }).catch(err => {
      console.error("Background email send failed:", err);
    });

    res.json({ success: true, message: "Request submitted successfully. We will be in touch soon!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to submit request. Please try again later." });
  }
};

// Fetch all Contact Requests for Admin Panel
const getContactRequests = async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "contact_requests"));
    const requests = [];
    querySnapshot.forEach((doc) => {
      requests.push({ id: doc.id, ...doc.data() });
    });
    
    // Sort by createdAt descending locally since dates are objects
    requests.sort((a, b) => {
      // Handle Firebase Timestamps vs Date objects
      const timeA = a.createdAt?.seconds ? a.createdAt.seconds : (new Date(a.createdAt).getTime() / 1000);
      const timeB = b.createdAt?.seconds ? b.createdAt.seconds : (new Date(b.createdAt).getTime() / 1000);
      return timeB - timeA;
    });

    res.json({ success: true, data: requests });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Delete Contact Request from Admin Panel
const deleteContactRequest = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.json({ success: false, message: "Document ID required" });
    }

    await deleteDoc(doc(db, "contact_requests", id));
    res.json({ success: true, message: "Contact request deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { submitContactForm, getContactRequests, deleteContactRequest };
