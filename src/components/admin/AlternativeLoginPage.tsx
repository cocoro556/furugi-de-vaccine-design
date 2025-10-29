import { useState } from 'react';
import { LogIn } from 'lucide-react';

interface AlternativeLoginPageProps {
  onLogin: () => void;
}

export default function AlternativeLoginPage({ onLogin }: AlternativeLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm">
        <div className="bg-[#4A5568] px-6 py-10 text-center rounded-t-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white mb-1">ログイン画面</h1>
          <p className="text-sm text-gray-300">楽楽リピート管理システム</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4A5568] text-white py-2.5 rounded font-medium hover:bg-[#3d4553] transition-colors"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
