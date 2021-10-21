import Product from "../models/ProductModel.js";

const registerProduct = async (product) => {
    const { name, sku, stock, price, category, store } = product;

    const newProduct = new Product({
        name: name,
        sku: sku,
        stock: stock,
        price: price,
        category: category,
        store: store
    })

    await newProduct.save();
    return newProduct;
}

const getProducts = async () => {
    const products = await Product.find({});
    return products
}

const getProductBySku = async (prod) => {
    const { sku } = prod;
    const product = await Product.findOne({ sku })
    return product
}

const updateProduct = async (product) => {
    const { name, stock, price, category, store } = product;

    await Product.findOneAndUpdate({
        name: name,
        stock: stock,
        price: price,
        category: category,
        store: store
    })

    return "Usuario Actualizado con éxito!!";
}

const deleteProduct = async (product) => {
    const { sku } = product;

    await Product.findOneAndDelete({ sku })

    return "Usuario Eliminado con éxito!!";
}

const productController = {
    registerProduct,
    getProducts,
    getProductBySku,
    updateProduct,
    deleteProduct
}

export default productController
