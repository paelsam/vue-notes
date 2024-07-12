

export const person = {
    lastName: "Samuel",
    age: 19,
    address: {
        city: "Madrid",
        country: "Spain",
        lat: 40.416775,
        lng: -3.703790,
        zipCode: 28001
    }
} // as const;

// Destructure in the superficial way
// const person2 = {...person};

// Destructure in the deep way
const person2 = structuredClone(person);

person2.lastName = "Perez";
person2.address.city = "Barcelona";

console.log(person);
console.log(person2);