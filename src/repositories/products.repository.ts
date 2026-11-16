import { Product } from '../models/product.model';

export interface IProductsRepository {
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
}

export class ProductsRepository implements IProductsRepository {
    private products: Product[] = [
        { id: '1', name: 'Laptop', description: 'High performance laptop', price: 999.99 },
        { id: '2', name: 'Smartphone', description: 'Latest model smartphone', price: 699.99 }
    ];

    async findAll(): Promise<Product[]> {
        // TODO(reto): Implementar la lógica para obtener todos los productos
        throw new Error('Method not implemented');
    }

    async findById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar la lógica para obtener un producto por ID
        throw new Error('Method not implemented');
    }
}