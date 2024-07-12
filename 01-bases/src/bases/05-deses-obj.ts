
interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const person: Hero = {
  name: 'Peter',
  age: 30,
  codeName: 'Spiderman',
  power: 'fly',
}

// const { name, age, codeName, power = 'Indefinido' } = person;
// console.log({ name, age, codeName, power });

interface CreateHeroArgs {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const createHero = ( { name, age, codeName, power}: CreateHeroArgs ) => ({
  id: 123213,
  name: name,
  age: age,
  codName: codeName,
  power: power ?? 'Indefinido',
})

console.log(createHero( person ));