import { useState, useEffect } from 'react';

export default function useFetchProjects(){
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;
    // const apiUrl = import.meta.env.VITE_API_URL;


    useEffect(() => {
        fetch(`${apiUrl}/projects`)
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { projects, loading, error };
}
