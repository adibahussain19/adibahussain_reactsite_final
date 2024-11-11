import { useState, useEffect } from 'react';

export default function useFetchWriting(){
    const [writings, setWritings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    console.log("process.env", process.env);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/writing`)
            .then(response => response.json())
            .then(data => {
                setWritings(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { writings, loading, error };
}

