import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest){
    // FIX - just temporarly
    return NextResponse.json({ message: "Contact form is not available." }, { status: 400 });

    /**
     * const body = await req.json()
     *
     *     if (!(body.name && body.email && body.message))
     *         return NextResponse.json({ message: "Body is invalid." }, { status: 400 });
     *
     *     const transport = nodemailer.createTransport({
     *         service: 'gmail',
     *         auth: {
     *             user: process.env.GMAIL_EMAIL,
     *             pass: process.env.GMAIL_PASSWORD,
     *         },
     *     });
     *
     *     const mailOptions: Mail.Options = {
     *         from: process.env.GMAIL_EMAIL,
     *         to: process.env.GMAIL_EMAIL,
     *         subject: `PORTFOLIO - Message from ${body.name} (${body.email})`,
     *         text: body.message,
     *     };
     *
     *     const sendMailPromise = () =>
     *         new Promise<string>((resolve, reject) => {
     *             transport.sendMail(mailOptions, function (err) {
     *                 if (!err) {
     *                     resolve('Email sent');
     *                 } else {
     *                     reject(err.message);
     *                 }
     *             });
     *         });
     *
     *     try {
     *         await sendMailPromise();
     *         return NextResponse.json({ message: 'Email sent' });
     *     } catch (err) {
     *         return NextResponse.json({ error: err }, { status: 500 });
     *     }
     */
}
