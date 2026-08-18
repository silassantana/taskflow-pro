import { buildTaskQuery } from '../server/src/services/filterService';

describe('buildTaskQuery', () => {
  it('always scopes tasks to the selected project', () => {
    expect(buildTaskQuery('project-1', {})).toEqual({ project: 'project-1' });
  });

  it('builds status, assignee, text, and date filters', () => {
    expect(buildTaskQuery('project-1', {
      status: 'open',
      assignee: 'user-1',
      q: 'release',
      dueFrom: '2026-08-01',
      dueTo: '2026-08-31'
    })).toEqual({
      project: 'project-1',
      status: 'open',
      assignee: 'user-1',
      title: { $regex: 'release', $options: 'i' },
      dueDate: {
        $gte: new Date('2026-08-01'),
        $lte: new Date('2026-08-31')
      }
    });
  });
});
