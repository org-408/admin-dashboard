```
src/
├── App.tsx                   # メインアプリケーションコンポーネント
├── components/               # 再利用可能なコンポーネント
│   ├── layout/               # レイアウト関連コンポーネント
│   │   ├── Sidebar.tsx       # サイドバーコンポーネント
│   │   └── Header.tsx        # ヘッダーコンポーネント
│   ├── cards/                # カードコンポーネント
│   │   └── StatCard.tsx      # 統計カード
│   ├── charts/               # チャートコンポーネント
│   │   ├── SalesChart.tsx    # 売上チャート
│   │   ├── TrafficChart.tsx  # トラフィックチャート
│   │   └── ...
│   └── tables/               # テーブルコンポーネント
│       ├── UserTable.tsx     # ユーザーテーブル
│       ├── ProductTable.tsx  # 製品テーブル
│       └── ...
├── pages/                    # ページコンポーネント
│   ├── Dashboard.tsx         # ダッシュボードページ
│   ├── Users.tsx             # ユーザー管理ページ
│   ├── Products.tsx          # 製品管理ページ
│   ├── Orders.tsx            # 注文管理ページ
│   └── Analytics.tsx         # 分析ページ
├── data/                     # サンプルデータと型定義
│   ├── types.ts              # TypeScript型定義
│   └── sampleData.ts         # サンプルデータ
└── utils/                    # ユーティリティ関数
    └── theme.ts              # テーマ関連のユーティリティ
```
