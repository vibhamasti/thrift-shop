import axios from 'axios';

const url = 'http://localhost:5000/products';

export const getProducts = () => axios.get(url);