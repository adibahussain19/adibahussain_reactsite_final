import { useState, useEffect } from 'react';

export default function useFetchProjects(){
    const [projects, setProjects] = useState([]);
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

        fetch(`${apiUrl}/projects`)
            // .then(response => response.json())

            .then(response => {
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                return response.json();
            })

            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [apiUrl]);

    return { projects, loading, error };
}
