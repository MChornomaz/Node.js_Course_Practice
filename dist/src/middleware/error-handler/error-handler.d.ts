import { type Request, type Response, type NextFunction } from 'express';
declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
export { errorHandler };
