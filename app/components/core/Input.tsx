import React, {ReactNode, useMemo} from "react";
import {UseFormRegister} from "react-hook-form";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

export interface IInputDef {
    id: string;
    label: string;
    options?: object;
    placeholder?: string;
    type?: "text" | "textarea";
}

export interface IInput{
    id: string;
    label: string;
    register: UseFormRegister<any>;
    options: object;
    placeholder?: string;
    type?: "text" | "textarea";
    error?: string;
    disabled: boolean;
}

export default function Input({ id, label, register, placeholder, options, type, error, disabled }: IInput): ReactNode {
    const isError = error !== undefined;

    const InputComponent = useMemo(() => {
        if(type === "textarea") {
            const classes = twMerge("textarea textarea-bordered w-full", clsx({
                "textarea-error": isError,
            }))
            return (
                <textarea
                id={id}
                rows={5}
                placeholder={placeholder}
                {...register(id, options)}
                className={classes}
                disabled={disabled}
                />)
        }

        const classes = twMerge("input input-bordered w-full", clsx({
            "input-error": isError,
        }))
        return (
            <input
            id={id}
            placeholder={label}
            {...register(id, options)}
            type="text"

            className={classes}
            disabled={disabled}
            />)
    }, [disabled, id, label, options, placeholder, register, type]);

    return (
        <div className="mb-4 w-full">
            <label htmlFor={id} className="label">
                <span className="label-text">{label}<span className="text-error"> *</span></span>
            </label>

            {InputComponent}

            {isError && <label className="label w-full">
                <span className="label-text-alt text-error">{error}</span>
            </label>}
        </div>
    );
}
