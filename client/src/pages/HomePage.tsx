import { useState } from 'react'
import SideBar from '../components/SideBar.tsx'
import type { FilmData } from '../lib/types';

export default function HomePage() {

    const [films, setFilms] = useState([])

    function receiveData(data: any) {
        console.log("receiveData", data)
        setFilms(data.films)
    }

    return (
        <div className="main-container">
            <SideBar onData={receiveData} />
            <main className="home-page">
                <h1>Film Search</h1>
                <p>Welcome to the Film Search App!</p>
                <div className="film-card-container">
                    {films.map((f: FilmData) => (
                        <div className='film-card'>
                            <h2>{f.title}</h2>
                            <p>{f.description}</p>
                            <div className="category-teg-container">
                                {f.categories.map(c => (<span className='category-teg'>{c}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}