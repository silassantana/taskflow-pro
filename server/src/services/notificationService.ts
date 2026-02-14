// Notification service - creates and retrieves per-user alerts
import { Notification } from '../models/Notification';

export async function createNotification(userId: string, type: string, message: string) {
  return Notification.create({ user: userId, type, message });
}

export async function getUserNotifications(userId: string) {
  return Notification.find({ user: userId }).sort({ createdAt: -1 });
}