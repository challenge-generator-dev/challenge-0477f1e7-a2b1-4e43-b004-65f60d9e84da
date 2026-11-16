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