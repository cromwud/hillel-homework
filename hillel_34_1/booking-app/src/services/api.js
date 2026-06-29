import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const api = axios.create({ baseURL: BASE_URL });

export const fetchDestinations = () => api.get('/destination');
export const fetchHotels = () => api.get('/hotels');
export const createBooking = (data) => api.post('/bookings', data);