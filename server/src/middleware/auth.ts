// Auth middleware - validates Bearer JWT on every protected route
// Auth middleware - validates Bearer JWT on every protected route
import { Request, Response, NextFunction } from 'express';
import { verifyAuthToken } from '../utils/jwt';

export function parseBearerToken(header?: string): string | null {
  const match = header?.match(/^Bearer ([^\s]+)$/);
  return match?.[1] ?? null;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Missing auth header' });
  const token = parseBearerToken(header);
  if (!token) return res.status(401).json({ error: 'Invalid auth header' });
  const payload = verifyAuthToken(token);
  if (!payload) return res.status(401).json({ error: 'Invalid token' });
  (req as any).auth = payload;
  next();
}
