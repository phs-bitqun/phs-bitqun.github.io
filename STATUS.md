# STATUS

## 当前阶段

v2 重构、GitHub 源码同步与 GitHub Pages 发布均已完成。原项目保持不变，v2 是独立副本。

## 产物

- 原项目：`/Users/phs/Documents/codex/zhangqun-opc-site`
- 重构副本：`/Users/phs/Documents/codex/zhangqun-opc-site-v2`
- GitHub 仓库：https://github.com/phs-bitqun/phs-bitqun.github.io
- 源码分支：`codex/site-v2`
- Pages 发布分支：`gh-pages`
- 在线站点：https://phs-bitqun.github.io/
- 图片许可页：https://phs-bitqun.github.io/credits/
- 生产构建：`/Users/phs/Documents/codex/zhangqun-opc-site-v2/dist`
- 本地预览：http://127.0.0.1:4322/

## 已完成

- 采用“一人交付工作台”视觉方向，石灰色为底、橄榄绿为行动色。
- 覆盖 AI 软件开发、AI 视频制作、新媒体代运营、IT 技术咨询与 AI 落地交付。
- 完成桌面与移动端导航、响应式页面、表单邮件生成、复制邮箱和键盘焦点交互。
- 保留真实经历：浠水本地经历、首届“浠水好声音”、湖北润东生物与地方文献。
- 能力场景明确标注为“不是客户案例”，不虚构客户、案例或量化结果。
- 联系邮箱为 `bitqun@163.com`，未公开手机号。
- 已建立 `/credits/` 图片许可页；占位图片不代表张群本人或客户现场。
- 已将源码同步到 GitHub `codex/site-v2`，并发布 `dist/` 到 `gh-pages`。
- 已启用 GitHub Pages，来源为 `gh-pages` 根目录。

## 验证

```bash
cd /Users/phs/Documents/codex/zhangqun-opc-site-v2
npm run check
SITE_URL=https://phs-bitqun.github.io npm run build
```

- `npm run check`：0 errors，0 warnings，1 hint；提示来自 `public/motion/motion.js:345` 的未使用参数，属于引入的 motion 文件，未修改。
- 生产构建：成功，生成 `/`、`/credits/`、robots 与 sitemap。
- GitHub Pages：构建状态 `built`。
- 线上首页：HTTP 200。
- 线上 `/credits/`：HTTP 200。
- 线上 `_astro/BaseLayout.Cx1ZRPKY.css`：HTTP 200。
- 线上 `/sitemap.xml`：HTTP 200。
- 首页 canonical：`https://phs-bitqun.github.io/`。
- 许可页 canonical：`https://phs-bitqun.github.io/credits/`。
- 最新六视口布局复核：1440x900、1024x768、820x1180、768x1024、390x844、320x844 均为 `no findings`。
- 设计 gate：`GATE: OPEN 15 (rounds used up)`，不再继续视觉试错。

## 端口

- 4321：原项目预览，PID 1282，未停止、未重启、未修改。
- 4322：v2 生产预览，PID 48146，首页与 `/credits/` 均返回 200。

## 遗留风险

- 图片为许可占位图，不代表张群本人、客户现场或真实项目成果。
- 项目没有独立 lint 脚本；当前以 `astro check` 和 `astro build` 作为代码验证。
- gate 仍有中文排版尺寸规则、固定整屏叙事与视觉面积统计导致的开放 FAIL，详见最终报告。
- 后续修改源码并重新发布时，需重新构建 `dist/` 并同步到 `gh-pages`。
