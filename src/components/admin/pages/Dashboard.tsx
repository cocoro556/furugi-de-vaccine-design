import { TrendingUp, ShoppingCart, Package, Users, Calendar, User, AlertTriangle, HelpCircle, RefreshCw } from 'lucide-react';

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
      id: 'ORD-20231001-001',
      date: '2023-10-01 14:32',
      customer: '山田 太郎',
      amount: '¥12,800',
      status: '出荷準備中',
      statusColor: 'text-yellow-700 bg-yellow-50',
    },
    {
      id: 'ORD-20231001-002',
      date: '2023-10-01 13:15',
      customer: '佐藤 花子',
      amount: '¥8,500',
      status: '出荷済み',
      statusColor: 'text-green-700 bg-green-50',
    },
    {
      id: 'ORD-20231001-003',
      date: '2023-10-01 12:08',
      customer: '田中 一郎',
      amount: '¥15,200',
      status: '受注受付中',
      statusColor: 'text-blue-700 bg-blue-50',
    },
    {
      id: 'ORD-20231001-004',
      date: '2023-10-01 11:45',
      customer: '鈴木 美咲',
      amount: '¥6,800',
      status: '出荷済み',
      statusColor: 'text-green-700 bg-green-50',
    },
    {
      id: 'ORD-20231001-005',
      date: '2023-10-01 10:20',
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
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
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

        {/* Alert Banner */}
        <div className="space-y-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
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
            </div>
          </div>
          <div className="flex justify-end">
            <button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline">
              処理方法はこちらをご参照下さい
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
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

      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">売上サマリ [2025-10-29 00:34 (水) 現在]</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 bg-gray-50 px-3 py-2 rounded">前日 [2025-10-28] の売上</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200">
                        <th className="px-4 py-3 text-left text-gray-700 font-semibold">受注件数</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">商品代金合計(税別)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">平均額(円)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">請求額(税込)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">金額(円)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">平均額(円)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 text-left font-medium text-gray-900">260</td>
                        <td className="px-4 py-3 text-right text-gray-900">1,026,324</td>
                        <td className="px-4 py-3 text-right text-gray-900">3,947</td>
                        <td className="px-4 py-3 text-right text-gray-900">1,144,000</td>
                        <td className="px-4 py-3 text-right text-gray-900">4,400</td>
                        <td className="px-4 py-3 text-right text-gray-900"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 bg-gray-50 px-3 py-2 rounded">
                  当月 [2025-10] の売上累計 <span className="text-blue-600 ml-2">(年月分を表示)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200">
                        <th className="px-4 py-3 text-left text-gray-700 font-semibold">受注件数</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">商品代金合計(税別)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">平均額(円)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">請求額(税込)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">金額(円)</th>
                        <th className="px-4 py-3 text-right text-gray-700 font-semibold">平均額(円)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 text-left font-medium text-gray-900">6,595</td>
                        <td className="px-4 py-3 text-right text-gray-900">25,811,580</td>
                        <td className="px-4 py-3 text-right text-gray-900">3,913</td>
                        <td className="px-4 py-3 text-right text-gray-900">28,709,000</td>
                        <td className="px-4 py-3 text-right text-gray-900">4,353</td>
                        <td className="px-4 py-3 text-right text-gray-900"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
            <img
              src="/src/assets/image copy copy.png"
              alt="昨日までの売上推移（直近7日間）"
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b-2 border-blue-500 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-600">新規受付一覧</h2>
              <button
                onClick={() => window.location.reload()}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="更新"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">受注ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">受注日</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">顧客名</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">購入商品</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">支払方法</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ご請求金額（円）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { id: 'ORD-20231028-015', date: '2023-10-28', customer: '田中 太郎', product: 'プレミアム商品セット', payment: 'クレジットカード', amount: 45800 },
                    { id: 'ORD-20231028-014', date: '2023-10-28', customer: '佐藤 花子', product: 'スタンダード商品A', payment: '銀行振込', amount: 12500 },
                    { id: 'ORD-20231028-013', date: '2023-10-28', customer: '鈴木 一郎', product: 'デラックス商品パック', payment: 'クレジットカード', amount: 38900 },
                    { id: 'ORD-20231027-012', date: '2023-10-27', customer: '高橋 美咲', product: 'ベーシック商品B', payment: 'コンビニ決済', amount: 8900 },
                    { id: 'ORD-20231027-011', date: '2023-10-27', customer: '渡辺 健太', product: 'エコノミー商品C', payment: 'クレジットカード', amount: 15600 },
                    { id: 'ORD-20231027-010', date: '2023-10-27', customer: '伊藤 由美', product: 'プレミアム商品セット', payment: '銀行振込', amount: 45800 },
                    { id: 'ORD-20231026-009', date: '2023-10-26', customer: '山本 大輔', product: 'スタンダード商品A', payment: 'クレジットカード', amount: 12500 },
                    { id: 'ORD-20231026-008', date: '2023-10-26', customer: '中村 愛子', product: 'ラグジュアリー商品', payment: 'クレジットカード', amount: 52000 },
                    { id: 'ORD-20231026-007', date: '2023-10-26', customer: '小林 誠', product: 'デラックス商品パック', payment: '銀行振込', amount: 38900 },
                    { id: 'ORD-20231025-006', date: '2023-10-25', customer: '加藤 里奈', product: 'ベーシック商品B', payment: 'コンビニ決済', amount: 8900 },
                    { id: 'ORD-20231025-005', date: '2023-10-25', customer: '吉田 翔太', product: 'スタンダード商品A', payment: 'クレジットカード', amount: 12500 },
                    { id: 'ORD-20231025-004', date: '2023-10-25', customer: '山田 さくら', product: 'エコノミー商品C', payment: '銀行振込', amount: 15600 },
                    { id: 'ORD-20231024-003', date: '2023-10-24', customer: '佐々木 隆', product: 'プレミアム商品セット', payment: 'クレジットカード', amount: 45800 },
                    { id: 'ORD-20231024-002', date: '2023-10-24', customer: '松本 真理', product: 'デラックス商品パック', payment: 'クレジットカード', amount: 38900 },
                    { id: 'ORD-20231024-001', date: '2023-10-24', customer: '井上 健', product: 'スタンダード商品A', payment: '銀行振込', amount: 12500 },
                  ].map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">{order.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.customer}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.product}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{order.payment}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">¥{order.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-sky-400 rounded-lg shadow-sm border border-gray-200" style={{ minHeight: '300px', maxWidth: '500px', margin: '0 auto' }}>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h3 className="text-gray-900 text-lg font-bold text-center mb-3">
              【 ご相談・ご質問はこちらまで 】
            </h3>

            <div className="space-y-3 flex flex-col items-center">
              <button className="w-4/5 bg-white border-2 border-black text-black font-bold text-base py-3 rounded-lg hover:bg-gray-50 transition-colors">
                FAQ検索
              </button>

              <button className="w-4/5 bg-orange-500 text-white font-bold text-base py-3 rounded-lg hover:bg-orange-600 transition-colors">
                お問い合わせフォーム
              </button>

              <button className="w-4/5 bg-orange-500 text-white font-bold text-base py-3 rounded-lg hover:bg-orange-600 transition-colors">
                機能オプション一覧とお申込
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-200">
            <h3 className="text-gray-900 text-2xl font-bold text-center mb-6">
              【 コールセンター混雑時間帯 】
            </h3>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-5 mb-6 text-center">
              <div className="font-bold text-gray-900 mb-2">【営業時間】</div>
              <div className="text-lg text-gray-900">10:00～17:00（土日祝除く）</div>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50"></th>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50">月</th>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50">火</th>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50">水</th>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50">木</th>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50">金</th>
                    <th className="border border-gray-300 p-2.5 text-center bg-gray-50">土日祝</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">10時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-100 text-gray-500 text-sm" rowSpan={8}>対応時間外</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">11時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">12時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">13時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-yellow-100">△</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-yellow-100">△</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-yellow-100">△</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-yellow-100">△</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-yellow-100">△</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">14時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">15時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-white">○</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">16時台</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-sky-100">◎</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-50 font-medium">17時以降</td>
                    <td className="border border-gray-300 p-2.5 text-center bg-gray-100 text-gray-500 text-sm" colSpan={5}>対応時間外</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>◎ or ○ ···混雑していない</p>
              <p>△ ···混雑している</p>
              <p className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 bg-sky-100 border border-gray-300"></span>
                青色ボックス ···比較的つながりやすい時間帯
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 bg-yellow-100 border border-gray-300"></span>
                黄色ボックス ···大変混雑している時間帯
              </p>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-sm border border-gray-200" style={{ marginTop: '60px' }}>
            <div className="border-4 border-cyan-500 rounded-lg p-8">
              <h3 className="text-cyan-500 text-2xl font-bold text-center mb-6">
                個別勉強会のお知らせ
              </h3>

              <div className="text-gray-900 text-base space-y-4 leading-relaxed">
                <p>各回1社様ごと、個別での勉強会を開催します。</p>
                <p>参加をご希望の方はお問合せフォームよりお問合せください。</p>

                <p className="text-red-600 font-bold">
                  「参加希望のプログラム」と「希望日程」をお問い合わせ内容にご記載ください。
                </p>

                <hr className="border-t border-gray-300 my-6" />

                <div className="space-y-2">
                  <p>＜プログラム5:ステップメール機能＞</p>
                  <p>＜プログラム4:アップセルクロスセル機能＞</p>
                  <p>＜プログラム3:お友達機能（リファラルマーケティング）勉強会＞</p>
                  <p>＜プログラム2:封入物勉強会＞</p>
                  <p>＜プログラム1:メルマガ機能＞</p>
                </div>

                <hr className="border-t border-gray-300 my-6" />

                <p className="text-cyan-500 font-bold">
                  →お問合せフォームへ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
