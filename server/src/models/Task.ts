// Task model - core work item with status lifecycle and due dates
// Task model - core work item with status lifecycle and due dates
import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  project: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  assignee?: mongoose.Types.ObjectId;
  status: 'open' | 'in_progress' | 'done';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>({
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  description: { type: String },
  assignee: { type: Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['open', 'in_progress', 'done'], default: 'open' },
  dueDate: { type: Date },
}, { timestamps: true });

export const Task = mongoose.model<ITask>('Task', TaskSchema);