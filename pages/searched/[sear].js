import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Searched = () => {

    const router = useRouter();
    const{sear} = router.query;

    const [results, setResults] = useState([]);

    useEffect(()=> {
        if(!sear) return; 

        const search = async()=>{
            const key = process.env.NEXT_PUBLIC_API_KEY;
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=10&tags=${sear}`   
            );
            const data = await api.json();
            setResults(data.recipes);
        };
        search();
    }, [sear]);

    return ( 
        <div>
            <h1>{sear} recipes: </h1>

            {results.map((result) => (
                <div key={result.id}>
                    <h1>{result.title}</h1>
                </div>
            ))}
        </div>
     );
}
 
export default Searched;