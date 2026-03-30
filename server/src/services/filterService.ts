// Filter service - builds a MongoDB FilterQuery from request params
// Filter service - builds a MongoDB FilterQuery from request params
import { Task } from '../models/Task';
import { FilterQuery } from 'mongoose';

interface TaskFilters { status?: string; assignee?: string; q?: string; dueFrom?: string; dueTo?: string; }

export async function filterTasks(projectId: string, filters: TaskFilters) {
  const query: FilterQuery<any> = { project: projectId };
  if (filters.status) query.status = filters.status;
  if (filters.assignee) query.assignee = filters.assignee;
  if (filters.q) query.title = { $regex: filters.q, $options: 'i' };
  if (filters.dueFrom || filters.dueTo) {
    query.dueDate = {} as any;
    if (filters.dueFrom) (query.dueDate as any).$gte = new Date(filters.dueFrom);
    if (filters.dueTo) (query.dueDate as any).$lte = new Date(filters.dueTo);
  }
  return Task.find(query).limit(200).sort({ updatedAt: -1 });
}