import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilm } from "../lib/api";
import { fileServerUrl } from "../config";
import type { FilmData } from "../lib/types";

export default function FilmPage() {

    const [film, setFilm] = useState<FilmData | null>(null)
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getFilm(id).then((data) => {
            console.log(data)
            setFilm(data.film)
        })

    }, [])



    return (
        <div className="main-container">
            <main className="film-page">
                {!film && (<div>
                    <h1>Film Page</h1>
                    <p>Welcome to the Film Page</p>
                </div>)}

                {film && (<div>
                    <h1>{film.title}</h1>
                    <p>{film.description}</p>
                    <video
                        controls
                        preload="metadata"
                        poster="/images/film-poster.jpg"
                        playsInline
                        className="film-video"
                    >
                        <source src={fileServerUrl + "/" + film.url} type="video/mp4" />
                        Ваш браузер не підтримує відтворення відео.
                    </video>
                    <div>Жанри:
                        <div className="category-teg-container">
                            {film.categories.map((c,i) => (
                                <span className="category-teg" key={"category"+i}>{c}</span>
                            ))}
                        </div>
                    </div>
                </div>)}
            </main>
        </div>
    )
}