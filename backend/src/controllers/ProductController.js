import Product from "../models/ProductModel.js";

const registerProduct = async (product) => {
    const { name, sku, stock, price, category, store, image } = product;

    const newProduct = new Product({
        name: name,
        sku: sku,
        stock: stock,
        price: price,
        category: category,
        store: store,
        image: image
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

const getProductByStore = async (prod) => {
    const { store } = prod;
    const product = await Product.find({store: store})
    return product
}

const updateProduct = async (product, sku) => {
    const { name, stock, price, category, store, image } = product;
    const Sku = sku;
   /*  console.log(Sku);
    console.log(product) */

    await Product.findOneAndUpdate({sku : sku },{
        name: name,
        stock: stock,
        price: price,
        category: category,
        store: store,
        image: image
    })

    return "Producto Actualizado con éxito!!";
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
    getProductByStore,
    updateProduct,
    deleteProduct
}

export default productController
