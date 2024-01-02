import React, {ReactNode, RefObject, useMemo, useRef, useState} from "react";
import Input, {IInputDef} from "../core/Input";
import { useForm } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Alerts from "@/app/utils/Alerts";
import {sendContactForm} from "@/app/utils/api/api";
import ReCAPTCHA from "react-google-recaptcha";

const DISABLED = false;

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
    const [submitResponse, setSubmitResponse] = useState<{success?: string, error?: string} | null>(null)

    const recaptcha: RefObject<ReCAPTCHA> = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: yupResolver(messageSchema),
        mode: 'all',  // Validation is initially triggered on the first blur event. After that, it is triggered on every change event.
    })

    const onSubmit = async (data: FormData) => {
        const recaptchaToken = recaptcha.current?.getValue();

        const res = await sendContactForm({...data, recaptchaToken})

        setSubmitResponse(res)
        recaptcha?.current?.reset();    // Reset ReCaptcha after submission
    };

    const AlertComponent = useMemo(() => {
        if(DISABLED)
            return Alerts.getErrorAlert("The contact form is temporarily disabled. Please contact me directly under the alternative e-mail address below.");

        if(submitResponse == null) return;

        if(submitResponse.success)
            return Alerts.getSuccessAlert("Your message has been sent. Expect a reply in the next few days.", () => setSubmitResponse(null));

        if(submitResponse.error)
            return Alerts.getErrorAlert("Your message could not be sent. Please try again later.", () => setSubmitResponse(null))
    }, [submitResponse])

    return (
        <div className="flex flex-wrap flex-col items-center justify-center gap-4 text-center max-w-[1000px] m-auto">
            <div className="max-w-7xl w-full">
                {AlertComponent}

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

                    <div className="flex flex-col space-between gap-4">
                        <ReCAPTCHA
                            size="normal"
                            sitekey="6LfQJEEpAAAAAOie14vyPt4Rxlh0wWFS9HpiHtCn"
                            ref={recaptcha}
                        />
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting || DISABLED}>
                            {isSubmitting
                                ? <span className="loading loading-spinner text-primary"></span>
                                : "Send"
                            }
                        </button>
                    </div>
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
