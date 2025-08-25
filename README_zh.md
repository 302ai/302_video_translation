# <p align="center">🎥 AI 视频实时翻译 🚀✨</p>

<p align="center">AI视频实时翻译利用大语言模型对视频字幕进行实时翻译，支持Youtube、Bilibili等平台。</p>

<p align="center"><a href="https://302.ai/product/detail/35" target="blank"><img src="https://file.302.ai/gpt/imgs/github/20250102/72a57c4263944b73bf521830878ae39a.png" /></a></p >

<p align="center"><a href="README_zh.md">中文</a> | <a href="README.md">English</a> | <a href="README_ja.md">日本語</a></p>

![界面预览](docs/视频实时翻译.png)

来自[302.AI](https://302.ai)的[AI视频实时翻译](https://302.ai/product/detail/35)的开源版本。你可以直接登录302.AI，零代码零配置使用在线版本。或者对本项目根据自己的需求进行修改，传入302.AI的API KEY，自行部署。

## 界面预览
根据上传的视频链接，AI将读取视频并对视频字幕进行实时翻译。
![界面预览](docs/视频翻译1.png)

## 项目特性
### 🎥 多平台视频
  支持多平台视频，包括YouTube、TikTok、Bilibili及抖音视频。
### 🌍 多语言字幕翻译
  字幕可轻松切换中文、英文、日文、德语、法语和韩语。
### 📝 字幕下载
  可获取VTT、SRT、TXT格式的字幕文件。
### 💬 便捷分享
  快速与好友分享精彩视频内容。
### 🔄 多语言支持
  - 中文
  - English
  - 日本語
  - 德语
  - 法语
  - 韩语


通过AI视频实时翻译,任何人都可以高效获取视频信息! 🎉🎥 让我们一起探索AI驱动的信息获取新世界吧! 🌟🚀

## 🚩 未来更新计划
- [ ] 增加对更多小众语言的支持
- [ ] 拓展适配的视频平台数量
- [ ] 多语言专业领域优化

## 技术栈
- Next.js 14
- Tailwind CSS
- Shadcn UI

## 开发&部署
1. 克隆项目 `git clone https://github.com/302ai/302_video_translation`
2. 安装依赖 `pnpm install`
3. 配置302的API KEY 参考.env.example
4. 运行项目 `pnpm dev`
5. 打包部署 `docker build -t video-translation . && docker run -p 3000:3000 video-translation`


## ✨ 302.AI介绍 ✨
[302.AI](https://302.ai)是一个面向企业的AI应用平台，按需付费，开箱即用，开源生态。✨
1. 🧠 集合了最新最全的AI能力和品牌，包括但不限于语言模型、图像模型、声音模型、视频模型。
2. 🚀 在基础模型上进行深度应用开发，我们开发真正的AI产品，而不是简单的对话机器人
3. 💰 零月费，所有功能按需付费，全面开放，做到真正的门槛低，上限高。
4. 🛠 功能强大的管理后台，面向团队和中小企业，一人管理，多人使用。
5. 🔗 所有AI能力均提供API接入，所有工具开源可自行定制（进行中）。
6. 💡 强大的开发团队，每周推出2-3个新应用，产品每日更新。有兴趣加入的开发者也欢迎联系我们
