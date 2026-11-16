# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/controllers/products.controller.ts` — La fase "Definición y validación de endpoints" se implementa aqui: este archivo es el ejercicio.
- `src/repositories/products.repository.ts` — La logica del reto vive aqui: la seleccion por fase solo encontraba pegamento.
- `src/__tests__/products.controller.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construccion de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Exposición del catálogo de productos a través de endpoints REST
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición y validación de endpoints — objetivo: Definir y validar los endpoints REST para el catálogo de productos. — entregable (NO resolver): Endpoints REST definidos y validados para listar y obtener productos.
- Fase 2: Manejo de errores — objetivo: Implementar el manejo centralizado de errores en los endpoints REST. — entregable (NO resolver): Endpoints REST con manejo centralizado de errores para validación y producto no encontrado.
- Fase 3: Refactorización y optimización — objetivo: Refactorizar y optimizar el código de los endpoints REST. — entregable (NO resolver): Endpoints REST refactorizados y optimizados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/jest": "30.0.0",
    "express": "4.22.3",
    "jest": "30.5.2",
    "ts-jest": "29.4.15",
    "zod": "4.6.7"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/controllers/products.controller.ts ===
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

// === ARCHIVO: src/services/products.service.ts ===
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

// === ARCHIVO: src/repositories/products.repository.ts ===
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

// === ARCHIVO: src/models/product.model.ts ===
import { z } from 'zod';

export const ProductSchema = z.object({
    id: z.string().min(1, { message: 'ID is required' }),
    name: z.string().min(1, { message: 'Name is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' })
});

export type Product = z.infer<typeof ProductSchema>;

// === ARCHIVO: src/middlewares/error.middleware.ts ===
import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { RequestValidationError, NotFoundError } from '../utils/errors';

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (err instanceof ZodError) {
        const validationErrors: { path: string; message: string }[] = err.issues.map((issue: ZodIssue) => ({
            path: issue.path.join('.'),
            message: issue.message
        }));
        res.status(400).json({
            message: 'Request validation failed',
            errors: validationErrors
        });
    } else if (err instanceof RequestValidationError) {
        res.status(400).json({
            message: err.message,
            errors: err.errors
        });
    } else if (err instanceof NotFoundError) {
        res.status(404).json({
            message: err.message
        });
    } else {
        console.error('Unexpected error:', err);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export const errorHandler = errorMiddleware;

// === ARCHIVO: src/middlewares/validation.middleware.ts ===
import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema, ZodError, ZodIssue } from 'zod';
import { RequestValidationError } from '../utils/errors';

export const validateRequest = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const validationErrors: ZodIssue[] = error.issues;
                next(new RequestValidationError('Request validation failed', validationErrors));
            } else {
                next(error);
            }
        }
    };
};

export const validateProductId = (req: Request, res: Response, next: NextFunction): void => {
    const idSchema = z.string().min(1, { message: 'ID is required' });
    try {
        idSchema.parse(req.params.id);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const validationErrors: ZodIssue[] = error.issues;
            next(new RequestValidationError('Invalid product ID', validationErrors));
        } else {
            next(error);
        }
    }
};

// === ARCHIVO: src/utils/errors.ts ===
import { ZodError, ZodIssue } from 'zod';

export class RequestValidationError extends Error {
  public readonly errors: ZodIssue[];
  public readonly statusCode: number = 400;

  constructor(message: string, errors: ZodIssue[]) {
    super(message);
    this.name = 'RequestValidationError';
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      message: this.message,
      errors: this.errors,
    };
  }
}

export class NotFoundError extends Error {
  public readonly statusCode: number = 404;

  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}

export class DatabaseError extends Error {
  public readonly statusCode: number = 500;
  public readonly originalError?: Error;

  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'DatabaseError';
    this.originalError = originalError;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}

export class InternalServerError extends Error {
  public readonly statusCode: number = 500;

  constructor(message: string = 'Internal Server Error') {
    super(message);
    this.name = 'InternalServerError';
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}

// === ARCHIVO: src/routes/products.routes.ts ===
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

// === ARCHIVO: src/main.ts ===
import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});

// === ARCHIVO: src/app.ts ===
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

// === ARCHIVO: src/__tests__/products.controller.spec.ts ===
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
```
