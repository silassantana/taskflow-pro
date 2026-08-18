import { NextFunction, Request, Response } from 'express';
import { authMiddleware, parseBearerToken } from '../server/src/middleware/auth';
import { signAuthToken, verifyAuthToken } from '../server/src/utils/jwt';

describe('authentication', () => {
  const payload = { userId: 'user-123', roles: ['user'] };

  it('signs and verifies an authentication token', () => {
    const decoded = verifyAuthToken(signAuthToken(payload));
    expect(decoded).toMatchObject(payload);
  });

  it('rejects malformed tokens', () => {
    expect(verifyAuthToken('not-a-token')).toBeNull();
  });

  it('only accepts a strict Bearer authorization header', () => {
    expect(parseBearerToken('Bearer signed-token')).toBe('signed-token');
    expect(parseBearerToken('Basic signed-token')).toBeNull();
    expect(parseBearerToken('Bearer token with spaces')).toBeNull();
  });

  it('attaches a valid token payload to a request', () => {
    const req = {
      headers: { authorization: `Bearer ${signAuthToken(payload)}` }
    } as Request;
    const status = jest.fn().mockReturnThis();
    const json = jest.fn();
    const res = { status, json } as unknown as Response;
    const next = jest.fn() as NextFunction;

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect((req as Request & { auth: typeof payload }).auth).toMatchObject(payload);
    expect(status).not.toHaveBeenCalled();
  });

  it('returns 401 when the authorization header is missing', () => {
    const req = { headers: {} } as Request;
    const json = jest.fn();
    const status = jest.fn().mockReturnValue({ json });
    const res = { status } as unknown as Response;
    const next = jest.fn() as NextFunction;

    authMiddleware(req, res, next);

    expect(status).toHaveBeenCalledWith(401);
    expect(json).toHaveBeenCalledWith({ error: 'Missing auth header' });
    expect(next).not.toHaveBeenCalled();
  });
});
