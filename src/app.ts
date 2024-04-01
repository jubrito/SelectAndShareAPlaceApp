import { Product } from "./product.model";
import "reflect-metadata";
import { plainToClass } from 'class-transformer';

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