import { useState } from 'react';
import { Search, Filter, Download, Eye, Plus } from 'lucide-react';

export default function OrderList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const orders = [
    {
      id: 'ORD-20231101-001',
      orderDate: '2023-11-01 14:32',
      orderNumber: '202311010001',
      purchaseCount: 1,
      customerId: 'CUS-0001',
      customerName: '山田 太郎',
      phone: '03-1234-5678',
      email: 'yamada@example.com',
      address: '東京都渋谷区1-2-3',
      deliveryName: '山田 太郎',
      deliveryAddress: '注文者に同じ',
      paymentMethod: 'クレジットカード',
      authResult: '承認済み',
      productTotal: 12000,
      shippingFee: 800,
      fee: 0,
      totalAmount: 12800,
      products: '古着deワクチン MAXサイズ x 1',
      shippingCarrier: 'ヤマト運輸',
      shippingMethod: '宅急便',
      deliveryDate: '2023-11-05',
      trackingNumber: '1234-5678-9012',
      status: '出荷準備中',
      statusColor: 'text-yellow-700 bg-yellow-50',
    },
    {
      id: 'ORD-20231101-002',
      orderDate: '2023-11-01 13:15',
      orderNumber: '202311010002',
      purchaseCount: 3,
      customerId: 'CUS-0002',
      customerName: '佐藤 花子',
      phone: '03-2345-6789',
      email: 'sato@example.com',
      address: '神奈川県横浜市中区4-5-6',
      deliveryName: '佐藤 花子',
      deliveryAddress: '注文者に同じ',
      paymentMethod: 'AmazonPay',
      authResult: '承認済み',
      productTotal: 8000,
      shippingFee: 500,
      fee: 0,
      totalAmount: 8500,
      products: '古着deワクチン Standardサイズ x 1',
      shippingCarrier: 'ヤマト運輸',
      shippingMethod: '宅急便',
      deliveryDate: '2023-11-04',
      trackingNumber: '1234-5678-9013',
      status: '出荷済み',
      statusColor: 'text-green-700 bg-green-50',
    },
    {
      id: 'ORD-20231101-003',
      orderDate: '2023-11-01 12:08',
      orderNumber: '202311010003',
      purchaseCount: 1,
      customerId: 'CUS-0003',
      customerName: '田中 一郎',
      phone: '03-3456-7890',
      email: 'tanaka@example.com',
      address: '千葉県千葉市美浜区7-8-9',
      deliveryName: '田中 次郎',
      deliveryAddress: '千葉県千葉市美浜区10-11-12',
      paymentMethod: 'クレジットカード',
      authResult: '承認済み',
      productTotal: 14500,
      shippingFee: 700,
      fee: 0,
      totalAmount: 15200,
      products: '古着deワクチン MAXサイズ x 1, キッチンde給食 x 1',
      shippingCarrier: 'ヤマト運輸',
      shippingMethod: '宅急便',
      deliveryDate: '2023-11-06',
      trackingNumber: '',
      status: '受注受付中',
      statusColor: 'text-blue-700 bg-blue-50',
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">受注管理</h1>
          <p className="text-sm text-gray-600">注文一覧と詳細情報の確認</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm shadow-sm">
          <Plus className="w-4 h-4" />
          受注登録
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="注文番号、顧客名、メールアドレスで検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="all">すべてのステータス</option>
              <option value="pending">受注受付中</option>
              <option value="preparing">出荷準備中</option>
              <option value="shipped">出荷済み</option>
              <option value="completed">完了</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              <Filter className="w-4 h-4" />
              詳細検索
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              CSV出力
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  注文番号
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  注文日時
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  顧客情報
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  商品
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  金額
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  決済方法
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  ステータス
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{order.orderNumber}</div>
                    <div className="text-xs text-gray-500">{order.id}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.orderDate}</div>
                    <div className="text-xs text-gray-500">購入{order.purchaseCount}回目</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900">{order.customerName}</div>
                    <div className="text-xs text-gray-500">{order.customerId}</div>
                    <div className="text-xs text-gray-500">{order.email}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900">{order.products}</div>
                    <div className="text-xs text-gray-500">
                      {order.shippingCarrier} - {order.shippingMethod}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      ¥{order.totalAmount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      商品 ¥{order.productTotal.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.paymentMethod}</div>
                    <div className="text-xs text-green-600 font-medium">{order.authResult}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
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

        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="text-sm text-gray-600">全3件中 1-3件を表示</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed">
              前へ
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm font-semibold">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed">
              次へ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
