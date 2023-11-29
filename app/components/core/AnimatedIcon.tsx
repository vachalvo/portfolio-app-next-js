import { motion } from "framer-motion";
import {ReactNode} from "react";

interface IAnimatedIcon {
    href: string;
    icon: ReactNode;
}

export default function AnimatedIcon({ href, icon }: IAnimatedIcon): ReactNode {
    return (
        <motion.div whileHover={{ scale: 1.2 }}>
            <a href={href}>{icon}</a>
        </motion.div>
    );
}