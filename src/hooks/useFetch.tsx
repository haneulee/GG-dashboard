import { useState, useEffect } from "react";

interface IuseFetchProps {
    loading?: boolean,
    data?: any,
    error?: string,
}

function useFetch(url: string): IuseFetchProps {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        window
            .fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return { loading, data, error };
}

export default useFetch;
