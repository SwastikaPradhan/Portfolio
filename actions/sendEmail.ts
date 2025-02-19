"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/util";
import ContactFormEmail from "@/email/contactformemail";
const resend = new Resend(process.env.RESEND_API_KEY);

// re_P8fkMuJ4_4HCfF3FQsFXBwhyTb9hEpbvp



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail') as string | null;
    const message = formData.get("message") as string | null;

    if(!senderEmail || !validateString(senderEmail,500)){
        return {
            error: "Invarlid sender Email"
        }
    }
    if(!message || !validateString(message,5000)){
        return {
            error:"Invalid  message"
        }
    }

    try{

        await resend.emails.send({
            from:'Contact Form <swastika@resend.dev>',
            to:'swastikapradhan51@gmail.com',
            subject:"Message from contact form",
            replyTo: senderEmail as string,
            text:message as string,
        });

        return { success : "Email sent Successfully"};
    

    }catch (error:unknown){
        if(error instanceof Error){
            return {
                error:error.message,
            };     

        }else if(error && typeof error === 'object' && 'message' in error){
            return {
                error:error.message,
            };
        }

         
    }

    
    
};