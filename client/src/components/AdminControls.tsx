import { mode } from '../config.ts';
import type { FilmData } from '../lib/types';
import { deleteFilm } from '../lib/api.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setFilms } from '../store/filmSlice.ts';
import { getFilms } from '../lib/api.ts';

export default function AdminControls({ item }: { item: FilmData; }) {

    const dispatch = useDispatch();
    const queryParams = useSelector((state: any) => state.app.queryParams);
    async function deleteItem(e: React.MouseEvent<HTMLButtonElement>, id: string) {
        e.preventDefault();
        const answer = await deleteFilm(id)
        console.log("deleteItem", answer)
        console.log(e)
        const newData = await getFilms(queryParams)
        dispatch(setFilms(newData.films))
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