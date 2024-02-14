import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around"
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "black",
  borderRadius: "0.25rem"
};

export default function Loader() {
  return (
    <div style={loadingContainer}>
      <motion.span
        style={loadingCircle}
        animate={{
            y: ["50%", "150%", "50%"],
            transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
        }}
      />
      <motion.span
        style={loadingCircle}
        animate={{
            y: ["50%", "150%", "50%"],
            transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 0.1 }
        }}
      />
      <motion.span
        style={loadingCircle}
        animate={{
            y: ["50%", "150%", "50%"],
            transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }
        }}
      />
    </div>
  );
}
