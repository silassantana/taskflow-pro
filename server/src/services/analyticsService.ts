import { Task } from '../models/Task';
import mongoose from 'mongoose';

export function calculateProgress(total: number, done: number) {
  if (total <= 0) return { total: 0, done: 0, percent: 0 };
  const completed = Math.min(Math.max(done, 0), total);
  return {
    total,
    done: completed,
    percent: Math.round(completed / total * 100)
  };
}

export async function projectProgress(projectId: string) {
  const pid = new mongoose.Types.ObjectId(projectId);
  const total = await Task.countDocuments({ project: pid });
  if (total === 0) return calculateProgress(0, 0);
  const done = await Task.countDocuments({ project: pid, status: 'done' });
  return calculateProgress(total, done);
}
