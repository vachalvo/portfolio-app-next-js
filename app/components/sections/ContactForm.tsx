import React, {ReactNode, useState} from "react";
import Input, {IInputDef} from "../core/Input";
import { useForm } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alerts from "@/app/utils/Alerts";
import {sendContactForm} from "@/app/utils/api/api";

const DISABLED = true;

interface FormData {
    name: string
    email: string
    message: string
}

let messageSchema = object({
    name: string().required("This information must be filled."),
    email: string().email("Email address has invalid format. Please use your email.").required("This information must be filled."),
    message: string().max(1024, "Message can be only 1024 characters long.").required("This information must be filled."),
});

const INPUTS: IInputDef[] = [{
        id: "name",
        label: "Name",
        placeholder: "Name",
        type: "text"
    },
    {
        id: "email",
        label: "Email",
        placeholder: "Email",
        options: {
            pattern: /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
        },
        type: "text"
    },
    {
        id: "message",
        label: "Message",
        placeholder: "Message...",
        type: "textarea"
    }]

function ContactForm(): ReactNode {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: yupResolver(messageSchema)
    })

    const onSubmit = async (data: FormData) => {
        await sendContactForm(data)
        // TODO - check for errors
        setShowSuccessAlert(true)
    };

    return (
        <div className="flex flex-wrap flex-col items-center justify-center gap-4 text-center ">
            <div className="max-w-7xl w-full">
                {showSuccessAlert && Alerts.getSuccessAlert("Your message has been sent. Expect a reply in the next few days.", () => setShowSuccessAlert(false))}
                {showErrorAlert && Alerts.getErrorAlert("Your message could not be sent. Please try again later.", () => setShowErrorAlert(false))}
                {DISABLED && Alerts.getErrorAlert("The contact form is temporarily disabled. Please contact me directly under the alternative e-mail address below.")}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-4">

                    {INPUTS.map(input => {
                        return <Input
                            key={input.id}
                            {...input}
                            options={{...input.options, required: true}}
                            register={register}
                            // @ts-ignore
                            error={errors[input.id] ? errors[input.id].message : undefined}
                            disabled={isSubmitting || DISABLED}
                        />
                    })}

                    <button className="btn btn-primary" type="submit" disabled={isSubmitting || DISABLED}>
                        {isSubmitting ?   <span className="loading loading-spinner text-primary"></span>
                        : "Send"}
                    </button>
                </form>
                <div className="divider text-2xl mt-8">OR</div>
            </div>
            <p>
                Find me at the email address{" "}
                <a
                    className="link link-hover text-primary font-semibold"
                    href="mailto:vachal.vojta@email.cz"
                >
                    vachal.vojta@email.cz
                </a>
            </p>
        </div>
    );
}

export default ContactForm;
