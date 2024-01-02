import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import axios from "axios";

export async function POST(req: NextRequest){
    const body = await req.json()

    // Check if everything is filled
    if (!(body.name && body.email && body.message && body.recaptchaToken))
        return NextResponse.json({ message: "Body is invalid." }, { status: 400 });

    try {
        const recaptchaVerificationResponse = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.recaptchaToken}`
        );

        // If recaptcha is NOT valid - return.
        if (!recaptchaVerificationResponse.data.success)
            return NextResponse.json({ message: "ReCAPTCHA verification failed" }, { status: 400 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }

    // ReCaptcha successfully verified -> send email
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.GMAIL_EMAIL,
        subject: `PORTFOLIO - Message from ${body.name} (${body.email})`,
        text: body.message,
    };

    const sendMailPromise = () => new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
                resolve('Email sent');
            } else {
                reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
