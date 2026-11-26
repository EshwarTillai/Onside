import { useRouter, type ErrorComponentProps } from "@tanstack/react-router"
export default function StandingError({error} : ErrorComponentProps){
    const router = useRouter()
    return (
        <div>
            <span> {error.message}</span>
            <button onClick={()=>router.invalidate()}> Try again</button>
        </div>
    )
}