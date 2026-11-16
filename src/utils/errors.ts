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