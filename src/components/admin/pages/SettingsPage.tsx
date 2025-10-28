import { Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">設定</h1>
        <p className="text-sm text-gray-600">システム設定と各種管理</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">
            税率設定
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                消費税率 (%)
              </label>
              <input
                type="number"
                defaultValue="10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                軽減税率 (%)
              </label>
              <input
                type="number"
                defaultValue="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                送料消費税率 (%)
              </label>
              <input
                type="number"
                defaultValue="10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                手数料消費税率 (%)
              </label>
              <input
                type="number"
                defaultValue="10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                税計算単位
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option value="item">商品単位</option>
                <option value="order">注文単位</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                課税規則
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option value="tax-included">税込</option>
                <option value="tax-excluded">税抜</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                適用開始日時
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm">
              <Save className="w-4 h-4" />
              保存
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">
            配送方法設定
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                配送方法名
              </label>
              <input
                type="text"
                defaultValue="宅急便"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                表示名
              </label>
              <input
                type="text"
                defaultValue="ヤマト運輸 宅急便"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                配送区分
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option value="yamato">ヤマト運輸</option>
                <option value="sagawa">佐川急便</option>
                <option value="jppost">日本郵便</option>
              </select>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm">
              <Save className="w-4 h-4" />
              保存
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-md font-bold text-gray-900 mb-4">配送業者一覧</h3>
            <div className="space-y-2">
              {['ヤマト運輸', '佐川急便', '日本郵便'].map((carrier) => (
                <div
                  key={carrier}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="text-sm font-semibold text-gray-900">{carrier}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    編集
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">
            システム情報
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-600">バージョン</span>
              <span className="text-sm font-semibold text-gray-900">1.0.0</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-600">最終更新日</span>
              <span className="text-sm font-semibold text-gray-900">2023-11-01</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-600">データベース</span>
              <span className="text-sm font-semibold text-gray-900">Supabase</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-gray-600">ストレージ使用量</span>
              <span className="text-sm font-semibold text-gray-900">1.2 GB / 10 GB</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">
            処理履歴
          </h2>
          <div className="space-y-3">
            {[
              { date: '2023-11-01 15:30', user: 'admin@example.com', action: '商品情報更新' },
              { date: '2023-11-01 14:20', user: 'admin@example.com', action: '受注登録' },
              { date: '2023-11-01 13:15', user: 'admin@example.com', action: '顧客情報編集' },
              { date: '2023-11-01 11:45', user: 'admin@example.com', action: 'メールテンプレート編集' },
              { date: '2023-11-01 10:30', user: 'admin@example.com', action: 'レビュー承認' },
            ].map((log, index) => (
              <div key={index} className="py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-900">{log.action}</span>
                  <span className="text-xs text-gray-500">{log.date}</span>
                </div>
                <div className="text-xs text-gray-600">{log.user}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
