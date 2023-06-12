import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [response, setResponse] = useState(null) 
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Error during getting data');
            }
            const json = await response.json();
            setResponse(json);
            setIsLoading(false);
          } catch (error) {
            setError(true);
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, [url]);

      return { response, error, isLoading }
}
