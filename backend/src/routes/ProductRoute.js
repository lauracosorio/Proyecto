import { Router } from 'express';
import { check } from 'express-validator';
import { validationResult } from "express-validator";
import Product from '../models/ProductModel.js';
import productController from '../controllers/ProductController.js';


const productRoute = Router();

productRoute.post('/register-product', [
    check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('sku', 'El SKU es obligatorio').isNumeric().matches(/^\d+$/),
    check('stock', 'El producto debe tener stock').isNumeric().matches(/^\d+$/),
    check('price', 'El producto debe tener un precio valido').not().isEmpty(),
    check('category', 'El producto debe contar con categoría').not().isEmpty(),
    check('store', 'El producto debe pertenecer a una tienda').not().isEmpty(),
    check('image', 'El producto debe tener una imagen asociada').not().isEmpty(),

], async (req, res) => {

    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err)
        return res.status(400).json({ Error: err.array() })

    }

    const { sku } = req.body;
    const product = await Product.findOne({ sku });

    if (product) {
        res.status(400);
        res.json({
            message: "Ya existe un producto con este Sku",
        });
        return;
    } else {
        let data = await productController.registerProduct(req.body)
        res.json(data)
    }
})

productRoute.get('/get-products', async (req, res) => {

    const product = await Product.find()
    console.log(product)

    if (product.length <= 0) {
        res.status(400);
        res.json({
            message: "No hay productos registrados",
        });
        return;
    } else {
        let data = await productController.getProducts(req.body)
        res.json(data)
    }
})

productRoute.get(`/get-product-:sku`, async (req, res) => {

    const sku = req.params.sku;
    console.log(sku)

    const product = await Product.findOne({ sku })
    console.log(product)

    if (!product) {
        res.status(400);
        res.json({
            message: "Producto con ese SKU no existe",
        });
        return;
    } else {
        let data = await productController.getProductBySku(req.body)
        res.json(data)
    }
})
productRoute.get(`/get-products-:store`, async (req, res) => {

    const store = req.params.store;
    console.log(store)

    const product = await Product.find({ store: store })

    if (!product) {
        res.status(400);
        res.json({
            message: "No hay productos registrados",
        });
        return;
    } else {
        let data = await productController.getProductByStore(req.params)
        res.json(data)
    }
})

productRoute.put(`/update-product-:sku`, async (req, res) => {

    console.log(req)
    const sku = req.params.sku;

    const product = await Product.findOne({ sku })

    if (!product) {
        res.status(400);
        res.json({
            message: "Producto con ese SKU no encontrado",
        });
        return;
    } else {
        let data = await productController.updateProduct(req.body, sku)
        res.json(data)
    }
})
productRoute.delete(`/delete-product-:sku`, async (req, res) => {

    const sku = req.params.sku;

    const product = await Product.findOne({ sku })

    if (!product) {
        res.status(400);
        res.json({
            message: "Producto con ese SKU no encontrado",
        });
        return;
    } else {
        let data = await productController.deleteProduct(req.params)
        res.json(data)
    }
})


export default productRoute;