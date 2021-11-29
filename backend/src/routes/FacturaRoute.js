import { Router } from 'express';
import Factura from '../models/FacturaModel.js';
import User from '../models/UserModel.js'
import facturaController from '../controllers/FacturaController.js' //En el controlador se especifica que quiero que me devuelva . Hace la lógica

const facturaRoute = Router();

facturaRoute.post('/register-invoice', async (req, res) => {
  let data = await facturaController.register(req.body)
  res.json(data)
});

facturaRoute.get('/get-invoices-:email', async (req, res) => {

  const {email} = req.params;
  console.log(email)

  const user = await User.findOne({ email: email });

  await Factura.find({ user: user._id }).populate('user').exec((error, factura) => {
    if(error){
      console.log(error)
  }else{
    res.json(factura)
  }
  })
})

facturaRoute.get('/invoices-by-:store', async (req, res) => {

  const {store} = req.params;

  await Factura.find({ store:store }).populate('user').exec((error, factura) => {
    if(error){
      console.log(error)
  }else{
    res.json(factura)
  }
  })
})

facturaRoute.get('/get-invoice-:id', async (req, res) => {

  const { id } = req.params
  console.log(id)

  await Factura.findOne({_id: id}).populate('user').exec((error, factura) => {
    if(error){
      console.log(error)
  }else{
    res.json(factura)
  }
  })

})
export default facturaRoute;
