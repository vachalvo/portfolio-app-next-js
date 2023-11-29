"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface IRevealDiv {
    children: ReactNode;
    width?: "fit-content" | "100%";
    index?: number;
}

export function RevealDiv({
                              children,
                              width = "fit-content",
                              index,
                          }: IRevealDiv): ReactNode {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const classes = twMerge(
        "relative overflow-hidden",
        width === "fit-content" ? "fit-content" : "100%",
        index !== undefined && index % 2 === 0 ? "bg-base-100" : "bg-base-200",
    );
    return (
        <div ref={ref} className={classes}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <div className={"px-[2em] pb-[2em]"}>{children}</div>
            </motion.div>
        </div>
    );
}
