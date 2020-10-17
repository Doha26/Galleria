import axios from 'axios';
import {setupCache} from 'axios-cache-adapter';
import {API_BASE_URL} from '~/constants';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  baseURL: API_BASE_URL,
  adapter: cache.adapter,
});

export default api;
