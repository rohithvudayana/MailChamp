import Email from "../model/email.js";

export const saveSentEmails = (request , responce) => {
    try{
        const email = new Email(request.body);
        email.save();
        responce.status(500).json('email saved successfully');
    }catch (error) {
        responce.status(500).json(error.message);
    }
}