import { Product } from '../models/product.model';
import { ProductsRepository } from '../repositories/products.repository';
import { NotFoundError } from '../utils/errors';

export class ProductsService {
    constructor(private productsRepository: ProductsRepository) {}

    async getAllProducts(): Promise<Product[]> {
        return this.productsRepository.findAll();
    }

    async getProductById(id: string): Promise<Product> {
        const product = await this.productsRepository.findById(id);
        if (!product) {
            throw new NotFoundError(`Product with id ${id} not found`);
        }
        return product;
    }
}