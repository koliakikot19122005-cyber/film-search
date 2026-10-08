import { useState,useEffect } from 'react'
import SideBar from '../components/SideBar.tsx'
import type { FilmData } from '../lib/types';
import { NavLink } from 'react-router-dom';
import { mode } from '../config.ts';
import AdminControls from '../components/AdminControls.tsx';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {

 
    const dispatch = useDispatch();
    const filmsFromStore = useSelector((state: any) => state.films.list);

    return (
        <div className="main-container">
            <SideBar/>
            <main className="home-page">
                <h1>Film Search</h1>
                <p>Welcome to the Film Search App!</p>
                <div className="film-card-container">
                    {filmsFromStore.map((f: FilmData, i) => (
                        <NavLink to={`/film-page/${f._id}`} key={"card" + i}>
                            <div className={mode === 'admin' ? 'film-card admin' : 'film-card'}>
                                <h2>{f.title}</h2>
                                <img src={f.preview} alt={f.title} />
                                <p>{f.description}</p>
                                <div className="category-teg-container">
                                    {f.categories.map((c, i) => (<span className='category-teg' key={"teg" + i}>{c}</span>))}
                                </div>
                                <AdminControls item={f}/>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </main>
        </div>
    )
}