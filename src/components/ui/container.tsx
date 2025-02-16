import { motion } from "framer-motion";
import type { ContainerProps } from "@/types";

const Container: React.FC<ContainerProps> = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Container; 