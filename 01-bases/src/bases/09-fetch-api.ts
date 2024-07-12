import { Sticker } from "../interfaces/stiker.interface";

const apiKey = 'omU8218SyA1w41sQoQohCH1dSecIw7N1';


fetch(`https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`)
  .then(response => response.json())
  .then( (body: Sticker) => {
    console.log(body.data.images.downsized_medium.url)
  })
  .catch(error => console.log(error));