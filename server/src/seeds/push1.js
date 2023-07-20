import Product from "../models/product.js";
import { faker } from "@faker-js/faker";
import slugify from "@sindresorhus/slugify";

const up = async () => {

    try {

        const canSeed = await Product.find();
        if(canSeed.length > 0) return;

        const products = Array.from({length: 100}).map( _ => {

            const name = faker.commerce.productName();
            const slug = slugify(name);
            
            return {
                name,
                slug,
                features: [
                    {text: faker.lorem.words(4)},
                    {text: faker.lorem.words(4)},
                    {text: faker.lorem.words(4)},
                    {text: faker.lorem.words(4)}
                ],
                desc: faker.commerce.productDescription(),
                price: faker.commerce.price({min: 100, max: 100000, dec: 2}),
                lang: 'en'
            }
        });

        await Product.insertMany(products);
    } catch(err) {
        console.log(err);
    }
    
};

const down = async () => {
    
    try {
        await Product.deleteMany();
    } catch(err) {
        console.log(err);
    }
    
};

export { up, down };