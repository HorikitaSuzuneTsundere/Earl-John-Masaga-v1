import React, { useState } from "react";
import { PiFunnelSimple } from "react-icons/pi";
import { PROFIILE_PARAMS } from "../profileUtils";
import ProfilePreview from "./ProfilePreview";

const ProfileList = ({ profiles }) => {
    const [sortedProfiles, setSortedProfiles] = useState([...profiles]);

    const handleColumnClick = (columnName) => {
        const columnKey = PROFIILE_PARAMS.find(param => param.columnTitle === columnName).key;
        const sorted = [...sortedProfiles].sort((a, b) => {
            if (a[columnKey] < b[columnKey]) return -1;
            if (a[columnKey] > b[columnKey]) return 1;
            return 0;
        });
        setSortedProfiles(sorted);
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <div style={styles.header}>
                    {PROFIILE_PARAMS.map(({ columnTitle }, i) => (
                        <h3 key={i} style={styles.columnHeader}>
                            <a
                                href="#"
                                onClick={() => handleColumnClick(columnTitle)}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {columnTitle} <PiFunnelSimple style={{ marginLeft: 5, fontSize: 15 }} />
                            </a>
                        </h3>
                    ))}
                </div>
                {sortedProfiles.map((prof, index) => (
                    <ProfilePreview key={index} profile={prof} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    outerContainer: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fef5da",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 10,
    },
    columnHeader: {
        width: 300,
        textAlign: "center",
        height: 20,
        fontWeight: "bold",
        fontSize: "1.4em",
        margin: "1px 5px",
        padding: "10px 0",
    },
};

export default ProfileList;
