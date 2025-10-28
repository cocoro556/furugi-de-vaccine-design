import { TrendingUp, Users, Eye, ShoppingCart } from 'lucide-react';

export default function AnalyticsList() {
  const analyticsData = [
    {
      date: '2023-11-01',
      sessions: 1250,
      newSessions: 480,
      pageviews: 5420,
      orders: 38,
      conversionRate: 3.04,
      revenue: 186400,
      averageOrderValue: 4905,
    },
    {
      date: '2023-10-31',
      sessions: 1180,
      newSessions: 445,
      pageviews: 5120,
      orders: 35,
      conversionRate: 2.97,
      revenue: 172500,
      averageOrderValue: 4929,
    },
    {
      date: '2023-10-30',
      sessions: 980,
      newSessions: 380,
      pageviews: 4280,
      orders: 28,
      conversionRate: 2.86,
      revenue: 138600,
      averageOrderValue: 4950,
    },
    {
      date: '2023-10-29',
      sessions: 1420,
      newSessions: 520,
      pageviews: 6240,
      orders: 45,
      conversionRate: 3.17,
      revenue: 221400,
      averageOrderValue: 4920,
    },
    {
      date: '2023-10-28',
      sessions: 1560,
      newSessions: 580,
      pageviews: 6820,
      orders: 52,
      conversionRate: 3.33,
      revenue: 256800,
      averageOrderValue: 4938,
    },
  ];

  const summaryStats = [
    {
      label: 'セッション数',
      value: '6,390',
      icon: Users,
      color: 'text-blue-700 bg-blue-50',
    },
    {
      label: 'ページビュー数',
      value: '27,880',
      icon: Eye,
      color: 'text-green-700 bg-green-50',
    },
    {
      label: '受注件数',
      value: '198件',
      icon: ShoppingCart,
      color: 'text-purple-700 bg-purple-50',
    },
    {
      label: '売上額',
      value: '¥975,700',
      icon: TrendingUp,
      color: 'text-orange-700 bg-orange-50',
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">アクセス分析</h1>
        <p className="text-sm text-gray-600">サイトアクセスと売上の分析</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-700">分析期間:</label>
            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              defaultValue="2023-10-28"
            />
            <span className="text-gray-500">~</span>
            <input
              type="date"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              defaultValue="2023-11-01"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
            <option value="daily">日別</option>
            <option value="weekly">週別</option>
            <option value="monthly">月別</option>
          </select>
          <button className="ml-auto px-6 py-2 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm">
            検索
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">日別アクセス分析</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  アクセス日
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  セッション数
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  新規セッション
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  ページビュー
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  受注件数
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  CV率
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  売上額
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  顧客単価
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {analyticsData.map((data) => (
                <tr key={data.date} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{data.date}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{data.sessions.toLocaleString()}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {data.newSessions.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{data.pageviews.toLocaleString()}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{data.orders}件</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-green-600">
                      {data.conversionRate}%
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      ¥{data.revenue.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ¥{data.averageOrderValue.toLocaleString()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-600">期間内の集計結果: 5日間</div>
            <div className="font-semibold text-gray-900">
              合計売上: ¥975,700 / 平均CV率: 3.07%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
