# 公共卫生量表库

独立公开网站，无需 ChatGPT 或网站账号，面向研究者提供量表检索、施测资料查阅与问卷准备工具。

## 当前功能

- 分类树与逐级浏览：类型 → 同源系列 → 量表／适用形式 → 具体版本。
- 本地检索：名称、简称、人群、题量及版本关系，支持中文近义词和主题、记录层级、版权风险筛选。
- 量表资料：中文简介、适用人群、计分说明、具体译本、文献及官方来源；区分历史索引与本轮已核对资料。
- 正式题文预览：当前16份具体表单，涉及成人DASS、DASS-Y、PHQ-9、PHQ-8、GAD-7、K6、K10。
- 问卷方案：选表、调整顺序、命名、浏览器本地保存、JSON备份及恢复；支持按导出状态筛选，并展示每份表单的导出状态和题文核对日期。
- 配套输出：4份成人DASS题本支持按当前方案生成问卷和使用说明Word，以及配套打印版（使用浏览器另存PDF）。另有DASS-21繁体中文固定Word/PDF示例。

未开放导出的表单仍可预览与选表，但会阻止整份方案的正式文件生成。题文整理和导出开放不代表已完成具体译本的目标人群验证；请核对各条证据说明。本站不收集受访者作答，不提供在线自测、自动诊断、账号或编辑后台。

具体后续工作与核验要求见 [ROADMAP.md](ROADMAP.md)。以上数量以 `app/verified-forms.ts` 为准。

## 本地使用

安装 Node.js 24 和 pnpm 10，执行 `pnpm install --frozen-lockfile`，然后 `pnpm dev`。正式构建为 `pnpm build`，输出在 docs。

目录筛选、方案解析及导出保护检查：`node tests/questionnaire-catalog.test.mjs`（Node.js 24）。

## 发布和后续修改

在 GitHub 仓库 Settings → Pages 中将 Source 设为 Deploy from a branch，选择 main 分支和 /docs。每次修改后运行 pnpm build，提交源码与 docs 并推送 main，GitHub 自动发布。之后可继续让 Codex 修改此仓库、检查并推送更新。

量表数据在 app/data.ts，分类在 app/taxonomy.ts，简介在 app/introduction-data.ts，施测资料在 app/administration-data.ts，文献在 app/references.ts；样式在 app/globals.css。

具体题本在 `app/verified-forms.ts`，有来源的版本说明在 `app/reviewed-profiles.ts`。问卷方案界面在 `app/questionnaire-builder.tsx`，目录筛选在 `app/questionnaire-catalog.ts`；问卷与说明共用 `app/questionnaire-package.ts` 的方案快照，分别由 `lib/questionnaire-docx.mjs` 和 `app/questionnaire-print.ts` 输出。

使用哈希导航，使 GitHub Pages 的仓库子路径和自定义域名都支持直接打开量表链接及刷新。所有搜索在浏览器本地完成，无后台数据库。公开资料供研究导航，正式使用量表需核对文献、手册及授权；公开代码不意味着第三方量表版权被转授。

先验证 github.io 地址，再修改域名解析；不要在新站可用前移除原站解析。
