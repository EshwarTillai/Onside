export default async function  handler(request:Request):Promise<Response> {
    const {searchParams} = new URL(request.url)
    const competition = searchParams.get("competition")
    const existingCompetition = ["PL","SA","PD","BL1", "FL1"]
    const base_url = "https://api.football-data.org"
    if(!existingCompetition.includes(competition ? competition : "")){
        return (new Response(JSON.stringify({error: "The given championship does not exist" }), {status: 404,  headers: { "Content-Type": "application/json" }} ))

    }
    try {
        const response  = await fetch(`${base_url}/v4/competitions/${competition}/standings`,
            {
                headers: {
                    "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY ?? "",
                },
            }
        );
        if(!response.ok) {
            return (new Response(JSON.stringify({error: `Error with the status: ${response.status}`}), {status: response.status,  headers: { "Content-Type": "application/json" }}  ))
        }else{
            const result = await response.json()
            return (new Response(JSON.stringify(result), {headers: { "Content-Type": "application/json"} }))
        }   
    }
    catch (error){
        return (new Response(JSON.stringify({error: `An error occured: ${error}`}), {status: 500,  headers: { "Content-Type": "application/json" }} ))

    }
    
}