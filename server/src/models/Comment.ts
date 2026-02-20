import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  task: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
  body: string;
  createdAt: Date;
}

const CommentSchema = new Schema<IComment>({
  task: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Comment = mongoose.model<IComment>('Comment', CommentSchema);