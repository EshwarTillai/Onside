import { useEffect, useState } from "react"
export default function useFetch<T>(url:string){
    const [error,setError] = useState<string | null>(null)
    const [data, setData] = useState<T | null>(null)
    const [loading,setLoading] = useState(true)
    async function  fetchData(signal:AbortSignal){
        try {
            
            const response = await fetch(url, {signal})
            const  result =  await response.json()
            
            if(result.error){
                setError(result.error)
            }else{
                setData(result)
            }
            setLoading(false)
        } catch (error  ) {

            if(error instanceof Error && error.name != 'AbortError') {
                setError("An Error occured")
                setLoading(false)
            }
        }
    
    }
    useEffect(() => {
        const controller = new AbortController()
        fetchData(controller.signal)
      return () => {
        setData(null)
        setError(null)
        setLoading(true)
        controller.abort()
      }
    }, [url])
    return {data, error, loading}
}