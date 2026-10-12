import { getFilms } from '../lib/api';
import { store } from '../store/store';
import { setFilms, setFilteredFilms } from '../store/filmSlice';
import { deleteFilm } from '../lib/api.ts';


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

export async function removeFilm(id: string) {
    try {
        await deleteFilm(id);
        await updateFilms();
    } catch (error) {
        console.error(error);
    }
}

export async function filmFilter(searchTerm: string) {
console.log('Filtering films with search term:', searchTerm);
const filmsFromStore = store.getState().films.list;
const filteredFilms = filmsFromStore.filter((film: any) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log('Filtered films:', filteredFilms);
store.dispatch(setFilteredFilms(filteredFilms));
}
