import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookStoreRoutes from './routes/index.route';
import NotFoundError from './common/errors/http404Error';
import errorHandler from '@common/error-handler';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  return res
    .status(200)
    .send({ success: true, message: 'Service health is fine.' });
});

app.use('/api/book-store', bookStoreRoutes);

app.all('*', (req, res, next) => {
  next(new NotFoundError(`Request API route ${req.path} is not found`));
});

//Error Handling Middleware
app.use(errorHandler);

export default app;