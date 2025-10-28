import { Plus, Edit, Eye, EyeOff } from 'lucide-react';

export default function ProductList() {
  const products = [
    {
      id: 'PRD-0001',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productNumber: 'FURU-MAX-001',
      productName: '古着deワクチン MAXサイズ回収キット',
      publicStatus: '販売中',
      publicStatusColor: 'text-green-700 bg-green-50',
      taxRate: 10,
      displayPrice: 3300,
      salesPrice: 3300,
      stock: 150,
    },
    {
      id: 'PRD-0002',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productNumber: 'FURU-STD-001',
      productName: '古着deワクチン Standardサイズ回収キット',
      publicStatus: '販売中',
      publicStatusColor: 'text-green-700 bg-green-50',
      taxRate: 10,
      displayPrice: 2200,
      salesPrice: 2200,
      stock: 280,
    },
    {
      id: 'PRD-0003',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productNumber: 'FURU-MINI-001',
      productName: '古着deワクチン miniminiサイズ回収キット',
      publicStatus: '販売中',
      publicStatusColor: 'text-green-700 bg-green-50',
      taxRate: 10,
      displayPrice: 1650,
      salesPrice: 1650,
      stock: 420,
    },
    {
      id: 'PRD-0004',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productNumber: 'FURU-GIFT-001',
      productName: '古着deワクチン ギフト版回収キット',
      publicStatus: '販売中',
      publicStatusColor: 'text-green-700 bg-green-50',
      taxRate: 10,
      displayPrice: 3850,
      salesPrice: 3850,
      stock: 95,
    },
    {
      id: 'PRD-0005',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productNumber: 'KITCHEN-001',
      productName: 'キッチンde給食回収キット',
      publicStatus: '倉庫',
      publicStatusColor: 'text-gray-700 bg-gray-100',
      taxRate: 10,
      displayPrice: 2750,
      salesPrice: 2750,
      stock: 0,
    },
    {
      id: 'PRD-0006',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=300',
      productNumber: 'KIMONO-001',
      productName: '着物deお針子回収キット',
      publicStatus: '販売中',
      publicStatusColor: 'text-green-700 bg-green-50',
      taxRate: 10,
      displayPrice: 5500,
      salesPrice: 5500,
      stock: 65,
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">商品管理</h1>
          <p className="text-sm text-gray-600">商品の登録・編集・在庫管理</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-500 font-bold transition-colors font-semibold text-sm shadow-sm">
          <Plus className="w-4 h-4" />
          新規商品登録
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  商品画像
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  商品情報
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  公開設定
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  消費税
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  価格
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  在庫数
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      {product.productName}
                    </div>
                    <div className="text-xs text-gray-500">{product.productNumber}</div>
                    <div className="text-xs text-gray-500">{product.id}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${product.publicStatusColor}`}
                    >
                      {product.publicStatus}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.taxRate}%</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      ¥{product.displayPrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      販売 ¥{product.salesPrice.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm font-semibold ${
                        product.stock === 0
                          ? 'text-red-600'
                          : product.stock < 100
                          ? 'text-yellow-600'
                          : 'text-green-600'
                      }`}
                    >
                      {product.stock}個
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        {product.publicStatus === '販売中' ? (
                          <Eye className="w-4 h-4 text-gray-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-600" />
                        )}
                      </button>
                      <button className="inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
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
    </div>
  );
}
