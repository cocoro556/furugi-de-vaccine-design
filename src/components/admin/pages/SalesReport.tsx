import { Calendar, TrendingUp, TrendingDown } from 'lucide-react';

export default function SalesReport() {
  const monthlyData = [
    { month: '2023-11', sales: 1245000, newSales: 385000, repeatSales: 860000, orders: 245, newOrders: 82, repeatOrders: 163 },
    { month: '2023-10', sales: 1180000, newSales: 358000, repeatSales: 822000, orders: 232, newOrders: 76, repeatOrders: 156 },
    { month: '2023-09', sales: 985000, newSales: 295000, repeatSales: 690000, orders: 198, newOrders: 64, repeatOrders: 134 },
    { month: '2023-08', sales: 1325000, newSales: 425000, repeatSales: 900000, orders: 268, newOrders: 89, repeatOrders: 179 },
  ];

  const dailyData = [
    { date: '2023-11-01', allSales: 48500, newSales: 12800, newOrders: 3, repeatSales: 35700, repeatOrders: 8 },
    { date: '2023-10-31', allSales: 42300, newSales: 9900, newOrders: 2, repeatSales: 32400, repeatOrders: 7 },
    { date: '2023-10-30', allSales: 56800, newSales: 15200, newOrders: 4, repeatSales: 41600, repeatOrders: 9 },
    { date: '2023-10-29', allSales: 38900, newSales: 8500, newOrders: 2, repeatSales: 30400, repeatOrders: 6 },
    { date: '2023-10-28', allSales: 51200, newSales: 13300, newOrders: 3, repeatSales: 37900, repeatOrders: 8 },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">売上集計</h1>
        <p className="text-sm text-gray-600">月次・日次の売上データと分析</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">月計表</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>直近4ヶ月</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  月
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  全体売上
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  新規売上
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  新規件数
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  リピート売上
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  リピート件数
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  リピート率
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {monthlyData.map((data) => {
                const repeatRate = ((data.repeatOrders / data.orders) * 100).toFixed(1);
                return (
                  <tr key={data.month} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{data.month}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-bold text-gray-900">
                        ¥{data.sales.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">¥{data.newSales.toLocaleString()}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{data.newOrders}件</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">¥{data.repeatSales.toLocaleString()}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{data.repeatOrders}件</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-sm font-semibold text-blue-600">{repeatRate}%</span>
                        {parseFloat(repeatRate) > 60 ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">日計表</h2>
          <div className="flex items-center gap-2">
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
            <button className="px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm">
              検索
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  日付
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  全体売上
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  新規売上
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  新規件数
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  リピート売上
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  リピート件数
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {dailyData.map((data) => (
                <tr key={data.date} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{data.date}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="text-sm font-bold text-gray-900">
                      ¥{data.allSales.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">¥{data.newSales.toLocaleString()}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">{data.newOrders}件</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">¥{data.repeatSales.toLocaleString()}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="text-sm text-gray-900">{data.repeatOrders}件</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
