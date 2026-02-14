// Auth middleware - validates Bearer JWT on every protected route
import { Request, Response, NextFunction } from 'express';
import { verifyAuthToken } from '../utils/jwt';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Missing auth header' });
  const token = header.replace('Bearer ', '');
  const payload = verifyAuthToken(token);
  if (!payload) return res.status(401).json({ error: 'Invalid token' });
  (req as any).auth = payload;
  next();
}
