import { motion } from "framer-motion";
import React from "react";

const TransitionEffects: React.FC = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full h-screen w-screen z-50"
                style={{
                    backgroundColor: '#90d5ff82',
                    backdropFilter: 'blur(10px)'
                }}
                initial={{ x: "100%", width: "100%" }}
                animate={{
                    scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
                    borderRadius: ["20%", "30%", "50%", "50%", "50%"],
                }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <motion.img
                    src="https://nwgj1m91fr.ufs.sh/f/R4IOQGrdFUw15QgIPEiwE921VjNH4FOgdZyDvxiGlPh03Atk"
                    alt="Center Image"
                    width={"50%"}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </motion.div>
        </>
    );
}

export default TransitionEffects;
