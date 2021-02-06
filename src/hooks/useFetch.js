import axios from 'axios';
import { useState } from 'react';

const api_uri = 'https://interactive.hussamweb.com/wp-json/interactive/v1/';

function useFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetch(endpoint, options) {
        setLoading(true);
        try {
            const { data: serverData } = await axios.get(api_uri + endpoint, options);
            setData(serverData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return { data, error, loading, fetch };
}

export { useFetch };