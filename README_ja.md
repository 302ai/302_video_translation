# 🎥🤖 302.AIのAIビデオリアルタイム翻訳へようこそ！🚀✨

[中文](README_zh.md) | [English](README.md) | [日本語](README_ja.md)

[302.AI](https://302.ai)の[AIビデオリアルタイム翻訳](https://302.ai/tools/vt/)のオープンソース版です。
302.AIに直接ログインすることで、コード不要、設定不要のオンライン体験が可能です。
あるいは、このプロジェクトをニーズに合わせてカスタマイズし、302.AIのAPI KEYを統合して、自身でデプロイすることもできます。

## ✨ 302.AIについて ✨
[302.AI](https://302.ai)は、AIの能力と実用的な実装の間のギャップを埋める、従量制のAIアプリケーションプラットフォームです。
1. 🧠 包括的なAI機能：主要AIブランドの最新の言語、画像、音声、ビデオモデルを統合。
2. 🚀 高度なアプリケーション開発：単なるシンプルなチャットボットではなく、本格的なAI製品を構築。
3. 💰 月額料金なし：すべての機能が従量制で、完全にアクセス可能。低い参入障壁と高い可能性を確保。
4. 🛠 強力な管理ダッシュボード：チームやSME向けに設計 - 一人で管理し、多くの人が使用可能。
5. 🔗 すべてのAI機能へのAPIアクセス：すべてのツールはオープンソースでカスタマイズ可能（進行中）。
6. 💪 強力な開発チーム：大規模で高度なスキルを持つ開発者集団。毎週2-3の新しいアプリケーションをリリースし、毎日製品更新を行っています。才能ある開発者の参加を歓迎します。

## プロジェクト特性
1. 🎥 マルチプラットフォームビデオサポート：YouTube、TikTok、Bilibili、抖音のビデオを視聴。
2. 🌍 多言語字幕翻訳：簡単に中国語、英語、日本語、ドイツ語、フランス語、韓国語を切り替え。
3. 📝 字幕形式のダウンロード：VTT、SRT、TXT形式の字幕ファイルが取得可能。
4. 🔄 完全な国際化：複数の言語間でシームレスな変換。
5. 💬 便利な共有機能：興味深いビデオコンテンツを友達と素早く共有。

AIビデオリアルタイム翻訳を通じて、誰でも効率的にビデオ情報を取得できます！🎉🎥 一緒にAI駆動の情報取得の新世界を探索しましょう！🌟🚀

## 技術スタック
- Next.js 14
- Tailwind CSS
- Shadcn UI

## 開発＆デプロイ
1. プロジェクトをクローン `git clone https://github.com/302ai/302_video_translation`
2. 依存関係をインストール `pnpm install`
3. 302のAPIキーを設定 `.env.exampleを参照`
4. プロジェクトを実行 `pnpm dev`
5. ビルドおよびデプロイ `docker build -t video-translation . && docker run -p 3000:3000 video-translation`

## インターフェースプレビュー
![インターフェースプレビュー](docs/preview.png)
