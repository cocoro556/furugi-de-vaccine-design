import { useState } from 'react';
import { Search, Eye, UserPlus } from 'lucide-react';

export default function CustomerList() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 'CUS-0001',
      name: '山田 太郎',
      furigana: 'ヤマダ タロウ',
      type: '個人',
      phone: '03-1234-5678',
      prefecture: '東京都',
      address: '渋谷区1-2-3',
      email: 'yamada@example.com',
      gender: '男性',
      age: 35,
      firstPurchase: '2023-01-15',
      lastPurchase: '2023-11-01',
      lastLogin: '2023-11-01 14:30',
      daysSinceMember: 290,
      purchaseCount: 5,
      totalAmount: 48500,
    },
    {
      id: 'CUS-0002',
      name: '佐藤 花子',
      furigana: 'サトウ ハナコ',
      type: '個人',
      phone: '03-2345-6789',
      prefecture: '神奈川県',
      address: '横浜市中区4-5-6',
      email: 'sato@example.com',
      gender: '女性',
      age: 28,
      firstPurchase: '2023-03-20',
      lastPurchase: '2023-11-01',
      lastLogin: '2023-11-01 13:10',
      daysSinceMember: 226,
      purchaseCount: 3,
      totalAmount: 18200,
    },
    {
      id: 'CUS-0003',
      name: '株式会社テスト商事',
      furigana: 'カブシキガイシャテストショウジ',
      type: '法人',
      phone: '03-3456-7890',
      prefecture: '千葉県',
      address: '千葉市美浜区7-8-9',
      email: 'info@test-corp.jp',
      gender: '-',
      age: null,
      firstPurchase: '2023-05-10',
      lastPurchase: '2023-10-15',
      lastLogin: '2023-10-28 16:45',
      daysSinceMember: 175,
      purchaseCount: 12,
      totalAmount: 156000,
    },
    {
      id: 'CUS-0004',
      name: '田中 一郎',
      furigana: 'タナカ イチロウ',
      type: '個人',
      phone: '03-4567-8901',
      prefecture: '埼玉県',
      address: 'さいたま市大宮区10-11-12',
      email: 'tanaka@example.com',
      gender: '男性',
      age: 42,
      firstPurchase: '2023-02-28',
      lastPurchase: '2023-09-20',
      lastLogin: '2023-10-30 09:20',
      daysSinceMember: 246,
      purchaseCount: 7,
      totalAmount: 68400,
    },
    {
      id: 'CUS-0005',
      name: '鈴木 美咲',
      furigana: 'スズキ ミサキ',
      type: '個人',
      phone: '03-5678-9012',
      prefecture: '東京都',
      address: '世田谷区13-14-15',
      email: 'suzuki@example.com',
      gender: '女性',
      age: 31,
      firstPurchase: '2023-08-05',
      lastPurchase: '2023-10-28',
      lastLogin: '2023-10-30 11:15',
      daysSinceMember: 88,
      purchaseCount: 4,
      totalAmount: 22800,
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">顧客管理</h1>
          <p className="text-sm text-gray-600">顧客情報の確認と管理</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm shadow-sm">
          <UserPlus className="w-4 h-4" />
          新規顧客登録
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="顧客ID、氏名、電話番号、メールアドレスで検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option value="all">すべての顧客</option>
              <option value="individual">個人</option>
              <option value="corporate">法人</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  顧客ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  氏名/会社名
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  区分
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  連絡先
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  住所
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  購入実績
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  最終購入日
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{customer.id}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900">{customer.name}</div>
                    <div className="text-xs text-gray-500">{customer.furigana}</div>
                    <div className="text-xs text-gray-500">{customer.email}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${
                        customer.type === '個人'
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-purple-700 bg-purple-50'
                      }`}
                    >
                      {customer.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.phone}</div>
                    {customer.gender !== '-' && (
                      <div className="text-xs text-gray-500">
                        {customer.gender} {customer.age && `/ ${customer.age}歳`}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{customer.prefecture}</div>
                    <div className="text-xs text-gray-500">{customer.address}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      ¥{customer.totalAmount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">{customer.purchaseCount}回購入</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.lastPurchase}</div>
                    <div className="text-xs text-gray-500">
                      会員歴 {customer.daysSinceMember}日
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">全5件を表示</div>
        </div>
      </div>
    </div>
  );
}
