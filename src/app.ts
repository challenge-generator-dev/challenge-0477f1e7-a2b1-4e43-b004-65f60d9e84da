import express, { Application, Request, Response, NextFunction } from 'express';
import productsRoutes from './routes/products.routes';
import { errorMiddleware } from './middlewares/error.middleware';

export const app: Application = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(productsRoutes);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use(errorMiddleware);