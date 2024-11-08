// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifiso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// EXERCIES: ——————————————————————————————————————————

// 1. Use `forEach` to log each name and each province to the console
provinces.forEach((province) => console.log(province));

names.forEach((name) => console.log(name));

// get name and province based on index
function getNameAndProvince(name, index) {
  console.log(`${name} (${provinces[index]})`); 
}

names.forEach(getNameAndProvince);

// 2. Use `map` to create a new array of province names in all uppercase and log to console
const provincesInUppercase = provinces.map((province) => province.toUpperCase());
console.log(provincesInUppercase);

// 3. Create new array using `map` that contains the length of each name
const lengthOfEachName = names.map((name) => name.length);
console.log(lengthOfEachName);

// 4. Use `sort` to alphabetically sort the provinces
const provincesInAlphabeticalOrder = provinces.sort();
console.log(provincesInAlphabeticalOrder);

// 5. Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
const result = provinces.filter((province) => !province.includes('Cape'));
console.log(result);

// 6. Create boolean array using `map` and `some` to determine if a name contains the letter 'S'.
// `some` returns a single boolean value so I did not use it
const hasLetterS = names.map((name) => name.toLowerCase().includes('s'));
console.log(hasLetterS);

// 7. Use `reduce` to transform the names array into an object mapping names to their respective provinces.
const nameAndProvinceObject = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  return map;
}, {});

console.log(nameAndProvinceObject);

// ADVANCED EXERCIES: ——————————————————————————————————————————

// 1. Iterate over the products array, logging each product name.
// I used the `forEach` method to iterate over the products array and console log 
// each product property of the current object being iterated over ${object.property}
products.forEach((product) => {
  console.log(`Product: ${product.product}`);
  }
);