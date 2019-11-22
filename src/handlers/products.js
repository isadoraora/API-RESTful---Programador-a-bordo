const ProductModel = require('../models/product')

const getAll = async (request, h) => {
    const products = await ProductModel.find({});
    return products;
}

const save = async (req, h) => {
    const { name, price } = req.payload;

    const product = new ProductModel;
    product.name = name;
    product.price = price;

    await product.save();
    return h.response({ data: product }).code(201)
};

module.exports = {
    getAll,
    save
};