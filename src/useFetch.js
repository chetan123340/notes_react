import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const AbortCnt = new AbortController();
        fetch(url, {signal: AbortCnt.signal})
            .then((res) => {
                if (!res.ok) {
                    throw Error('Requested data not found')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log("fetch aborted");
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
    }, [url]);

    return {data , isPending, error};
}

export default useFetch;