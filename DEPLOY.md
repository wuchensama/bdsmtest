# 欲望动物测试 · GitHub Pages 上线（bdsmtest.de5.net）

## 现状

- 昨天的公网链接是临时隧道：`https://fuzzy-dingos-nail.loca.lt/`
- 电脑关机 / 进程断掉就会失效，域名也会变
- 你已有域名：`bdsmtest.de5.net`（DNS 面板目前「未解析」）
- 目标：接到 GitHub Pages，免费、直开、无确认页

## 一、先发到 GitHub Pages

1. 打开 https://github.com/new
2. 仓库名建议：`bdsmtest`（Public）
3. 不要勾选 README / .gitignore
4. 在本机执行（已确认 GitHub 用户：`wuchensama`）：

```bash
cd "/Users/jymacmini/Documents/deepseek-harness/default-workspace/desire-animal"
git init
git add index.html app.js styles.css questions.js assets CNAME DEPLOY.md
git commit -m "publish desire-animal to GitHub Pages"
git branch -M main
git remote add origin https://github.com/wuchensama/bdsmtest.git
git push -u origin main
```

5. GitHub 仓库 → **Settings → Pages**
   - Source：`Deploy from a branch`
   - Branch：`main` / `/ (root)` → Save
6. 同页 **Custom domain** 填：`bdsmtest.de5.net` → Save  
   （仓库根目录已有 `CNAME` 文件，内容就是这个域名）

临时预览地址会是：

`https://wuchensama.github.io/bdsmtest/`

## 二、在 de5.net DNS 面板添加记录

你的截图域名是 `bdsmtest.de5.net`，面板里现在是空的。按下面加：

### 方案 A（推荐，apex / 根域名）

添加 **4 条 A 记录**（主机记录填 `@` 或留空，以面板为准）：

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

可选 IPv6（AAAA，主机也是 `@`）：

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

### 方案 B（若面板不允许根域名 A，只允许 CNAME）

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| CNAME | `@` | `wuchensama.github.io` |

注意：CNAME 目标是 `wuchensama.github.io`，**不要**写成 `wuchensama.github.io/bdsmtest`。

### 可选：www

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| CNAME | `www` | `wuchensama.github.io` |

## 三、打开 HTTPS

1. DNS 生效后（通常几分钟到几小时，最长约 24 小时）
2. 回到仓库 Settings → Pages
3. 看到域名旁打勾后，勾选 **Enforce HTTPS**

最终访问：

`https://bdsmtest.de5.net`

## 四、本地自检

```bash
dig bdsmtest.de5.net +noall +answer -t A
# 应看到 185.199.108/109/110/111.153
```

浏览器无痕打开 `https://bdsmtest.de5.net`，应直接进测试首页，无 loca.lt 确认页。

## 五、和昨天临时链接的关系

- `loca.lt` 可以关，不再需要电脑常开
- 以后改代码：改完再 `git add && git commit && git push`，Pages 自动更新
