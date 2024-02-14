import React from "react";
import { motion } from "framer-motion"; 
import { PROFIILE_PARAMS } from "../profileUtils";

const ProfilePreview = ({ profile }) => {
    return (
        <div style={styles.container}>
            {PROFIILE_PARAMS.map(({ key }, i) => (
                <motion.span
                    key={i}
                    style={{
                        ...styles.item,
                        backgroundColor: i % 2 === 0 ? "#dbeeec" : "#fdf0ea",
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} 
                >
                    {profile[key]}
                </motion.span>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        padding: "0px 5px 0px 5px",
        overflow: "hidden",
        margin: 2,
    },
    item: {
        width: 300,
        padding: 3.7,
        textAlign: "center",
    },
};

export default ProfilePreview;
