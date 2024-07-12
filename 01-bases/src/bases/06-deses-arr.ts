

const sayayins = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [ g, v, , gt ] = sayayins;

const returnArray = () => {
  return [123, 'ABC', true] as const;
}

const [ numbers, letters, booleans ] = returnArray();

// console.log({ g, v, gt });
// console.log({ numbers, letters, booleans });
// console.log(numbers.toExponential());

