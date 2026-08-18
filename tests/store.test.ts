import authReducer, { logout, setAuth } from '../client/src/store/authSlice';
import notificationReducer, { setNotifications } from '../client/src/store/notificationSlice';
import taskReducer, { setTasks } from '../client/src/store/taskSlice';

describe('Redux state', () => {
  it('stores and clears authenticated user state', () => {
    const authenticated = authReducer(undefined, setAuth({
      token: 'token',
      user: { id: '1', email: 'dev@example.com', name: 'Dev' }
    }));

    expect(authenticated.token).toBe('token');
    expect(authReducer(authenticated, logout())).toEqual({});
  });

  it('replaces task and notification collections', () => {
    const tasks = [{ _id: 'task-1', title: 'Ship release', status: 'open' }];
    const notifications = [{ _id: 'note-1', type: 'task', message: 'Assigned', read: false }];

    expect(taskReducer(undefined, setTasks(tasks)).items).toEqual(tasks);
    expect(notificationReducer(undefined, setNotifications(notifications)).items).toEqual(notifications);
  });
});
