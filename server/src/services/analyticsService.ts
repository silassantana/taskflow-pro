import { Task } from '../models/Task';
import mongoose from 'mongoose';

export async function projectProgress(projectId: string) {
  const pid = new mongoose.Types.ObjectId(projectId);
  const total = await Task.countDocuments({ project: pid });
  if (total === 0) return { total: 0, done: 0, percent: 0 };
  const done = await Task.countDocuments({ project: pid, status: 'done' });
  return { total, done, percent: Math.round(done / total * 100) };
}