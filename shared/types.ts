// Shared TypeScript interfaces used across client and server
// Shared TypeScript interfaces used across client and server
export interface BasicUser { id: string; email: string; name: string; }
export interface BasicTask { id: string; title: string; status: string; assignee?: string; dueDate?: string; }
export interface ProjectStats { total: number; done: number; percent: number; }