import React, { useEffect } from 'react';
import { API } from '../../global';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

export function UrlRedirect() {
    const { shortUrl } = useParams();
    useEffect(() => {
        const handleRedirect = async () => {
            try {
                const response = await axios.get(`${API}/url/redirect/${shortUrl}`);
                if (response.status === 200) {
                    window.location.href = response.data.originalUrl;
                }
            } catch (error) {
                console.error("Error while redirecting:", error);
            }
        };

        handleRedirect();
    }, [shortUrl]);

    return (
        <div className='urlRedirect'>
            <h1>Redirecting...</h1>
            <div className="loading">
                <CircularProgress />
            </div>
        </div>
    );
}
