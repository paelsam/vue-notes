import { Sticker } from "../interfaces/stiker.interface";
import { giphyApi } from "./10-axios";

export const getImage = async () => {
  try {
    const response = await giphyApi.get<Sticker>('/random');
    return response.data.data.images.downsized_large.url;
  } catch (error: any) {
    throw new Error(error);
  }
}

getImage()
  .then(image => console.log(image))
  .catch(error => console.log(error));