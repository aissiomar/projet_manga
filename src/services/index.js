import axios from "axios";

const url = "https://api.atontour.org/v3/sujets/mangas/?key=736204";

export async function mangasAll() {
    const response = await axios.get(url);
    console.log('API response mangasAll:', response.data); // Debugging
    return response.data.records;
}

export async function mangaOne(id) {
    const response = await axios.get(`https://api.atontour.org/v3/sujets/mangas/${id}?key=736204`);
    console.log('API response mangaOne:', response.data); // Debugging
    return response.data.records;
}

export async function info() {
    const response = await axios.get(url);
    console.log('API response info:', response.data); // Debugging
    return response.data.informations.meta;
}
