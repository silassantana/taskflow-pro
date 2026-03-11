// Auth controller - /register and /login endpoints
// Auth controller - /register and /login endpoints
import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import { signAuthToken } from '../utils/jwt';

export async function register(req: Request, res: Response) {
  const { email, name, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'Email already used' });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, name, passwordHash });
  const token = signAuthToken({ userId: user.id, roles: user.roles });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
  const token = signAuthToken({ userId: user.id, roles: user.roles });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}