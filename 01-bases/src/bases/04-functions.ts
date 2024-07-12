function greetPerson(name: string) {
  return `Hello ${name}!`;
}

const greetPersonArrow = (name: string) => `Hello ${name}!`;

const getUser = ( uid: string ) => ({
  uid: uid,
  username: "John",
});

const heroes = [
  { id: 1, name: 'Batman', },
  { id: 2, name: 'Superman', power: 'fly', },
]

const hero = heroes.find(hero => hero.id === 1);

// console.log(greetPerson("John"));
// console.log(greetPersonArrow("John"));
// console.log(getUser("123"));
// console.log(hero?.power?.toUpperCase());