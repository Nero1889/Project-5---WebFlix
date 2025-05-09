import React, {useEffect, useState} from "react";

function TestAPIKey() {
    const [status, setStatus] = useState("Loading...");

    useEffect(() => {
        const API_KEY = "a185d00309246af13fc09d5674ea20ee"; 
        const API_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

        fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(`API Error: ${response.status} - ${data.status_message || "Something went wrong!"}`);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log(`TMDb Configuration Data: ${data}`);
            setStatus("API key is working correctly!");
        })
        .catch(error => {
            console.error(`Error fetching configuration: ${error}`);
            setStatus(`API key error: ${error.message}`);
        });
    }, []);

    return (
        <div>
            <h1>Testing TMDb API Key</h1>
            <p>{status}</p>
        </div>
    );
}

export default TestAPIKey;
