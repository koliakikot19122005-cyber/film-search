import axios from "axios";


const apiUrl=" http://localhost:3001/api";
const fileServerUrl="http://localhost:3000";

export async function getCategories(qeryParams: string) {
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