import {
  Home,
  ShoppingCart,
  Package,
  Users,
  MessageSquare,
  HelpCircle,
  BarChart3,
  Mail,
  TrendingUp,
  Settings,
  LogOut,
  ChevronDown,
  FileText,
  Tag,
  Download,
  Factory,
  Calendar,
  FileSpreadsheet,
  Lock,
  Database,
  BookOpen,
  Target,
  UserPlus,
  Image,
  Pin,
  PinOff,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ currentPage, onPageChange, onLogout }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const [isPinned, setIsPinned] = useState(false);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const menuItems = [
    { id: 'dashboard', label: 'ホーム', icon: Home },
    {
      id: 'products',
      label: '出品',
      icon: Package,
      children: [
        { id: 'products', label: '出品商品一覧' },
        { id: 'product-register', label: '出品商品登録' },
        { id: 'product-csv', label: '出品商品CSV登録' },
        { id: 'product-images', label: '出品商品画像管理' },
        { id: 'download-status', label: 'ダウンロード状況' },
        { id: 'categories', label: 'カテゴリー登録' },
        { id: 'category-csv', label: 'カテゴリーCSV登録' },
        { id: 'manufacturers', label: 'メーカー登録' },
        { id: 'manufacturer-csv', label: 'メーカーCSV登録' },
        { id: 'reviews', label: 'レビュー管理' },
        { id: 'review-categories', label: 'レビューカテゴリー登録' },
        { id: 'inquiries', label: '再入荷管理' },
      ],
    },
    {
      id: 'orders',
      label: '受注',
      icon: ShoppingCart,
      children: [
        { id: 'orders', label: '受注一覧' },
        { id: 'order-register', label: '受注登録' },
        { id: 'order-conditions', label: '同梱条件一覧' },
        { id: 'postpay-request', label: '後払い決済審査結果取込' },
        { id: 'payment-csv-import', label: 'お荷物伝票番号CSV取込' },
        { id: 'rakuten-pay', label: '楽天ペイ状況管理' },
        { id: 'amazon-pay', label: 'Amazon Pay状況管理' },
        { id: 'zeronext-pay', label: 'ゼウス決済状況管理' },
        { id: 'paidy-pay', label: 'Paidy決済状況管理' },
        { id: 'subscription-list', label: '定期購入お申し込み一覧' },
        { id: 'subscription-register', label: '定期購入お申し込み登録' },
        { id: 'subscription-washing', label: '定期購入洗い替え管理' },
        { id: 'order-allocation', label: '受注分類仕分け設定' },
        { id: 'gift-management', label: '割入物管理' },
      ],
    },
    {
      id: 'customers',
      label: '顧客',
      icon: Users,
      children: [
        { id: 'customers', label: '顧客一覧' },
        { id: 'customer-register', label: '顧客登録' },
        { id: 'customer-csv', label: '顧客属性CSV更新' },
        { id: 'customer-inquiries', label: 'お問い合わせ管理' },
      ],
    },
    {
      id: 'mail',
      label: 'メルマガ',
      icon: Mail,
      children: [
        { id: 'newsletter', label: 'メルマガ配信状況' },
        { id: 'newsletter-settings', label: '配信内容設定' },
        { id: 'schedule-list', label: 'スケジュール予約一覧' },
        { id: 'event-list', label: 'イベント予約一覧' },
        { id: 'email-templates', label: 'テンプレート管理' },
        { id: 'auto-send', label: '自動差込管理' },
        { id: 'image-manager', label: '画像管理' },
      ],
    },
    {
      id: 'step-mail',
      label: 'ステップメール',
      icon: TrendingUp,
      children: [
        { id: 'step-mail-status', label: 'ステップメール配信状況' },
        { id: 'step-mail-history', label: 'ステップメール配信履歴' },
        { id: 'step-mail-settings', label: '配信内容設定(受注検索)' },
        { id: 'step-mail-manage', label: 'ステップメール配信管理' },
        { id: 'scenario-manage', label: 'シナリオ管理' },
        { id: 'step-conditions', label: 'ステップ条件管理' },
        { id: 'step-templates', label: 'テンプレート管理' },
        { id: 'step-auto-send', label: '自動差込管理' },
        { id: 'step-images', label: '画像管理' },
      ],
    },
    {
      id: 'ad-analytics',
      label: '広告分析',
      icon: Target,
      children: [
        { id: 'ad-analytics', label: '広告分析' },
      ],
    },
    {
      id: 'analytics',
      label: '分析管理',
      icon: BarChart3,
      children: [
        { id: 'analytics', label: 'アクセス分析' },
        { id: 'login-history', label: 'ログイン履歴集計' },
        { id: 'monthly-sales', label: '受注集計（月別推移）' },
        { id: 'sales-report', label: '受注集計' },
        { id: 'sales-cancel', label: '受注集計（キャンセル理由別）' },
        { id: 'subscription-sales', label: '定期申込期間別集計' },
        { id: 'subscription-cancel', label: '定期休止理由別集計' },
        { id: 'subscription-reason', label: '定期解約理由別集計' },
        { id: 'daily-monthly', label: '日計表・月計表' },
        { id: 'analysis-tools', label: '分析ツール' },
        { id: 'group-settings', label: 'グループ設定' },
        { id: 'cpm-analysis', label: 'CPM分析一覧' },
        { id: 'rfm-analysis', label: 'RFM分析一覧' },
        { id: 'notification-mail', label: 'お知らせメール' },
      ],
    },
    {
      id: 'settings',
      label: 'システム設定',
      icon: Settings,
      children: [
        { id: 'member-manage', label: 'メンバー管理' },
        { id: 'password-change', label: 'パスワード変更' },
        { id: 'admin-auth', label: '管理者権限設定' },
        { id: 'order-status', label: '受注ステータス管理' },
        { id: 'master-data', label: 'マスター管理' },
        { id: 'postal-db', label: '郵便番号DB登録' },
        { id: 'custom-csv', label: 'カスタムCSV管理' },
        { id: 'terms-policy', label: 'システム利用規約/調書変更' },
      ],
    },
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 flex flex-col shadow-sm transition-all duration-300 group ${
      isPinned ? 'w-64' : 'w-14 hover:w-64'
    }`}>
      <div className="h-14 border-b border-gray-200 flex items-center px-4 transition-all">
        <div className={`flex items-center gap-2 ${
          isPinned ? 'w-full justify-between' : 'justify-center group-hover:w-full group-hover:justify-between'
        }`}>
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-5 h-5 text-gray-600" />
          </div>
          <button
            onClick={() => setIsPinned(!isPinned)}
            className={`flex-shrink-0 p-1.5 rounded hover:bg-gray-100 transition-all ${
              isPinned ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            title={isPinned ? 'サイドバーの固定を解除' : 'サイドバーを固定'}
          >
            {isPinned ? (
              <PinOff className="w-4 h-4 text-gray-600" />
            ) : (
              <Pin className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <nav className="flex-1 py-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedMenus.includes(item.id);
          const hasChildren = 'children' in item && item.children;
          const isParentActive = hasChildren && item.children.some((child: any) => child.id === currentPage);
          const isActive = currentPage === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (hasChildren) {
                    toggleMenu(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-all relative ${
                  isPinned ? 'justify-start' : 'justify-center group-hover:justify-start'
                } ${
                  isActive || isParentActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {(isActive || isParentActive) && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                )}
                <Icon className={`w-5 h-5 flex-shrink-0 ${
                  isActive || isParentActive ? 'text-blue-600' : 'text-gray-600'
                }`} />
                <span className={`text-sm font-medium whitespace-nowrap ${
                  isPinned ? 'block' : 'hidden group-hover:block'
                }`}>{item.label}</span>
                {hasChildren && (
                  <ChevronDown
                    className={`w-4 h-4 ml-auto transition-transform ${
                      isPinned ? 'block' : 'hidden group-hover:block'
                    } ${isExpanded ? 'transform rotate-180' : ''}`}
                  />
                )}
              </button>

              {hasChildren && isExpanded && (
                <div className={`bg-gray-50 ${isPinned ? 'block' : 'hidden group-hover:block'}`}>
                  {item.children.map((child: any) => {
                    const isChildActive = currentPage === child.id;
                    return (
                      <button
                        key={child.id}
                        onClick={() => onPageChange(child.id)}
                        className={`w-full flex items-center px-12 py-2 text-sm transition-all relative ${
                          isChildActive
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {isChildActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                        )}
                        <span className="whitespace-nowrap">{child.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center group-hover:justify-start gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className={`text-sm font-medium ${isPinned ? 'block' : 'hidden group-hover:block'}`}>ログアウト</span>
        </button>
      </div>
    </aside>
  );
}
