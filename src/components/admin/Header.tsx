import {
  Package,
  User,
  LogOut,
} from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentUser: { name: string; email: string };
  onLogout: () => void;
}

export default function Header({ currentUser, onLogout }: HeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-slate-700 shadow-lg border-b border-slate-600">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">EC管理システム</h1>
            <p className="text-xs text-slate-300">古着deワクチン</p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-slate-600 transition-all"
          >
            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">{currentUser.name}</div>
              <div className="text-xs text-slate-300">{currentUser.email}</div>
            </div>
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>ログアウト</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
