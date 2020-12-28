import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID w4EjAI-0YEQYTdBaoxAK6Ocs-nf3B6NOsug3AeUm7aQ',
  },
});
