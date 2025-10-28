import { Plus, Edit, Copy, Trash2 } from 'lucide-react';

export default function EmailTemplateList() {
  const templates = [
    {
      id: 'TPL-0001',
      templateName: '注文確認メール',
      category: '受注管理',
      format: 'HTML',
      subject: 'ご注文ありがとうございます',
      from: 'noreply@example.com',
      lastUpdated: '2023-10-15',
    },
    {
      id: 'TPL-0002',
      templateName: '出荷完了メール',
      category: '受注管理',
      format: 'HTML',
      subject: '商品を発送いたしました',
      from: 'noreply@example.com',
      lastUpdated: '2023-10-10',
    },
    {
      id: 'TPL-0003',
      templateName: '会員登録完了メール',
      category: '会員管理',
      format: 'HTML',
      subject: '会員登録が完了しました',
      from: 'noreply@example.com',
      lastUpdated: '2023-09-28',
    },
    {
      id: 'TPL-0004',
      templateName: 'パスワードリセットメール',
      category: '会員管理',
      format: 'テキスト',
      subject: 'パスワード再設定のご案内',
      from: 'noreply@example.com',
      lastUpdated: '2023-09-20',
    },
    {
      id: 'TPL-0005',
      templateName: 'レビュー依頼メール',
      category: 'マーケティング',
      format: 'HTML',
      subject: 'ご購入商品のレビューをお願いいたします',
      from: 'marketing@example.com',
      lastUpdated: '2023-10-05',
    },
    {
      id: 'TPL-0006',
      templateName: 'キャンペーンメール',
      category: 'マーケティング',
      format: 'HTML',
      subject: '【期間限定】特別キャンペーンのお知らせ',
      from: 'marketing@example.com',
      lastUpdated: '2023-10-01',
    },
  ];

  const categories = [
    { value: 'all', label: 'すべてのカテゴリ' },
    { value: 'order', label: '受注管理' },
    { value: 'member', label: '会員管理' },
    { value: 'marketing', label: 'マーケティング' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">メール管理</h1>
          <p className="text-sm text-gray-600">メールテンプレートの管理と編集</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm shadow-sm">
          <Plus className="w-4 h-4" />
          新規テンプレート作成
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option value="all">すべての形式</option>
              <option value="html">HTML</option>
              <option value="text">テキスト</option>
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
                  テンプレート名
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  カテゴリ
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  形式
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  件名
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  送信元
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  最終更新日
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {templates.map((template) => (
                <tr key={template.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{template.id}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900">
                      {template.templateName}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${
                        template.category === '受注管理'
                          ? 'text-blue-700 bg-blue-50'
                          : template.category === '会員管理'
                          ? 'text-green-700 bg-green-50'
                          : 'text-purple-700 bg-purple-50'
                      }`}
                    >
                      {template.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{template.format}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{template.subject}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{template.from}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{template.lastUpdated}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="inline-flex items-center justify-center p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Copy className="w-4 h-4 text-blue-600" />
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
          <div className="text-sm text-gray-600">全6件を表示</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">メール配信状況</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">本日の送信数</span>
              <span className="text-xl font-bold text-gray-900">142件</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">開封率</span>
              <span className="text-xl font-bold text-green-600">68.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">クリック率</span>
              <span className="text-xl font-bold text-blue-600">24.3%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">エラー状況</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">送信エラー</span>
              <span className="text-xl font-bold text-red-600">3件</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">バウンス</span>
              <span className="text-xl font-bold text-orange-600">1件</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">配信停止</span>
              <span className="text-xl font-bold text-gray-600">5件</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-4">予約配信</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">予約済み</span>
              <span className="text-xl font-bold text-gray-900">8件</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">配信待機中</span>
              <span className="text-xl font-bold text-yellow-600">2件</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">本日配信予定</span>
              <span className="text-xl font-bold text-blue-600">3件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
