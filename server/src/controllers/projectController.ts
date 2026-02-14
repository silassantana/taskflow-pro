// Project controller - create, list, and fetch analytics stats
import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { projectProgress } from '../services/analyticsService';

export async function createProject(req: Request, res: Response) {
  const { name, description } = req.body;
  const userId = (req as any).auth.userId;
  const project = await Project.create({ name, description, members: [userId] });
  res.json(project);
}

export async function listProjects(_req: Request, res: Response) {
  const projects = await Project.find().limit(100).sort({ createdAt: -1 });
  res.json(projects);
}

export async function projectStats(req: Request, res: Response) {
  const stats = await projectProgress(req.params.id);
  res.json(stats);
}