import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilm } from "../lib/api";

export default function FilmPage() {

    const [film, setFilm] = useState(null)
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getFilm(id).then((data) => {
            console.log(data)
            setFilm(data.film)
        })

    }, [])



    return (
        <main className="film-page">
            {!film && (<div>
                <h1>Film Page</h1>
                <p>Welcome to the Film Page</p>
            </div>)}

            {film && (<div>шаблон2</div>)}
        </main>
    )
}