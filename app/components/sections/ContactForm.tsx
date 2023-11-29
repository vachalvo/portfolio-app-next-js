import React, {ReactNode, useMemo, useState} from "react";
import Input, {IInputDef} from "../core/Input";
import { useForm } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alerts from "@/app/utils/Alerts";
import {sendContactForm} from "@/app/utils/api/api";

// DELETE
function delay(milliseconds: number){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

interface FormData {
    name: string
    email: string
    message: string
}

let messageSchema = object({
    name: string().required("Please fill in the following information"),
    email: string().email("Use your email address").required("Please fill in the following information"),
    message: string().max(1024, "Message can be only 1024 characters long").required("Please fill in the following information"),
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

    const successAlert = useMemo(() => {
        return Alerts.getSuccessAlert("Your message has been sent. Expect a reply in the next few days.", () => setShowSuccessAlert(false))
    }, []);

    const errorAlert = useMemo(() => {
        return Alerts.getErrorAlert("Your message could not be sent. Please try again later.", () => setShowErrorAlert(false))
    }, []);


    const onSubmit = async (data: FormData) => {

        await sendContactForm(data)
        await delay(2000);

        console.log("DATA", data)

        setShowSuccessAlert(true)
    };

    console.log("ERRORS", errors)

    return (
        <div className="flex flex-wrap flex-col items-center justify-center gap-4 text-center">
            <div className="w-full">
                {showSuccessAlert && successAlert}
                {showErrorAlert && errorAlert}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">

                    {INPUTS.map(input => {
                        return <Input
                            key={input.id}
                            {...input}
                            options={{...input.options, required: true}}
                            register={register}
                            // @ts-ignore
                            error={errors[input.id] ? errors[input.id].message : undefined}
                            disabled={isSubmitting}
                        />
                    })}

                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ?   <span className="loading loading-spinner text-primary"></span>
                        : "Send"}
                    </button>
                </form>
            </div>
            <div className="divider">OR</div>
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
