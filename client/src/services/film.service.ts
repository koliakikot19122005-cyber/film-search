import { getFilms } from '../lib/api';
import { store } from '../store/store';
import { setFilms } from '../store/filmSlice';

export async function updateFilms() {
    try {  
        const queryParams = store.getState().app.queryParams;
        const newData = await getFilms(queryParams);

        store.dispatch(setFilms(newData.films));

        return newData.films;
    } catch (error) {
        console.error(error);
    }
}