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