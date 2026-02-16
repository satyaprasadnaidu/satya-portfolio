import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

/**
 * Sends an email using EmailJS
 * @param formData The data from the contact form
 * @returns Promise that resolves to the EmailJS response
 */
export const sendEmail = async (formData: Record<string, unknown>) => {
    if (!SERVICE_ID || SERVICE_ID === "your_service_id_here") {
        throw new Error("EmailJS Service ID is not configured. Please check your .env file.");
    }
    if (!TEMPLATE_ID) {
        throw new Error("EmailJS Template ID is not configured. Please check your .env file.");
    }
    if (!PUBLIC_KEY) {
        throw new Error("EmailJS Public Key is not configured. Please check your .env file.");
    }

    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            formData,
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error("EmailJS Error:", error);
        throw error;
    }
};
