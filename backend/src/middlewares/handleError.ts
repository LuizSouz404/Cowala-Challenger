import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppErrors';

export function handleErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({ error: err.message });

  return response
    .status(500)
    .json({ status: 'error', messgae: 'Internal server error' });
}
