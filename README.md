# 公共卫生量表库

独立公开网站，无需 ChatGPT 或网站账号。包含量表分类树、逐级浏览、中文简介、版本关系、文献链接和交互检索。内容沿用原网站已发布版本，不包含账号、密码或在线编辑后台。

## 本地使用

安装 Node.js 24 和 pnpm 10，执行 `pnpm install --frozen-lockfile`，然后 `pnpm dev`。正式构建为 `pnpm build`，输出在 docs。

## 发布和后续修改

在 GitHub 仓库 Settings → Pages 中将 Source 设为 Deploy from a branch，选择 main 分支和 /docs。每次修改后运行 pnpm build，提交源码与 docs 并推送 main，GitHub 自动发布。之后可继续让 Codex 修改此仓库、检查并推送更新。

量表数据在 app/data.ts，分类在 app/taxonomy.ts，简介在 app/introduction-data.ts，施测资料在 app/administration-data.ts，文献在 app/references.ts；样式在 app/globals.css。

使用哈希导航，使 GitHub Pages 的仓库子路径和自定义域名都支持直接打开量表链接及刷新。所有搜索在浏览器本地完成，无后台数据库。公开资料供研究导航，正式使用量表需核对文献、手册及授权；公开代码不意味着第三方量表版权被转授。

先验证 github.io 地址，再修改域名解析；不要在新站可用前移除原站解析。
