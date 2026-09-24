import axios from "axios";
import type { FilmData } from "./types";

const apiUrl=" http://localhost:3001/api";
const fileServerUrl="http://localhost:3000";

export async function getFilms(qeryParams: string) {
    const response = await axios.get(`${apiUrl}/films`, {
        params: {
            categories: qeryParams
        }
    });
    
    return response.data;
}

export async function getFilmList() {
    const response = await axios.get(`${fileServerUrl}/film-list`);
    return response.data;
}



export async function postNewFilm(filmData: FilmData) {
    const response= await axios.post(`${apiUrl}/film`, filmData)
    return response.data
}


export async function getFilm(id:string) {
    const response= await axios.get(`${apiUrl}/film/${id}`)
    return response.data
}