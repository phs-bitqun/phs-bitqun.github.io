# 张群 · AI 交付工作室

面向 AI 软件开发、AI 视频制作、新媒体代运营、IT 技术咨询与 AI 落地交付的单页个人业务网站。

## 技术栈

- Astro 静态站点
- TypeScript 内容数据
- 原生 CSS 与浏览器 JavaScript
- 构建产物位于 `dist/`

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址为 `http://localhost:4321`。

## 验证与构建

```bash
npm run check
npm run build
npm run preview
```

- `npm run check` 执行 Astro 类型与模板检查。
- `npm run build` 生成可部署的静态文件。
- `npm run preview` 在本地预览生产构建。

## 内容维护

主要业务内容集中在 `src/data/site.ts`：

- `site`：姓名、品牌、简介、邮箱、所在地与 SEO 关键词。
- `services`：五项服务及各自的参考起价。
- `cases`：可核实的真实项目。
- `capabilityScenarios`：明确标注的能力场景，不作为客户案例。
- `processSteps`、`experience`、`faqs`：合作方式、经历与常见问题。

页面组件位于 `src/components/`，全局样式位于 `src/styles/global.css`。

调整价格时，请同时修改 `startingPrice`、`priceUnit` 和页面底部“报价说明”。当前金额是便于客户判断预算的参考起价，正式合作前应按确认范围提供固定报价。

## 咨询表单

表单不上传或保存数据。用户提交后，浏览器会打开默认邮件客户端，并向 `bitqun@163.com` 生成一封已填写服务方向、时间与需求说明的邮件。

如需替换联系邮箱，请修改 `src/data/site.ts` 中的 `site.email`，同时检查 `src/components/Contact.astro` 内生成 `mailto:` 的逻辑。

## 部署

站点输出为纯静态文件，可部署到 Cloudflare Pages、Vercel、Netlify 或任意静态托管服务。

当前 GitHub Pages 发布信息：

- 在线地址：<https://phs-bitqun.github.io/>
- 源码分支：`codex/site-v2`
- Pages 发布分支：`gh-pages`（根目录）
- 发布产物：`dist/`，包含 `.nojekyll` 以支持 Astro 的 `_astro/` 资源目录

构建前可通过环境变量设置正式站点地址：

```bash
SITE_URL=https://example.com npm run build
```

该地址用于 canonical、Open Graph、站点地图与结构化数据；未设置时使用正式 Pages 地址 `https://phs-bitqun.github.io`。

## 内容边界

- 不虚构未公开的 AI 客户案例。
- AI 软件、视频与交付示例统一标注为“能力场景”。
- 不在站点中公开个人手机号。
- 第三方模型、素材、字体与服务授权应在报价和合同中单独说明。
