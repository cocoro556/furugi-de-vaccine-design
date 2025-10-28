import { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';
import CustomerList from './pages/CustomerList';
import ReviewList from './pages/ReviewList';
import InquiryList from './pages/InquiryList';
import AnalyticsList from './pages/AnalyticsList';
import EmailTemplateList from './pages/EmailTemplateList';
import SalesReport from './pages/SalesReport';
import SettingsPage from './pages/SettingsPage';

interface AdminLayoutProps {
  onLogout: () => void;
  currentUser: { name: string; email: string };
}

export default function AdminLayout({ onLogout, currentUser }: AdminLayoutProps) {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'basic-settings':
        return <Dashboard currentUser={currentUser} />;
      case 'design-pc':
        return <Dashboard currentUser={currentUser} />;
      case 'design-sp':
        return <Dashboard currentUser={currentUser} />;
      case 'management':
        return <Dashboard currentUser={currentUser} />;
      case 'dashboard':
        return <Dashboard currentUser={currentUser} />;
      case 'orders':
        return <OrderList />;
      case 'products':
        return <ProductList />;
      case 'customers':
        return <CustomerList />;
      case 'reviews':
        return <ReviewList />;
      case 'inquiries':
        return <InquiryList />;
      case 'analytics':
        return <AnalyticsList />;
      case 'email-templates':
        return <EmailTemplateList />;
      case 'sales-report':
        return <SalesReport />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLogout={onLogout}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}
