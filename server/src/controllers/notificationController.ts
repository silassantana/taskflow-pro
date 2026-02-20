import { Request, Response } from 'express';
import { getUserNotifications } from '../services/notificationService';

export async function myNotifications(req: Request, res: Response) {
  const userId = (req as any).auth.userId;
  const items = await getUserNotifications(userId);
  res.json(items);
}