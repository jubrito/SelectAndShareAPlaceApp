import { Product } from "./product.model";
import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

const products = [
  { title: "Carpet", price: 37 },
  { title: "Book", price: 101 },
];

// Old/Manual version:
// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// })
const classToConvert = Product;
const dataToBeTransformed = products;
const productsAsClassInstances = plainToClass(classToConvert, dataToBeTransformed)
for (const prod of productsAsClassInstances) {
    console.log(prod.getInformation());
}

// Class validation using decorators from class-validation 
const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('Validation errors: ')
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
})