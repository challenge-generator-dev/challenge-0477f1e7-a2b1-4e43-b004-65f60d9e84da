import { Request, Response, NextFunction } from 'express';
import { ProductsController } from '../controllers/products.controller';
import { ProductsService } from '../services/products.service';
import { ProductsRepository } from '../repositories/products.repository';
import { NotFoundError, RequestValidationError } from '../utils/errors';

describe('ProductsController', () => {
  let controller: ProductsController;
  let mockService: jest.Mocked<ProductsService>;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    const repository = new ProductsRepository();
    const service = new ProductsService(repository);
    controller = new ProductsController(service);
    
    mockService = service as jest.Mocked<ProductsService>;
    
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    
    mockNext = jest.fn();
  });

  describe('getAllProducts', () => {
    it('TODO(reto): debe retornar todos los productos con código 200', async () => {
      // Arrange: configurar mock del servicio para retornar productos
      // Act: llamar controller.getAllProducts
      // Assert: verificar que res.status fue llamado con 200 y res.json con el array de productos
    });

    it('TODO(reto): debe manejar errores del servicio y pasar al siguiente middleware', async () => {
      // Arrange: configurar mock del servicio para lanzar error
      // Act: llamar controller.getAllProducts
      // Assert: verificar que next fue llamado con el error
    });
  });

  describe('getProductById', () => {
    it('TODO(reto): debe retornar un producto por ID con código 200', async () => {
      // Arrange: configurar mockReq.params.id con un ID válido, mock del servicio retorna producto
      // Act: llamar controller.getProductById
      // Assert: verificar que res.status fue llamado con 200 y res.json con el producto
    });

    it('TODO(reto): debe retornar 404 cuando el producto no existe', async () => {
      // Arrange: configurar mock del servicio para retornar null
      // Act: llamar controller.getProductById
      // Assert: verificar que se lanzó NotFoundError
    });

    it('TODO(reto): debe validar que el ID tenga el formato correcto', async () => {
      // Arrange: configurar mockReq.params.id con formato inválido
      // Act: llamar controller.getProductById
      // Assert: verificar que se lanzó RequestValidationError
    });
  });
});