import { useState } from "react"
import { useEffect } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null,
    });

    const getFetch = async () => {
         
         try {
                const response = await fetch(url)
               
                const data = await response.json()
                
            setState({
                data,
                isLoading: false,
                errors: null,
            });
        } catch(error) {
            setState({
                data: null,
                isLoading: false,
                errors: error.message,
            })
        }

    }


        useEffect(() => {
            if (!url) return
            getFetch()
        }, [url])
    
  return state;
}

