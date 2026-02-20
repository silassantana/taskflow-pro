import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from './store';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { ProjectList } from './components/ProjectList';

const App: React.FC = () => {
  const auth = useSelector((s: RootState)=>s.auth);
  return <div>
    <h2>TaskFlow Pro (Starter)</h2>
    {!auth.token && <><LoginForm /><RegisterForm /></>}
    {auth.token && <ProjectList />}
  </div>;
};

createRoot(document.getElementById('root')!).render(<Provider store={store}><App /></Provider>);