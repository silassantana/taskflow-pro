// Comment controller - threaded discussion attached to tasks
// Comment controller - threaded discussion attached to tasks
import { Request, Response } from 'express';
import { Comment } from '../models/Comment';

export async function addComment(req: Request, res: Response) {
  const { task, body } = req.body;
  const author = (req as any).auth.userId;
  const comment = await Comment.create({ task, body, author });
  res.json(comment);
}

export async function listComments(req: Request, res: Response) {
  const { taskId } = req.params;
  const comments = await Comment.find({ task: taskId }).sort({ createdAt: 1 });
  res.json(comments);
}