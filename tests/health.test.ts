import { Request, Response } from 'express';
import { healthCheck } from '../server/src/controllers/healthController';

describe('healthCheck', () => {
  it('reports that the API process is healthy', () => {
    const json = jest.fn();

    healthCheck({} as Request, { json } as unknown as Response);

    expect(json).toHaveBeenCalledWith({ status: 'ok' });
  });
});
