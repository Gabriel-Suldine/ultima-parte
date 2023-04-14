import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 3000,
  });

export async function getProfile(userName:string){
  const user = await api.get(userName)
  return user.data.results
}

