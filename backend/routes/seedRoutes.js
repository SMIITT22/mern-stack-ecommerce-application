import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req, res)=>{
    //await Product.remove({}); this is not working as remove is not a function.
    const createdProducts = await Product.insertMany(data.products)
    res.send({createdProducts});
})

export default seedRouter;