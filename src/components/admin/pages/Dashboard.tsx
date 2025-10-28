import { TrendingUp, ShoppingCart, Package, Users, Calendar, User, AlertTriangle, HelpCircle } from 'lucide-react';

interface DashboardProps {
  currentUser?: { name: string; email: string };
}

export default function Dashboard({ currentUser }: DashboardProps = {}) {
  const stats = [
    {
      label: '前日の受注金額',
      value: '¥245,000',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'blue',
    },
    {
      label: '前日の受注個数',
      value: '48件',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'green',
    },
    {
      label: '在庫商品数',
      value: '156個',
      change: '-3.1%',
      trend: 'down',
      icon: Package,
      color: 'orange',
    },
    {
      label: '新規顧客',
      value: '23人',
      change: '+15.8%',
      trend: 'up',
      icon: Users,
      color: 'purple',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-20231101-001',
      date: '2023-11-01 14:32',
      customer: '山田 太郎',
      amount: '¥12,800',
      status: '出荷準備中',
      statusColor: 'text-yellow-700 bg-yellow-50',
    },
    {
      id: 'ORD-20231101-002',
      date: '2023-11-01 13:15',
      customer: '佐藤 花子',
      amount: '¥8,500',
      status: '出荷済み',
      statusColor: 'text-green-700 bg-green-50',
    },
    {
      id: 'ORD-20231101-003',
      date: '2023-11-01 12:08',
      customer: '田中 一郎',
      amount: '¥15,200',
      status: '受注受付中',
      statusColor: 'text-blue-700 bg-blue-50',
    },
    {
      id: 'ORD-20231101-004',
      date: '2023-11-01 11:45',
      customer: '鈴木 美咲',
      amount: '¥6,800',
      status: '出荷済み',
      statusColor: 'text-green-700 bg-green-50',
    },
    {
      id: 'ORD-20231101-005',
      date: '2023-11-01 10:20',
      customer: '高橋 健太',
      amount: '¥9,900',
      status: '出荷準備中',
      statusColor: 'text-yellow-700 bg-yellow-50',
    },
  ];

  const weeklyData = [
    { day: '月', amount: 180000 },
    { day: '火', amount: 220000 },
    { day: '水', amount: 195000 },
    { day: '木', amount: 245000 },
    { day: '金', amount: 280000 },
    { day: '土', amount: 320000 },
    { day: '日', amount: 290000 },
  ];

  const maxAmount = Math.max(...weeklyData.map((d) => d.amount));

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      orange: 'bg-yellow-400 text-slate-900',
      purple: 'bg-slate-600 text-white',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Alert Banner */}
      <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-red-900">
              <span className="font-semibold">2025-07-31以降ログインしていないメンバーが8名います。</span>
              メンバー管理で稼働・非稼働を設定してください。
            </p>
            <p className="text-sm text-gray-700 mt-2">
              アラート情報は2025-10-29 00:34:07時点のものです。
              <button className="text-red-600 font-medium hover:underline ml-1">【▲再チェックする】</button>
            </p>
          </div>
          <button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline flex-shrink-0">
            処理方法はこちらをご参照下さい
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">ホーム</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>2023年11月1日 (水) 更新</span>
          </div>
        </div>
        {currentUser && (
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">{currentUser.name}</div>
              <div className="text-xs text-gray-500">{currentUser.email}</div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">週次売上推移</h2>
            <span className="text-sm text-gray-500">直近7日間</span>
          </div>
          <div className="space-y-4">
            {weeklyData.map((data) => (
              <div key={data.day} className="flex items-center gap-4">
                <div className="w-10 text-sm font-semibold text-gray-700">{data.day}曜日</div>
                <div className="flex-1">
                  <div className="h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center px-4 transition-all"
                      style={{ width: `${(data.amount / maxAmount) * 100}%` }}
                    >
                      <span className="text-sm font-semibold text-slate-900">
                        ¥{data.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">最新受注</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{order.customer}</div>
                    <div className="text-xs text-gray-500 mt-1">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{order.amount}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">{order.id}</div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
