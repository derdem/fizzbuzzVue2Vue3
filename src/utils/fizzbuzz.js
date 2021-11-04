import { computed } from "vue";

const fizzbuzz = (counter) => {
  let fizzbuzz = "";
  if (counter % 3 === 0) {
    fizzbuzz = fizzbuzz.concat("fizz");
  }
  if (counter % 5 === 0) {
    fizzbuzz = fizzbuzz.concat("buzz");
  }
  if (fizzbuzz === "") {
    return counter.toString();
  }
  return fizzbuzz;
};

export default fizzbuzz;

// ===================================
const fizzbuzzOutput = (counter) => {
  return computed(() => {
    // Array [0 .. counter-1]
    const firstArray = [...Array(counter.value).keys()];
    // Array [1 .. counter]
    const raisedByOne = firstArray.map((x) => x + 1);
    const fizzbuzzOutput = raisedByOne.map(fizzbuzz);
    return fizzbuzzOutput;
  });
};

export { fizzbuzzOutput };
