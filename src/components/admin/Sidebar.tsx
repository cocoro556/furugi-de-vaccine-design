import {
  Settings,
  Monitor,
  Smartphone,
  Store,
  Package,
  Users,
  ShoppingCart,
  Mail,
  Send,
  TrendingUp,
  Target,
  BarChart3,
  LogOut,
  ChevronDown,
  PanelLeft,
  PanelLeftClose,
  FileText,
  Home,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ currentPage, onPageChange, onLogout, isOpen, onToggle }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

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
      id: 'basic-settings',
      label: '基本設定',
      icon: FileText,
      children: [
        { id: 'store-settings', label: '店舗設定' },
        { id: 'shipping-carrier-settings', label: '配送業者設定' },
        { id: 'shipping-method-settings', label: '配送方法設定' },
        { id: 'payment-method-settings', label: '支払方法設定' },
        { id: 'tax-rate-settings', label: '税率設定' },
        { id: 'calendar-settings', label: 'カレンダー設定' },
        { id: 'delivery-date-settings', label: 'お届け希望日非表示設定' },
        { id: 'special-commerce-law', label: '特定商取引法' },
        { id: 'privacy-policy', label: 'プライバシーポリシー' },
        { id: 'member-terms', label: '会員規約設定' },
        { id: 'purchase-terms', label: '購入時利用規約設定' },
        { id: 'payment-info-settings', label: '納期情報設定' },
        { id: 'remote-island-settings', label: '離島情報設定' },
        { id: 'remote-island-csv', label: '離島情報CSV登録' },
        { id: 'analysis-tag-settings', label: '分析タグ設定' },
        { id: 'affiliate-settings', label: 'アフィリエイト設定' },
        { id: 'cart-system-settings', label: 'カートシステム設定' },
        { id: 'admin-system-settings', label: '管理システム設定' },
        { id: 'external-app-integration', label: '外部アプリ連携' },
        { id: 'terms-confirmation', label: 'ご利用規約のご確認' },
      ],
    },
    {
      id: 'design-pc',
      label: 'デザインPC',
      icon: Monitor,
      children: [
        { id: 'page-settings', label: 'ページ設定' },
        { id: 'custom-page-settings', label: 'カスタムページ設定' },
        { id: 'form-lp-settings', label: 'フォーム一体型LP設定' },
        { id: 'survey-settings', label: 'アンケート設定' },
        { id: 'header-footer-left-navi', label: 'ヘッダー・フッター・レフトナビ 設定' },
        { id: 'common-description-small', label: '共通説明文（小）' },
        { id: 'common-description-large', label: '共通説明文（大）' },
        { id: 'featured-products', label: '目玉商品' },
        { id: 'store-ranking', label: '店舗内ランキング' },
        { id: 'recently-viewed', label: '最近チェックした商品' },
        { id: 'related-products', label: '関連商品' },
        { id: 'sort-settings', label: '並び順設定' },
        { id: 'screen-message-settings', label: '画面メッセージ設定' },
        { id: 'stylesheet-settings', label: 'スタイルシート設定' },
        { id: 'file-management', label: 'ファイル管理' },
        { id: 'advanced-settings-pc', label: '高度な設定(PC)' },
      ],
    },
    { id: 'design-sp', label: 'デザインSP', icon: Smartphone },
    { id: 'management', label: '運営', icon: Store },
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
      id: 'mail',
      label: 'メール',
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
      id: 'mail-magazine',
      label: 'メルマガ',
      icon: Send,
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
      id: 'system-settings',
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
    <aside className={`bg-[#2C3E50] border-r border-gray-700 flex flex-col shadow-sm transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-14'
    }`}>
      <div className="h-14 border-b border-gray-700 flex items-center px-4 gap-3 transition-all">
        <button
          onClick={onToggle}
          className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-gray-600 transition-colors"
          title={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isOpen ? (
            <PanelLeftClose className="w-5 h-5 text-white" />
          ) : (
            <PanelLeft className="w-5 h-5 text-white" />
          )}
        </button>
        {isOpen && (
          <span className="text-lg font-bold text-white">楽楽リピート</span>
        )}
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
              <div
                className={`w-full flex items-center gap-3 px-4 py-3 transition-all relative cursor-pointer ${
                  isOpen ? 'justify-start' : 'justify-center'
                } ${
                  isActive || isParentActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => {
                  if (!isOpen) {
                    onToggle();
                    if (hasChildren) {
                      setTimeout(() => toggleMenu(item.id), 100);
                    }
                  } else {
                    if (hasChildren) {
                      toggleMenu(item.id);
                    } else {
                      onPageChange(item.id);
                    }
                  }
                }}
              >
                {(isActive || isParentActive) && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                )}
                <Icon className={`w-5 h-5 flex-shrink-0 ${
                  isActive || isParentActive ? 'text-white' : 'text-gray-400'
                }`} />
                {isOpen && (
                  <>
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`w-4 h-4 ml-auto transition-transform ${
                          isExpanded ? 'transform rotate-180' : ''
                        }`}
                      />
                    )}
                  </>
                )}
              </div>

              {hasChildren && isExpanded && isOpen && (
                <div className="bg-gray-800">
                  {item.children.map((child: any) => {
                    const isChildActive = currentPage === child.id;
                    return (
                      <button
                        key={child.id}
                        onClick={() => onPageChange(child.id)}
                        className={`w-full flex items-center px-12 py-2 text-sm transition-all relative ${
                          isChildActive
                            ? 'bg-gray-700 text-white font-medium'
                            : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        {isChildActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
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

      <div className="border-t border-gray-700">
        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 transition-all ${
            isOpen ? 'justify-start' : 'justify-center'
          }`}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium">ログアウト</span>}
        </button>
      </div>
    </aside>
  );
}
