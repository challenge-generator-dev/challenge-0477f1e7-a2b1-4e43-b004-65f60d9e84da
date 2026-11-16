// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { NotFoundError } from '../utils/errors';

export class ProductsController {
    constructor(private productsService: ProductsService) {}

    async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
      throw new Error('TODO(reto): getAllProducts');
    }

    async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
      throw new Error('TODO(reto): getProductById');
    }
}