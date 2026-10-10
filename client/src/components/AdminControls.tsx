import { mode } from '../config.ts';
import type { FilmData } from '../lib/types';
import { deleteFilm } from '../lib/api.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setFilms } from '../store/filmSlice.ts';
import { updateFilms } from '../services/film.service.ts';
import { getFilms } from '../lib/api.ts';

export default function AdminControls({ item }: { item: FilmData; }) {

    async function deleteItem(e: React.MouseEvent<HTMLButtonElement>, id: string) {
        e.preventDefault();
        const answer = await deleteFilm(id)
        await updateFilms();
    }

    return (
        <>
            {mode === 'admin' && (
                <div className="admin-controls">
                    <button>Edit</button>
                    <button onClick={(event) => deleteItem(event, item._id)}>Delete</button>
                </div>
            )}
        </>
    )
}