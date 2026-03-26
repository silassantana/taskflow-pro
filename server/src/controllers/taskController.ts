// Task controller - create, list, and patch task records
// Task controller - create, list, and patch task records
import { Request, Response } from 'express';
import { Task } from '../models/Task';
import { filterTasks } from '../services/filterService';

export async function createTask(req: Request, res: Response) {
  const { project, title, description, assignee, dueDate } = req.body;
  const task = await Task.create({ project, title, description, assignee, dueDate });
  res.json(task);
}

export async function updateTask(req: Request, res: Response) {
  const updates = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, updates, { new: true });
  if (!task) return res.status(404).json({ error: 'Not found' });
  res.json(task);
}

export async function listTasks(req: Request, res: Response) {
  const { project } = req.query as any;
  if (!project) return res.status(400).json({ error: 'Missing project' });
  const tasks = await filterTasks(project, req.query as any);
  res.json(tasks);
}
