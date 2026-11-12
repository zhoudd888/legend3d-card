# 传奇3D纯净点卡版 · 官网静态站点

纯前端静态官网原型，无需 Node 构建，可直接部署到任意静态托管（GitHub Pages / Nginx / 阿里云 OSS + CDN 等）。

## 目录结构

```
legend3d-card/
├── index.html          # 站点入口（单页锚点结构）
├── css/
│   └── style.css       # 全站样式（暗金 / 血红 / 黑曜主题，响应式）
├── js/
│   └── main.js         # 数据渲染与交互（筛选、弹窗、大图预览、Toast）
├── images/             # 本地配图（7 张）
└── README.md
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或在本目录启动一个静态服务：

```bash
# 任选其一
python -m http.server 8080
npx serve .
```

然后访问 http://localhost:8080

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（账号 zhoudd888），推送本目录全部文件到 `main` 分支根目录。
2. 仓库 **Settings → Pages**，Source 选择 `Deploy from a branch`，分支 `main`、目录 `/ (root)`，保存。
3. 等待 1–2 分钟，访问 `https://zhoudd888.github.io/<仓库名>/`。

## 绑定自定义域名（阿里云域名）

1. 域名控制台添加解析：
   - `CNAME` 记录，主机记录 `www`，记录值 `zhoudd888.github.io`
   - 根域名 `@` 可做 URL 跳转至 `www`
2. 仓库 **Settings → Pages → Custom domain** 填入域名并保存（自动生成 `CNAME` 文件）。
3. DNS 生效后勾选 **Enforce HTTPS**。
4. 备案说明：解析到中国内地服务器需先完成 ICP 备案；解析到境外（GitHub Pages）无需工信备案，但建议做公安联网备案。

## 百度收录备忘

1. 站点通过域名可正常访问、HTTPS 正常后，登录百度搜索资源平台（ziyuan.baidu.com）。
2. 添加站点并完成归属验证（文件验证 / HTML 标签 / CNAME）。
3. 提交 `sitemap.xml` 与核心页面 URL；后续更新内容可接入主动推送 API。

## 说明

- 站内下载、充值、注册按钮均为前端演示占位，不接入真实账号体系与支付。
- 游戏名称与素材仅用于原型演示，不构成任何商业承诺；正式商业化前请确认相关授权与资质。
