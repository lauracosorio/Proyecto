import Invoice from "../models/FacturaModel.js";
import User from "../models/UserModel.js";

const register = async (invoice) => {
  console.log(invoice)
    const {product, amount, user} = invoice;
                                        
    const client = await User.findOne({ _id: user });
    console.log(client)
    console.log(client._id)

  if (client) {
    const newInvoice = new Invoice({
        name: product.name,
        store: product.store,
        sku: product.sku,
        stock: product.stock,
        price: product.price,
        amount: amount,
        image: product.image,
        date: product.date,
        user: client
        
    })
    await newInvoice.save();
    return newInvoice;
  } else {
    await user.save();
  }
    //new invoice
    
}

const facturaController = {
    register
}

export default facturaController;