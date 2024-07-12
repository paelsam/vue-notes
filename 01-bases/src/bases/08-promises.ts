import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// console.log("Incio");

// new Promise((resolve, reject) => {
//   // console.log('Cuerpo de la promesa');
//   setTimeout(() => {
//     // resolve('Mi amigo cumplió');

//     reject("Mi amigo no cumplió");
//   }, 1000);
// })
// .then((message) => console.log(message))
// .catch( errorMessage => console.log(errorMessage) )
// .finally( () => console.log('Finalizado') );

// console.log("Fin");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const hero = getHeroById(id);

      return hero ?
        resolve(hero) :
        reject(`No se encontró el heroe con id ${id}`);
    }, 1500);
  })
}

getHeroByIdAsync(8)
  .then((hero) => console.log(`Heroe ${hero.name} encontrado`))
  .catch( console.log )