import axios from 'axios'

<<<<<<< HEAD
export const api = axios.create({
    baseURL: 'https://api.github.com/users/',
=======
const api = axios.create({
    baseURL: 'https://api.github.com/',
>>>>>>> 2939c155ee8fc129471d87ebf49ed13ec52ae746
    timeout: 3000,
  });

export async function getProfile(username : String) {
    let baseURL = `https://api.github.com/users/${username}`
    const perfil = await api.get(baseURL)
    return perfil.data
}


