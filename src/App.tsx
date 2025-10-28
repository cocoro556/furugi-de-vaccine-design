import AdminLayout from './components/admin/AdminLayout';

function App() {
  const currentUser = { name: '管理者様', email: 'admin@example.com' };

  return <AdminLayout onLogout={() => {}} currentUser={currentUser} />;
}

export default App;
