import { useParams } from "react-router-dom";

function ClientHomepage() {
    const {name,id} = useParams()
    let restoName = name.split("-").join(" ").replace(/^./, name[0].toUpperCase())
    return (  
        <div>
            <h1>{restoName}</h1>
            <h2>Bienvenue</h2>
        </div>
    );
}

export default ClientHomepage;