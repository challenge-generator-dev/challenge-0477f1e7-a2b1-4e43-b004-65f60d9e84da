import { Router, Request, Response, NextFunction } from 'express';
import { ProductsController } from '../controllers/products.controller';
import { ProductsService } from '../services/products.service';
import { ProductsRepository } from '../repositories/products.repository';
import { validateProductId } from '../middlewares/validation.middleware';

const router = Router();

const productsRepository = new ProductsRepository();
const productsService = new ProductsService(productsRepository);
const productsController = new ProductsController(productsService);

router.get(
  '/products',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await productsController.getAllProducts(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/products/:id',
  validateProductId,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await productsController.getProductById(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
export const productsRouter = router;