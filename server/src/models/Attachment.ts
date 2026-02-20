import mongoose, { Schema, Document } from 'mongoose';

export interface IAttachment extends Document {
  task: mongoose.Types.ObjectId;
  filename: string;
  mimeType: string;
  size: number;
  createdAt: Date;
}

const AttachmentSchema = new Schema<IAttachment>({
  task: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
  filename: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Attachment = mongoose.model<IAttachment>('Attachment', AttachmentSchema);