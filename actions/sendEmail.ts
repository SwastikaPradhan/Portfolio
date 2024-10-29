"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/util";
const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('email');
    const message = formData.get("message");

    if(!validateString(senderEmail,500)){
        return {
            error: "Invalid sender Email"
        }
    }
    if(!validateString(message,5000)){
        return {
            error:"Invalid  message"
        }
    }

    try{

        await resend.emails.send({
            from:'onboarding@resend.dev',
            to:'pradhanswastika840@gmail.com',
            subject:"Message from contact form",
            replyTo: senderEmail as string,
            text:message as string,
        });

        return { success : "Email sent Successfully"};
    

    }catch (error){
        console.error("Failed to send Email",error);
        return {error:"Failed to send email . Please try again later."};
    }

    
    
};