import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Indigator from '../component/Indigator';
import { useCookies } from 'react-cookie';

const Profile = () => {
    const navigate = useNavigate();

    const [dataLoading, setDataLoading] = useState(false);

    const [profileData, setProfileData] = useState(undefined);

    const [cookie] = useCookies(['token']);

    const getProfileData = async () => {
        const { token } = cookie;

        const config = {
            headers: {
                authorization: 'Bearer ' + token,
            },
        };

        setDataLoading(true);

        try {
            const { data, status } = await axios.get('http://localhost:7070/user', config);

            console.log(data);
            if (status === 200) {
                setDataLoading(false);
                setProfileData({ ...data });
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);

    if (dataLoading) {
        return <Indigator />;
    }

    if (profileData === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>username:{profileData.username}</h1>
            <div>
                <h2>gender:{profileData.bio ? 'male' : 'female'}</h2>
                <h2>
                    createdAt:{profileData.createdAt && profileData.createdAt.slice(0, 10)}
                </h2>
                <h2>
                    updatedAt:{profileData.updatedAt && profileData.updatedAt.slice(0, 10)}
                </h2>
                <h2>role:{profileData.role}</h2>
            </div>
        </div>
    );
};

export default Profile;