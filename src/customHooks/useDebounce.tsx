import { useEffect, useState } from "react";

export default function useDebounce<T>(value:T, delay:number):T{
    const [debouncedValue,setDebouncedValue] = useState(value)
    useEffect(()=>{
        const timeoutRef = setTimeout(()=>{
            setDebouncedValue(value)
        },delay)
        return ()=> clearTimeout(timeoutRef)
    },[value])
    return debouncedValue
}