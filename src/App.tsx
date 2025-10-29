import { useState } from 'react';
import AdminLayout from './components/admin/AdminLayout';
import AlternativeLoginPage from './components/admin/AlternativeLoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentUser = { name: '管理者様', email: 'admin@example.com' };

  if (!isLoggedIn) {
    return <AlternativeLoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <AdminLayout onLogout={() => setIsLoggedIn(false)} currentUser={currentUser} />;
}

export default App;
