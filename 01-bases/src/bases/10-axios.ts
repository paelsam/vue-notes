import axios from "axios"
// import { Sticker } from "../interfaces/stiker.interface";


const apiKey = 'omU8218SyA1w41sQoQohCH1dSecIw7N1';

//! Es posible crear interceptores para cada petición
//? Info: https://axios-http.com/docs/interceptors

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/stickers',
  params: {
    api_key: apiKey
  }
});

// giphyApi.get<Sticker>('/random')
//   .then(response => console.log(response.data.data.images.downsized_medium.url))
//   .catch(error => console.log(error));

// export default giphyApi;