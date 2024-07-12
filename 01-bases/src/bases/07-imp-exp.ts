import heroes, { Hero, type Owner } from "../data/heroes";


export const getHeroById = (id: number): Hero | undefined => {
  return heroes.find(hero => hero.id === id);
}

export const getHeroesByOwner = (owner: Owner) => {
  return heroes.filter(hero => hero.owner === owner);
}

console.log(getHeroById(1));
console.log(getHeroesByOwner('DC'));