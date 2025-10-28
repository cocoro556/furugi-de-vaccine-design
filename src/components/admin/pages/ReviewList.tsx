import { Star, Eye, EyeOff } from 'lucide-react';

export default function ReviewList() {
  const reviews = [
    {
      id: 'REV-0001',
      date: '2023-11-01 15:20',
      status: '未対応',
      statusColor: 'text-yellow-700 bg-yellow-50',
      productImage:
        'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productName: '古着deワクチン MAXサイズ回収キット',
      nickname: 'エコ太郎',
      customerId: 'CUS-0001',
      customerName: '山田 太郎',
      phone: '03-1234-5678',
      email: 'yamada@example.com',
      satisfaction: 5,
      title: '社会貢献ができて嬉しい',
      content:
        '部屋の整理をしながら社会貢献ができるという点が素晴らしいです。回収キットも使いやすく、手続きも簡単でした。',
      isVisible: false,
    },
    {
      id: 'REV-0002',
      date: '2023-11-01 12:45',
      status: '対応済み',
      statusColor: 'text-green-700 bg-green-50',
      productImage:
        'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productName: '古着deワクチン Standardサイズ回収キット',
      nickname: 'はなこ',
      customerId: 'CUS-0002',
      customerName: '佐藤 花子',
      phone: '03-2345-6789',
      email: 'sato@example.com',
      satisfaction: 4,
      title: '気軽に始められました',
      content: 'サイズもちょうど良く、初めてでも簡単に利用できました。もっと早く知りたかったです。',
      isVisible: true,
    },
    {
      id: 'REV-0003',
      date: '2023-10-31 18:30',
      status: '対応済み',
      statusColor: 'text-green-700 bg-green-50',
      productImage:
        'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productName: 'キッチンde給食回収キット',
      nickname: 'キッチン好き',
      customerId: 'CUS-0005',
      customerName: '鈴木 美咲',
      phone: '03-5678-9012',
      email: 'suzuki@example.com',
      satisfaction: 5,
      title: 'キッチン用品も寄付できる',
      content:
        '使わなくなったキッチン用品を寄付できるのが良いですね。給食支援に繋がると思うと嬉しいです。',
      isVisible: true,
    },
    {
      id: 'REV-0004',
      date: '2023-10-30 14:15',
      status: '未対応',
      statusColor: 'text-yellow-700 bg-yellow-50',
      productImage:
        'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productName: '古着deワクチン ギフト版回収キット',
      nickname: 'ギフトマン',
      customerId: 'CUS-0004',
      customerName: '田中 一郎',
      phone: '03-4567-8901',
      email: 'tanaka@example.com',
      satisfaction: 5,
      title: 'プレゼントに最適',
      content: '友人へのプレゼントとして購入しました。とても喜ばれ、社会貢献もできて良かったです。',
      isVisible: false,
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">レビュー管理</h1>
        <p className="text-sm text-gray-600">顧客レビューの確認と公開設定</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  投稿日時
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  対応ステータス
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  商品情報
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  投稿者情報
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  満足度
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  レビュー内容
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  表示設定
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{review.id}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.date}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${review.statusColor}`}
                    >
                      {review.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.productImage}
                        alt={review.productName}
                        className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                      />
                      <div className="text-sm text-gray-900">{review.productName}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900">{review.nickname}</div>
                    <div className="text-xs text-gray-500">{review.customerName}</div>
                    <div className="text-xs text-gray-500">{review.customerId}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < review.satisfaction
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{review.title}</div>
                    <div className="text-xs text-gray-600 line-clamp-2">{review.content}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <button
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-semibold text-xs ${
                        review.isVisible
                          ? 'text-green-700 bg-green-50 hover:bg-green-100'
                          : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {review.isVisible ? (
                        <>
                          <Eye className="w-4 h-4" />
                          <span>表示</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4" />
                          <span>非表示</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">全4件を表示</div>
        </div>
      </div>
    </div>
  );
}
