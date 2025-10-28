import { useState } from 'react';
import AdminLayout from './components/admin/AdminLayout';
import LoginPage from './components/admin/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser] = useState({ name: '管理者様', email: 'admin@example.com' });

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return <AdminLayout onLogout={() => setIsAuthenticated(false)} currentUser={currentUser} />;
}

export default App;
