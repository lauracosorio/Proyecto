import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import userRoute from './routes/UserRoutes.js';
import productRoute from './routes/ProductRoute.js';

const app = express()
const port = 3001

app.use(express.json());
app.use(cors({ origin: true }));
app.use(userRoute);
app.use(productRoute);

app.listen(port, async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Tienda', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error de conexión en la BD")
  }
  console.log(`Server listening at http://localhost:${port}`)
})