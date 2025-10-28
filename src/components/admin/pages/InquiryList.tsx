import { Eye, Trash2 } from 'lucide-react';

export default function InquiryList() {
  const inquiries = [
    {
      id: 'INQ-0001',
      status: '未対応',
      statusColor: 'text-red-700 bg-red-50',
      date: '2023-11-01 16:45',
      memberId: 'CUS-0001',
      name: '山田 太郎',
      email: 'yamada@example.com',
      subject: '古着deワクチンについて',
      content: '回収キットの使い方について詳しく教えていただけますでしょうか。',
    },
    {
      id: 'INQ-0002',
      status: '対応中',
      statusColor: 'text-yellow-700 bg-yellow-50',
      date: '2023-11-01 14:20',
      memberId: 'CUS-0005',
      name: '鈴木 美咲',
      email: 'suzuki@example.com',
      subject: 'その他',
      content: '配送日の変更は可能でしょうか。',
    },
    {
      id: 'INQ-0003',
      status: '対応済み',
      statusColor: 'text-green-700 bg-green-50',
      date: '2023-11-01 10:15',
      memberId: '-',
      name: '高橋 健太',
      email: 'takahashi@example.com',
      subject: '古着deワクチンについて',
      content: 'メディア掲載の件でお問い合わせです。担当者の方をご紹介いただけますか。',
    },
    {
      id: 'INQ-0004',
      status: '対応済み',
      statusColor: 'text-green-700 bg-green-50',
      date: '2023-10-31 15:30',
      memberId: 'CUS-0002',
      name: '佐藤 花子',
      email: 'sato@example.com',
      subject: 'その他',
      content: '領収書の発行をお願いしたいのですが、どのように手続きすればよろしいでしょうか。',
    },
    {
      id: 'INQ-0005',
      status: '対応済み',
      statusColor: 'text-green-700 bg-green-50',
      date: '2023-10-30 11:00',
      memberId: 'CUS-0004',
      name: '田中 一郎',
      email: 'tanaka@example.com',
      subject: '古着deワクチンについて',
      content: '法人での大量注文は可能でしょうか。',
    },
  ];

  const statusCounts = [
    { label: '未対応', count: 1, color: 'text-red-700 bg-red-50' },
    { label: '対応中', count: 1, color: 'text-yellow-700 bg-yellow-50' },
    { label: '対応済み', count: 3, color: 'text-green-700 bg-green-50' },
    { label: '総件数', count: 5, color: 'text-blue-700 bg-blue-50' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">お問合せ管理</h1>
        <p className="text-sm text-gray-600">顧客からのお問い合わせ対応</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        {statusCounts.map((item) => (
          <div key={item.label} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-600 mb-2">{item.label}</div>
            <div className={`text-3xl font-bold ${item.color.split(' ')[0]}`}>{item.count}件</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option value="all">すべてのステータス</option>
              <option value="pending">未対応</option>
              <option value="in-progress">対応中</option>
              <option value="completed">対応済み</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option value="all">すべての件名</option>
              <option value="vaccine">古着deワクチンについて</option>
              <option value="other">その他</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  状況
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  受付日時
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  会員ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  名前
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  メールアドレス
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  件名
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{inquiry.id}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${inquiry.statusColor}`}
                    >
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{inquiry.date}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{inquiry.memberId}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{inquiry.name}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{inquiry.email}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{inquiry.subject}</div>
                    <div className="text-xs text-gray-600 line-clamp-1">{inquiry.content}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="inline-flex items-center justify-center p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
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
