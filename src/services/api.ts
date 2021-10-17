import axios, { AxiosError } from 'axios';
import IServer from '../types/IServer';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function getServerList(): Promise<IServer | undefined> {
  try {
    const response = await api.get('/servers');
    return response.data;
  } catch (err) {
    handleError(err);
  }
}

// Function to test when response is error
export async function getError()  {
  try {
    const response = await api.get('/any-wrong-url');
    return response.data;
  } catch (err) {
    handleError(err);
  }
}

function handleError(error: AxiosError | unknown) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error(error.response);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error.message);
    }
  } else {
    console.error(error);
  }
}

export default api;
