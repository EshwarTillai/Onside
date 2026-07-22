export const config = {
    runtime: "edge",  
};
export default async function handler(request:Request):Promise<Response> {
    const {searchParams} = new URL(request.url, "http://localhost")
    const base_url = "https://api.football-data.org"
    const id = searchParams.get('id')
    if (!id) {      
        return new Response(JSON.stringify({ error: "Missing team id" }), { status: 400, headers: { "Content-Type": "application/json" } })
    }
    try {
        const response = await fetch(`${base_url}/v4/teams/${id}/matches`,
            {
                headers: {
                    "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY ?? "",
                },
            }
        )

        if (!response.ok){
            return new Response(JSON.stringify({error: `Error with the status ${response.status}` }), {status:response.status,  headers: {"Content-Type": "application/json"}})
        }else {
           const result = await response.json() as { matches: { status: string }[] } // To change once I have the list of info I need
           const history = result.matches.filter((match) => match.status === "FINISHED")  
           const fixtures = result.matches.filter((match) => match.status !== "FINISHED")
            return new Response(JSON.stringify({ history, fixtures }), {
                headers: { "Content-Type": "application/json" },
            })

        }
    }
    catch(error){
                    return new Response(JSON.stringify({error: `Error with the message ${error}` }), {status:500,  headers: {"Content-Type": "application/json"}})

    }
}