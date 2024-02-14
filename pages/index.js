/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateProfile } from "../lib/profileUtils";
import ProfileList from "../lib/components/ProfileList";
import Loader from "./Loader";

const Home = () => {
    const [profiles, setProfiles] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://randomuser.me/api?results=20")
            .then((res) => {
                setTimeout(() => {
                    setProfiles(res.data.results.map(generateProfile));
                    setLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.error(err);
                alert("Profile request failed");
                setLoading(false);
            });
    }, []);

    if (!profiles) 
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundColor: '#fef5da'
                }}
            >
                <h1 style={{ marginRight: '10px', fontSize: '80px' }}>Fetching data</h1>
                <Loader />
            </div>
        );

    return <ProfileList profiles={profiles} />;
};

export default Home;
