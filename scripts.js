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
