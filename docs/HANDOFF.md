## 2026-10-10 — Current handoff: copy complete, custom domain deployed

Homepage Title is now `Compound Interest Calculator: Daily, Monthly & Yearly` (53 characters), Description naturally includes yearly plus contributions/goals/withdrawals (154 characters). Monthly/yearly explanation and checked comparison remain on the homepage. Build and online calculation smoke tests passed; keyword density remains above 3%.

Published URL: https://compound-interest-calculator-ecru-xi.vercel.app . Vercel project `compound-interest-calculator` / scope `maojunjuns-projects`, deployment `dpl_J78tuuyoTZHhcK4jPsAx5RYhEA5e`. No Git commit/push. Custom domain https://compound-interest-calculator.co is connected through apex A `76.76.21.21` (Spaceship, TTL 30 minutes); certificate issued and direct HTTPS checks passed. Current system proxy/browser access still fails on the new domain, while alias browser checks work. No proxy configuration was changed. See DEPLOYMENT.md and latest QA section for evidence and limitations. Older local-only statements below are historical.

## 2026-10-10 — Website name, metadata and pre-release QA

- User clarified the sole name is **Compound Interest Calculator**, with no separate invented brand. All live UI/schema/policies/OG/exports/print/package naming now agrees; responsive two-line wordmark verified from 320 to 1280px. Old Accrue references remain only in historical documents.
- Homepage Title is `Compound Interest Calculator: Daily & Monthly` (45 characters). Description is `Free compound interest calculator with daily or monthly compounding. Calculate savings growth, monthly contributions, savings goals and withdrawals.` (148 characters). Social metadata and schema aligned; seven content pages verified.
- Completed 283 recorded browser checks across three calculator modes, all numeric fields/options, independent output benchmarks, invalid input recovery, charts and touch dragging, copy/share/restoration, generated PNG/CSV, actual print PDFs, feedback and page navigation. No blocking defect found in tested scope. See QA-REPORT for the detailed matrix and boundaries.
- Final check: 28 automated tests, typecheck, lint and production build passed; production npm audit reports zero known vulnerabilities. Current homepage density is body 82/2444=3.3552%, main 79/2404=3.2862% (visible whole-phrase occurrences/all word tokens including numbers).
- Native Save As completion is still pending user confirmation; generated file bytes/Chrome temporary downloads were checked, and all PNG/print outputs visually reviewed. External email app/physical printer, other browser engines and real mobile devices were not tested.
- Local only. Deploy `out/`; live HTTPS/indexing/header checks remain. The official planned October 14 Next.js security update remains a follow-up, even with today's zero npm-audit findings. No claim of zero possible bugs or complete public launch acceptance.

---

## 2026-10-10 — Detailed website policies

- User requested careful, detailed terms/privacy and related policies, written in the website's own name with no postal address or developer information. Implemented English website-branded documents using Accrue, compound-interest-calculator.co and the existing email only; no invented personal/legal entity details, office location, credentials or jurisdiction.
- Terms of Use: 14 substantive sections covering scope, free service, all three modes, non-advisory use, assumptions, lawful use, output permissions and public links, original content, feedback, third parties, availability, proportionate liability limitations with mandatory-rights savings, disputes and updates. Removed obsolete claim that withdrawals are not modeled. No fabricated paid subscription/refund program, mandatory arbitration, class waiver or selected foreign venue.
- Privacy Policy: 14 substantive sections separating browser-only inputs from delivery requests and voluntary Gmail correspondence; sharing/encoding vs encryption, clipboard/download/print behavior, cookies, purposes/conditional lawful grounds, recipient categories, retention criteria, security/transfers, requests and verification, children and changes. Infrastructure provider, log retention and transfer facts remain unverified and are not invented. No blanket GDPR/CCPA/COPPA compliance claim.
- New /cookies/: 7 sections on current absence of application analytics/ad cookies, memory/history/cache/URL fragments/downloads, potential infrastructure behavior, browser controls and changes. No decorative cookie consent banner for nonexistent optional tracking.
- New /disclaimer/: 10 sections describing fixed-rate assumptions, APY/nominal conventions, inflation, rounded savings goals, capped withdrawals, retirement/market limitations, exclusions, exports, sources and legal protections.
- Shared LegalDocument provides dated heading, linked contents, numbered sections and cross-policy/email links. Footer, sitemap (now 7 pages), llms.txt, About and Contact updated. Contact now covers all three calculation modes, privacy requests, accessibility and content concerns.
- Verified rendered article words (including TOC and related links): privacy 2118; terms 1738; cookies 939; disclaimer 1126. Legal pages are exempt from tool keyword density/minimum-word rules; wording follows purpose rather than repetition.
- Validation: 28 tests/typecheck/lint/build pass. All six affected public pages return 200 and correct production canonical; one H1, unique IDs and resolved local TOC anchors. Four policy pages tested at 320px, no horizontal overflow, single-column TOC. Real footer link and disclaimer section jump checked. Homepage density remains 77/2434=3.1635%. Evidence: docs/evidence/local/legal-static-audit.json, legal-browser-audit.json and visually inspected terms-detailed.jpg.
- Sources consulted for drafting considerations: ICO right-to-be-informed guidance https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/ ; FTC privacy commitments https://www.ftc.gov/business-guidance/privacy-security ; ICO cookies guidance https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/ . Documents are implementation-grounded drafting, not a certification of compliance in every jurisdiction. Real operator identity/contact disclosure obligations, service-provider details, retention and international-transfer arrangements must be checked for actual operation; user explicitly excluded postal/developer details from these public pages.
- Local changes only. No deployment or domain/TLS changes performed.

## 2026-10-10 — Confirmed public domain and email icon

- User supplied compound-interest-calculator.co. Production build configuration now uses https://compound-interest-calculator.co and indexing=true in tracked .env.production (public metadata only, explicitly exempted from .gitignore; no secrets). .env.example documents the real origin with indexing=false for local development. Existing environment overrides still take precedence.
- Production build verified: homepage plus About/Contact/Privacy/Terms have correct self canonicals and index,follow metadata; robots references the real HTTPS sitemap; sitemap includes five real-origin URLs; llms.txt and JSON-LD use the supplied origin. Local preview.mjs continues sending X-Robots-Tag:noindex, even when previewing production artifacts. This work configures the domain but does not deploy, provision DNS or verify live TLS.
- Added a 44px envelope icon at the upper-right of the input card in all three modes, replacing the lower text entry to avoid duplicates. Accessible name and hover title supplied. Header/footer feedback remain available.
- Popup invites questions, problems and improvement suggestions and exposes websiteaftersales@gmail.com, the established site contact. Includes selectable email, Copy email, mailto link, close button, Escape and focus return. No email automatically sent.
- Browser verified all three modes, correct mailto, actual clipboard match, close/Escape/focus return and 320px dialog/icon layout without horizontal overflow. Native external mail-client launch not tested and no message sent.
- 28 tests, typecheck, lint and build passed. Final default whole-body density 77/2432=3.1661%, above the 3% floor. Evidence: docs/evidence/local/domain-contact-audit.json and email-feedback-popup.jpg (visually inspected).

## 2026-10-10 — GEO audit follow-up

User supplied AITDK localhost audit (75/100). Implemented applicable metadata/content fixes without claiming a new extension score or public crawl accessibility.

- Added linked Organization (Accrue publisher), WebSite, WebPage and WebApplication JSON-LD nodes. Names reflect brand vs tool, with one publisher identity; no invented professional reviewer, credentials, ratings, social profile or legal-registration facts. WebPage/WebApplication have author/publisher references and actual content dateModified=2026-10-10. datePublished omitted because public launch has not occurred.
- Added visible By Accrue link to About and `<time datetime>` updated dates. Added a verified 9-word Investor.gov compound-interest definition in a linked, attributed blockquote. Existing numerical examples unchanged.
- HTML title, OG title and Twitter title now agree; WebSite/Organization names and OG site_name are Accrue. The tool's descriptive name intentionally remains distinct from the site name.
- Added static /llms.txt with navigation, scope, caveats and source-page links; 200 text/plain verified. Public builds use configured absolute URLs; local preview uses relative URLs. This is an optional navigation aid, not a guarantee of AI crawling/citation and not a Google requirement.
- Canonical, indexing and Sitemap discovery already depended on a real public HTTPS origin. Added tests confirming local noindex/no invented canonical vs public canonical, five sitemap URLs, robots Sitemap reference, metadata consistency and entity IDs. Home sitemap lastModified comes from the same actual content date. Never use preview.mjs publicly: it always sends X-Robots-Tag:noindex.
- Remaining audit flags: HTTP and noindex are intentional on 127.0.0.1; no canonical / robots Sitemap line without the real public origin. HTTPS/deployed response headers/crawler reachability need actual deployment. sameAs omitted pending genuine brand profiles. Do not add unrelated authority links as brand identity. AITDK extension score not rerun; localhost robots Allow does not establish access by remote bots.
- Validation: 28 tests, typecheck, lint and static production build passed. Local homepage and llms.txt/robots.txt/sitemap.xml respond 200. SSR time attributes present; browser JSON-LD parses and entity relationships verified. Desktop screenshot inspected; 390px view has no horizontal overflow.
- Density (default growth/yearly, visible English text): main 77/2401=3.2070%; body 77/2433=3.1648%, above user minimum. Evidence: docs/evidence/local/geo-audit-followup.json and geo-metadata-updated.jpg.
- Official references checked: https://developers.google.com/search/docs/appearance/ai-features ; https://developers.google.com/search/docs/appearance/structured-data/organization ; https://www.investor.gov/introduction-investing/investing-basics/glossary/compound-interest ; optional file proposal https://llmstxt.org/ . No unverified AITDK visibility multipliers repeated as fact.

## 2026-10-10 — Confirmed keyword density floor: 3%

- User explicitly corrected the prior copy revision: exact keyword density must not fall below 3%. This supersedes the provisional approximately 2% interpretation below. SOP v4.2 records the confirmed minimum while retaining natural English as an editorial aim.
- Added contextual exact-phrase references in relevant headings and explanations; retained formulas, examples, core meaning, and existing tool functionality.
- Browser visible-text audit, desktop default Grow savings / yearly table: main 77 / 2,384 words = 3.2299%; full body 77 / 2,416 = 3.1871%; Guide 75 / 1,927 = 3.8921%. One H1. Exact complete phrase counts once; no hidden copies included. Dynamic expanded monthly schedules are not the baseline density denominator.
- Production build with TypeScript passed; final page screenshot inspected. Evidence: docs/evidence/local/keyword-density-min3.json and keyword-density-min3.jpg. No public deployment.

## 2026-10-10 — Natural English copy revision

- User now explicitly authorized copy changes: fluent English for Western readers, less stiffness, keyword density not too low. This supersedes the previous turn's copy freeze.
- Rewrote Guide content around user questions, shorter explanations and practical examples; removed repeated keyword-prefixed subheadings and multiple exact-phrase repetitions within each paragraph. Formula conventions and independently checked numerical examples remain intact.
- Updated all-mode PNG/CSV/share/summary/print instructions and mobile navigation explanation to match the implemented product. Revised meta description, homepage introduction and planning form helper sentence (no stale Example inputs claim after editing).
- Density interpretation: latest naturalness-first wording was implemented at approximately 2% across the page. Asked an optional question about relaxing the earlier 3.5–5% target; no explicit numerical confirmation received at completion. Do not record 2–3% as a confirmed permanent user preference. The lower density and tradeoff were disclosed in commentary and final delivery; earlier 3.5–5% requirement is not met by this revision.
- Actual desktop visible text, default Grow savings / yearly table: main 2,306 words, 47 complete phrase occurrences = 2.0382%; whole body 2,338 words / 47 = 2.0103%; Guide 1,851 words / 45 = 2.4311%. Counts use innerText, excluding hidden dialogs and print copies. Phrase counts once per exact match, not three words.
- Visible heading structure: H1=1, H2=16, H3=25, H4=7. Existing Guide anchors resolve. Production build/TypeScript passed. Desktop and 390px layout checked, with no page/formula overflow. No calculation behavior changed and no new automated tests added for copy edits.
- Evidence: docs/evidence/local/english-copy-audit.json and english-copy-refined.jpg. Local preview only, not deployed.

## 2026-10-10 — Experience improvements; existing copy preserved

- User authorized functional/mobile improvements and explicitly excluded copy edits. `components/Guide.tsx` and `app/page.tsx` are byte-for-byte unchanged (SHA256 recorded in local audit).
- All three modes now have a mobile sticky live result bar with Inputs / Results navigation. Invalid inputs replace the displayed result; no stale value or exports. Selects use 16px text on mobile. Desktop hides the bar; print hides all actions.
- Goal and withdrawal plans now support PNG preview/download, complete monthly CSV, share links and copy summary, alongside existing print. Files include assumptions; withdrawal exports distinguish actual cash received, shortages and depletion. Shared plan links use a validated `#plan1=` payload and restore mode plus active inputs; inactive mode data is omitted. Existing growth `#v1=` links still work. Reset clears shared plan URL and notice.
- Export actions cancel outdated asynchronous work when inputs change or the mode unmounts. Clipboard rejection has a selectable-text dialog. Downloads are generated locally with object URL cleanup.
- Validation: 25 tests + typecheck + lint + production build pass. Browser checked 320px / 390px, live values, input/result navigation, invalid fields, state across tabs, goal and withdrawal share restoration, malformed link fallback, legacy growth links and print media. Console error/warning log empty.
- Actual CSV and PNG downloads for both planning modes exist in the user's Downloads directory; CSV endpoints checked, PNG files visually inspected. The browser download-event API timed out despite successful CSV file download; disk evidence verified completion.
- Evidence: `docs/evidence/local/experience-upgrade-audit.json`, `mobile-live-result.jpg`, `planning-exports-updated.jpg`. Real physical phone and native print dialog completion remain unverified. Local preview only; no deployment.
- Existing explanatory copy was deliberately preserved at the user's request, including its older, narrower description of planning exports. New controls provide the expanded functionality.

## 2026-10-10 — Homepage consolidation (supersedes separate-page expansion)

User correction: remove Understand the formula and Calculate in Excel cards; merge Savings goal and Withdrawals into the homepage calculator. Formula and Excel explanations belong in homepage copy. User also specifies tool-page-only density 3.5%–5%, >=1,000 English words and one H1 with substantive H2/H3/H4.

Implemented one CalculatorWorkspace with Grow savings / Savings goal / Withdrawals tabs, accessible keyboard navigation and separate preserved form values during a visit. Existing calculation engines, chart readouts and growth exports retained. Growth hash links restore growth mode; #savings-goal and #withdrawals select the corresponding mode without encoding inputs. Fixed Custom inputs badge after remount. Removed four route source files, RelatedTools, PlanningGuide and unused page schema component; migrated useful methods, worked examples and Excel FV/PMT to Guide. Updated About anchors, header and sitemap. No new standalone tool/content routes remain. These URLs were never publicly deployed; removed local routes now return404 rather than remaining duplicate pages.

Verified default growth main-visible content:2552 words,94 exact occurrences,3.6834%; entire visible body:2584 words,94 occurrences,3.6378%. One phrase occurrence counts once. English tokens use /[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g; phrase matching ignores case and normalizes whitespace. main includes tool controls/default annual table and guide, excludes CSS-hidden dialogs/print copies/collapsed details via innerText. Visible headings:H1=1,H2=16,H3=24,H4=6. Tool-only rule recorded in SOP4.1; unrelated pages exempt. Density is a user editing criterion, not an asserted Google ranking standard.

Checks:21 tests, typecheck, lint and fresh static build. Browser: all three modes, remembered12000 principal /60000 target /300 withdrawal, mouse and keyboard tabs, same-origin growth share restoration from withdrawal mode, default results and chart endpoints,320px layout. No duplicate DOM IDs or old-card links. Native print completion and original export OS handoff limitations remain as previously documented; not a renewed entire-site acceptance claim. Local preview http://127.0.0.1:3000/ . No deployment.

---

## 2026-10-10 — Task-based SEO expansion implemented locally

Validated the supplied research against Google, SEC Investor.gov, The Calculator Site and Microsoft primary pages. Real Calculator Site URL recovered; volumes, KD, DR, traffic and revenue remain user-supplied/unverified. Moneychimp source fetch still failed. Decisions/evidence: [expansion validation](research/expansion-validation.md).

Implemented homepage synonym coverage and four linked routes: withdrawals, savings goal, formula guide and Excel tutorial. New tool inputs/results are separate tasks; no compounding-synonym clone pages. Withdrawal engine caps actual payments at available funds and separates depletion from first shortfall. Goal engine solves monthly savings, rounds upward to cents and verifies using the forward engine. Shared chart supports declining balances, cumulative withdrawals and a milestone line; existing inline pointer/touch/keyboard readouts remain.

Checks: 21 tests, TypeScript, ESLint and static build pass; production dependency audit reports zero known vulnerabilities. Browser scenarios and page metadata checks recorded in QA. Fixed floating-point cent over-rounding found by an independent $201/two-month case. New tools have >1,000 visible English words; tutorial pages are substantive articles rather than tool landing pages. Local noindex preserved; no public origin, deployment or search-indexing claim.

Limits: keyword statistics were not independently obtained; no new top-ten SERP snapshot or complete competitor re-audit. New tools provide schedule/print but no PNG/CSV/share actions; the existing home exports remain. Print CSS visually checked; native print completion and actual Excel application execution not verified. Daily/weekly/continuous pages, broad finance tools and language expansion deferred pending distinct functionality and evidence. No llms.txt exists; not added solely for a ranking claim.

---

# 最新更新 — 2026-10-10 图内拖动与浮动读数

根据用户反馈，删除上一版分离的读数面板和外置滑杆。现在直接在图上鼠标移动/拖动或触摸滑动，时间、余额、投入、利息显示在曲线旁的浮动框中，随选中月份移动，靠近边缘自动约束在图内。图表本身支持键盘方向键、Home/End、PageUp/PageDown。移动端采用独立图形比例，让图内数字可读。

验证：桌面10年 $47,526.55，手机触摸连续滑到10年和15年（$74,594.83）；起点/终点键盘操作；320px下起点、终点浮层四边均在图内，页面无横向溢出。构建、13项测试、TypeScript、ESLint通过。手机为浏览器触摸模拟。截图：[桌面](evidence/local/chart-inline-desktop.jpg)、[手机](evidence/local/chart-inline-mobile.jpg)。本节替代此前分离面板和滑杆的设计说明。

---

# 最新预览 — 图表可拖动

http://127.0.0.1:3000/ 。在曲线上左右移动/拖动，或拖下方滑杆，查看每个月的余额、投入和利息。键盘方向键逐月查看，Home/End到起点/终点。桌面及模拟手机交互已验证。详见QA-REPORT.md最新记录。

---

# 最新状态 — 2026-10-10 逐控件功能验收

完成 11 个计算参数、所有选择器选项、站内操作按钮、只读输入、反馈、导航、右侧结果与桌面/390/320px 操作检查。89 组数值/状态记录通过，13 个测试、类型检查、ESLint 和构建通过。修复 5 处问题：图片弹窗焦点、剪贴板 pending 无降级、手动复制首次未全选、快速再次复制被旧关闭事件打断、PNG 缺少购买力结果。

计算引擎未修改。原生下载落盘、系统打印窗口完成、外部邮箱客户端唤起仍未确认，不能称全链路全部通过。详见 QA-REPORT.md 最新矩阵与证据。预览 http://127.0.0.1:3000/ 已恢复默认，未部署。

---

最新报告：[逐控件验收](QA-REPORT.md)。剩余最终手工检查：PNG/CSV 是否保存到本机、系统打印是否可完成、Open email app 是否打开已配置的邮件客户端。

# 本地初版交接

2026-10-10 · compound interest calculator · Accrue。

当前结论：**可预览，核心功能已验证，SOP 全量验收仍有明确缺口。未推送、未公开部署。**

## 最新视觉改版

已按用户要求重做暖白/森林绿风格、衬线标题、原创增长图形、深绿结果卡片和统一表格/导出样式。桌面、390px及320px已检查，10项测试、类型检查、lint及构建通过。打开 http://127.0.0.1:3000/ 查看。截图：[桌面](evidence/local/redesign-desktop.jpg)、[手机](evidence/local/redesign-mobile390.jpg)。

## 最新竞品验证

换节点后，此前打不开的Moneychimp、Bankrate、BNC、Anderson均恢复访问并补测，原始十站都有实际数值证据。累计149个数值结果中148个吻合、1个Ramsey长周期差异已复现；银行同一报告的4种复利分别计4条结果。新发现Bankrate零利率只显示$且图表残留旧值、Moneychimp零频率返回0及手机溢出。两家银行完整报告已分别验证，打印和部分控件仍有缺口。**十站全控件验收仍未完成，不能宣称我们的体验全面超过十站。** 详见[逐站矩阵](research/google-top10-audit.md)与[算例CSV](research/competitor-verified-cases.csv)。本轮未修改应用代码。

## 本轮改进

PNG/CSV增加预览、明确下载链接与手动保存备用方式；修复生成图片时点击分享导致按钮卡住的问题；分享和CSV数值统一格式；新增可跳转并展开高级字段的错误摘要。320px导出弹窗与键盘操作已实测。下载接口明确不支持Blob，最终普通下载落盘仍未确认。截图：[新版导出](evidence/local/export-preview-v2.jpg)、[320px导出](evidence/local/export-mobile320-v2.jpg)。

## 打开与运行

预览：http://127.0.0.1:3000 。已在真实 Chrome 打开生产构建，并保留可操作标签。服务仅监听本机，不是公网地址。

服务停止后，在项目目录执行 `npm start`。首次安装或修改源码后：

```powershell
npm ci
npm run check
npm run build
npm start
```

源码位于当前项目目录，依赖和锁文件齐全；修改尚未提交。配置见 [README](../README.md)。

## SOP 逐步状态

| 步骤 | 状态与证据 |
|---|---|
| 0 启动与记录 | 已读取用户 SOP，检查环境，建立文档；未修改 SOP 正文 |
| 1 需求与公式 | 来源、公式、单位、限制与独立算例见 [研究](research/keyword.md) |
| 2 搜索与竞品 | 原词自然前十已记录；尝试13个地址，12页已操作，9页取得数值。去重后10种工具已交互，但完整控件/导出/窄屏覆盖不足，**不标记全量通过**，见 [竞品审计](research/google-top10-audit.md) |
| 3 功能与设计 | 编码前已保存功能规范、桌面/手机结构与视觉规则 |
| 4 开发 | 计算、图表、明细、导出、分享、反馈、正文和四个信息/法律页面已实现 |
| 5 SEO/GEO | 本地 HTML、元信息、单H1、资源、404、JSON-LD、noindex 已检查；正式域名与线上索引验收待配置 |
| 6 验收 | 10组测试、类型、lint、构建、审计、独立算例和主要浏览器交互通过；完整覆盖边界见 [QA报告](QA-REPORT.md) |
| 7 本地交付 | 可预览并附验收边界的初版，不是“所有项目全部通过” |
| 8 推送/发布 | 未授权、未执行，准备事项见 [部署说明](DEPLOYMENT.md) |

## 已核对能力

- 本金、定期投入、年/月期限、四种复利频率；名义利率/APY、期初/期末、通胀与五种显示币种。
- 正常、零值、无效输入与错误恢复。基准16288.95和31998.32与独立公式一致。
- 年/月明细、图表、复制摘要、非默认分享恢复、损坏分享回退；反馈邮箱复制、失败提示、Escape与焦点循环。
- PNG1200×800、CSV真实生成内容已打开检查；默认一页和百年四页打印PDF已渲染检查。自动化未取得下载最终路径，不能声称下载全链路通过。
- 桌面1440、平板768、390px与320px模拟视口；修复标题空格、重复ID、双H1、打印孤行和弹窗焦点。默认可见英文内容2167词。

## 人工检查顺序

1. 默认案例 → 自己的假设 → APY与投入时点。
2. 手机输入 → 图表与月度明细。
3. Save image、CSV、Print → 本机下载位置与打印窗口。
4. 计算约定、About、Privacy、Terms与反馈入口。
5. 品牌、字号、间距与视觉偏好。

## 证据和剩余项

本地截图：[桌面](evidence/local/desktop1440.jpg)、[390px](evidence/local/mobile390.jpg)、[320px弹窗](evidence/local/mobile320-dialog.jpg)。证据目录被 Git 忽略，只在本机存在。输出文件捕获方式见 QA 报告。

主要剩余项：竞品完整控件覆盖；普通下载最终保存；原生打印界面；真机与完整辅助技术覆盖；正式域名、托管事实与线上验收。部署前还须复核 Next.js 官方预告的10月14日安全更新，当前审计0项不代替届时补丁核查。

没有创建账号、支付、分析或数据库，没有发送邮件，没有注册域名、修改 DNS 或发布站点。

## 2026-10-10 — Latest local preview
Current direction is the financial workbench, superseding the forest/cream design. Preview: http://127.0.0.1:3000/ . Static output rebuilt. Screenshots: [desktop](evidence/local/workbench-desktop.jpg), [mobile](evidence/local/workbench-mobile390.jpg), [PNG preview](evidence/local/workbench-export.jpg). Build, 10 tests, typecheck and lint pass. Browser preview retained; not published.
