import axios from 'axios';
import { useState } from 'react';

const api_uri = 'https://interactive.hussamweb.com/wp-json/interactive/v1/';

function useFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMoreItem, setHasMoreItem] = useState(true);

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

    async function loadMore(endpoint, options) {
        setLoadingMore(true);
        try {
            const { data: serverData } = await axios.get(api_uri + endpoint, options);
            if (serverData.length > 0){
                setData([...data,...serverData]);
            } else {
                setHasMoreItem(false)
            }
            setLoadingMore(false);
        } catch (error) {
            setError(error);
            setLoadingMore(false);
        }
    }

    return { data, error, loading, fetch, loadMore,loadingMore,hasMoreItem };
}

export { useFetch };