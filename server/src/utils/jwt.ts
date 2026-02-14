// JWT helpers - sign and verify auth tokens (2 h expiry by default)
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'dev-secret';

export interface AuthTokenPayload { userId: string; roles: string[]; }

export function signAuthToken(payload: AuthTokenPayload): string {
  return jwt.sign(payload, SECRET, { expiresIn: '2h' });
}

export function verifyAuthToken(token: string): AuthTokenPayload | null {
  try { return jwt.verify(token, SECRET) as AuthTokenPayload; } catch { return null; }
}