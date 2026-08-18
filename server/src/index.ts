// Server entry point - Express app, MongoDB connection, Socket.IO setup
// Server entry point - Express app, MongoDB connection, Socket.IO setup
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { register, login } from './controllers/authController';
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import { createProject, listProjects, projectStats } from './controllers/projectController';
import { createTask, listTasks, updateTask } from './controllers/taskController';
import { addComment, listComments } from './controllers/commentController';
import { myNotifications } from './controllers/notificationController';
import { healthCheck } from './controllers/healthController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', healthCheck);

app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

app.post('/api/projects', authMiddleware, createProject);
app.get('/api/projects', authMiddleware, listProjects);
app.get('/api/projects/:id/stats', authMiddleware, projectStats);

app.post('/api/tasks', authMiddleware, createTask);
app.get('/api/tasks', authMiddleware, listTasks);
app.patch('/api/tasks/:id', authMiddleware, updateTask);

app.post('/api/comments', authMiddleware, addComment);
app.get('/api/comments/:taskId', authMiddleware, listComments);

app.get('/api/notifications', authMiddleware, myNotifications);

app.use(errorHandler);

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  socket.on('joinProject', (projectId: string) => {
    socket.join(`project:${projectId}`);
  });
  socket.on('taskUpdated', (payload) => {
    io.to(`project:${payload.project}`).emit('taskUpdated', payload);
  });
});

async function start() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/taskflow_pro_dev';
  await mongoose.connect(mongoUri);
  const port = process.env.PORT || 4000;
  httpServer.listen(port, () => console.log('Server listening on', port));
}

if (require.main === module) start();

export default app;
