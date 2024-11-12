import { useState, useEffect } from 'react';

export default function useFetchWriting(){
    const [writings, setWritings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    const apiUrl = process.env.REACT_APP_LOCAL_API;
    useEffect(() => {

        if (!apiUrl) {
            setError(new Error('API URL is not defined'));
            setLoading(false);
            return;
        }

        console.log("API URL:", apiUrl);

        fetch(`${apiUrl}/writing`)
            // .then(response => response.json())
            .then(response => {
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                return response.json();
            })
            
            .then(data => {
                setWritings(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [apiUrl]);

    return { writings, loading, error };
}

