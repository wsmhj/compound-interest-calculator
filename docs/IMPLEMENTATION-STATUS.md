## 2026-10-10 — Source pushed and production release verified

- Source commit `aeff482d291c42274abdc4da5753428cf5528eed` was pushed to `https://github.com/wsmhj/compound-interest-calculator` (`main`); local and remote SHAs matched. The subsequent release-record commit changes documentation only.
- Vercel built the source in Linux using `npm ci` and `npm run build`, exported all static routes, and marked deployment `dpl_5uuL2K6JVSmxHK4VsiRM7hEi17EK` READY. Immutable URL: https://compound-interest-calculator-fqohkhhqg-maojunjuns-projects.vercel.app . Production alias: https://compound-interest-calculator.co . `.vercelignore` excludes local QA artifacts/caches from future uploads; final upload contains 77 source/configuration files.
- Fresh independent Windows checkout: Node 22.22.0 / npm 10.9.4, 28 tests + typecheck + lint + production build passed. Windows and cloud dependency installation audits reported zero known vulnerabilities.
- Normal HTTPS through the current network now works; the earlier proxy failure is no longer reproduced. Seven content routes and robots/sitemap/llms return 200; an unknown route redirects to its trailing-slash form and returns 404. Homepage has the requested Title, correct canonical, index/follow and no noindex response header.
- On the final production URL, verified $1,000 / zero deposits / one year / 10% yields $1,104.71 with monthly compounding and $1,100.00 annually; resetting restores $109,333.14. Browser console error log empty. Existing broad QA coverage remains in QA-REPORT; this release used targeted smoke testing, not a repeat of every prior control check.
- Local evidence: `docs/evidence/local/release-http.json`, `release-production-home.png`. Earlier working production `dpl_J78tuuyoTZHhcK4jPsAx5RYhEA5e` remains the recorded recovery baseline. Native Save As/real-device limitations and the October 14 framework-security follow-up remain. No Search Console submission or ranking claim.
- Publishing was performed with the Vercel CLI; automatic GitHub-triggered deployment has not been configured or claimed.

## 2026-10-10 — Source release preparation

User authorized pushing and deploying the complete source. Remote `origin/main` was inspected at `d0e3af7` before the first source push. Added static Vercel source-build configuration (`npm ci`, `npm run build`, output `out/`) and ignored `.vercel/`; no calculator behavior or page copy changed in this release step.

The complete staged source was exported with `git checkout-index` into an independent new temporary directory outside the workspace. Windows / Node 22.22.0 / npm 10.9.4: fresh `npm ci`, all 28 tests, TypeScript, ESLint and production build passed; installation audit reported zero known vulnerabilities. No existing node_modules or build cache was reused. Credential-pattern scan and staged file review excluded local evidence, caches and credentials; tracked environment files contain public metadata only.

Prior working deployment for recovery: `dpl_J78tuuyoTZHhcK4jPsAx5RYhEA5e`. Production origin remains https://compound-interest-calculator.co. Push and cloud-build results will be recorded separately after completion. Existing QA limitations and the planned October 14 framework-security follow-up remain applicable.

## 2026-10-10 — Monthly/yearly copy and first public release

- Title: `Compound Interest Calculator: Daily, Monthly & Yearly` (53 characters). Description: `Free compound interest calculator with daily, monthly or yearly compounding. Explore savings growth, monthly contributions, savings goals and withdrawals.` (154 characters). Shared constants keep social/schema metadata aligned.
- Added homepage guidance for Monthly (12 periods/year) versus Annually (yearly), a checked $1,000/10% example, and clarification that monthly contributions are independent of compounding frequency. No new inner page.
- Build passed. Visible default-homepage density: body 83/2572 = 3.2271%; main 81/2535 = 3.1953%; one H1. Both meet the requested 3% minimum.
- Static release is live at https://compound-interest-calculator-ecru-xi.vercel.app . Custom domain https://compound-interest-calculator.co is connected, DNS verified and certificate issued. Direct HTTPS route/metadata checks passed; current system proxy/browser access to this new domain still fails, while the Vercel alias works. See DEPLOYMENT.md for exact status.

## 2026-10-10 — Header icon only

- Removed the visible website-name text beside the top navigation logo, as requested. Header keeps its home link, SVG icon and accessible label; footer and print wordmarks retain their names.
- Production build (including TypeScript) passed. Browser reload confirmed header text contains only navigation/feedback labels; screenshot: docs/evidence/local/header-icon-only.png.

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

## 2026-10-10 — 删除图表黑色焦点外框

按用户要求移除整张图表的点击/焦点矩形外框，键盘焦点改为选中数据点的描边。生产构建通过；浏览器实际点击确认 focus=true、outline=none，Home/End 仍分别显示 $10,000.00 / $109,333.14，点击选点和浮动读数正常。证据：[无黑框图表](evidence/local/chart-no-focus-frame.jpg)。

# 最新更新 — 2026-10-10 图内拖动与浮动读数

根据用户反馈，删除上一版分离的读数面板和外置滑杆。现在直接在图上鼠标移动/拖动或触摸滑动，时间、余额、投入、利息显示在曲线旁的浮动框中，随选中月份移动，靠近边缘自动约束在图内。图表本身支持键盘方向键、Home/End、PageUp/PageDown。移动端采用独立图形比例，让图内数字可读。

验证：桌面10年 $47,526.55，手机触摸连续滑到10年和15年（$74,594.83）；起点/终点键盘操作；320px下起点、终点浮层四边均在图内，页面无横向溢出。构建、13项测试、TypeScript、ESLint通过。手机为浏览器触摸模拟。截图：[桌面](evidence/local/chart-inline-desktop.jpg)、[手机](evidence/local/chart-inline-mobile.jpg)。本节替代此前分离面板和滑杆的设计说明。

---

# 最新更新 — 2026-10-10 可拖动图表

右侧图表增加鼠标悬停/按住拖动和触摸拖动：按月显示时间、余额、累计投入、累计利息，指示线和圆点同步移动。使用完整月度数据绘线，避免读数与年度插值曲线不重合。另有原生滑杆，支持方向键、Home/End，并向辅助技术提供完整金额。修改计算参数会重新显示当前方案末期；零时长禁用滑杆。

验证：桌面真实鼠标移动/按住拖动，390px 触摸事件连续拖动，320px 无页面横向溢出；起点 $10,000.00、首月 $10,241.67、7年6月 $36,323.78、10年 $47,526.55、15年 $74,594.83、终点 $109,333.14 与月度计算结果一致。测试了1年、1年1月、零时长、重置和键盘操作。构建、13项现有测试、类型检查、ESLint通过。触摸为浏览器模拟，非物理手机。

证据：[桌面拖动](evidence/local/chart-drag-desktop.jpg)、[手机拖动](evidence/local/chart-drag-mobile.jpg)。本轮只回归图表相关交互，之前完整测试记录及系统下载/打印/邮件交接限制仍见下文。

---

# 最新状态 — 2026-10-10 逐控件功能验收

完成 11 个计算参数、所有选择器选项、站内操作按钮、只读输入、反馈、导航、右侧结果与桌面/390/320px 操作检查。89 组数值/状态记录通过，13 个测试、类型检查、ESLint 和构建通过。修复 5 处问题：图片弹窗焦点、剪贴板 pending 无降级、手动复制首次未全选、快速再次复制被旧关闭事件打断、PNG 缺少购买力结果。

计算引擎未修改。原生下载落盘、系统打印窗口完成、外部邮箱客户端唤起仍未确认，不能称全链路全部通过。详见 QA-REPORT.md 最新矩阵与证据。预览 http://127.0.0.1:3000/ 已恢复默认，未部署。

---

# Implementation status

## 2026-10-10 — visual redesign (latest)

- Responded to user request to improve appearance: warm paper/forest palette, editorial serif hero, original SVG motif, dark result summary, calmer forms, chart, table, guide and footer. Updated brand assets and PNG export palette. Calculation model unchanged.
- Production build, all10 existing tests, TypeScript and lint passed. Browser checked default109333.14, edited principal12000→114758.42, zero rate→60000, invalid101years removing result, reset, PNG/CSV preview and Escape.390px and320px had no page overflow. Fixed narrow-dialog eyebrow/close spacing found during review.
- Local production preview remains http://127.0.0.1:3000/. Screenshots in evidence/local/redesign-*.jpg. This round validates previews, not final OS download/print output. No deployment or push.


## 2026-10-10 — four blocked competitors recovered after node change

- Moneychimp, Bankrate, BNC and Anderson all loaded through their original URLs after the user changed network node. All four were operated and produced actual numerical output; both KJE hosts' reports were independently opened and inspected.
- Added70 numerical results:17 Moneychimp,13 Bankrate,20 BNC,20 Anderson. Independent reconciliation:149 total,148 match, one previously recorded Ramsey difference. Four frequencies within a bank report are four numerical results, not four separate UI runs.
- Added frequency/timing/boundary/recovery/report/help/keyboard/mobile evidence. Confirmed Bankrate zero-rate blank currency output with stale chart, Moneychimp zero-frequency result0 and mobile horizontal overflow, bank fractional-years rounding and values outside advertised bounds.
- Printing remains unverified after button-operation timeouts; partial slider/legend paths remain unconfirmed. Full-control acceptance is not complete. Current truth: [audit matrix](research/google-top10-audit.md), [numerical CSV](research/competitor-verified-cases.csv). No app source changes or deployment.

## 2026-10-10 — original top-ten deep audit (before node change)

- User explicitly required the original ten Google results to be deeply tested; supplemental tools do not substitute. Rechecked all ten URLs: six received new interactions, four blocked (Moneychimp client blocking; Bankrate/BNC/Anderson connection closed). NerdWallet later entered a persistent security-verification page.
- Recorded 79 independently calculated, evidence-backed numerical cases:78 match documented conditions/display precision; Ramsey daily100-year case differs and was reproduced in a fresh page. Zero-year NaN and stale-result behavior also documented.
- Extended coverage to frequency choices, deposit/withdrawal timing and growth, zero/negative/boundary inputs, recovery, table/chart/help, share restoration, actual Investor CSV contents, and390px views. Export/print/tool limitations and individual untested controls remain explicit. Full original-ten acceptance is **not complete**.
- Current source of truth: [audit matrix](research/google-top10-audit.md) and [numeric cases](research/competitor-verified-cases.csv). Screenshots/raw logs/checker are local-only under evidence/local/competitors. Browser viewport override restored; print-blocked research tabs closed; user preview left intact.
- No application source changes, deployment, push, account actions, social posts, sales leads, or emails. Verification this round is browser research plus independent math reconciliation; no app build rerun was needed.

## 2026-10-10 — export and state improvements

- Added ExportDialog: image preview, full selectable CSV, explicit download links, size/format labels, accurate download-request status, manual fallback, Escape and contained keyboard focus. Blob URLs are revoked on close/unmount.
- Fixed shared async epoch leaving PNG busy forever when Share/Copy superseded pending generation; hash restoration and unmount also invalidate pending work. Browser delayed-toBlob test verified recovery and suppressed stale image modal.
- Canonicalized numeric strings before CSV/share serialization, preventing long-but-valid values from producing unrestorable links and preventing leading plus/line breaks from altering CSV structure. Added independent regression case;10 tests now pass.
- Added field-named error summary links that expand advanced details and focus the failing input. Raised step badge contrast; PNG now has brand arc and visible endpoint for zero-duration charts.
- Browser verified PNG/CSV previews,254 CSV lines with correct endpoint, explicit download request message, Escape/focus restoration and keyboard cycle,320px modal with no page overflow, long-number share normalization. No captured console errors/warnings.
- Browser media API explicitly reports Blob downloads unsupported; ordinary final download save remains unverified. Manual fallback is available; do not claim this tool limitation fixed. Prior competitor and native-print gaps remain unchanged.
- Production rebuild and typecheck succeeded; lint passed. Final check results in QA report. No dependencies added, no deployment/push.


## 2026-10-10 — local production preview and qualified handoff

- Scope: user SOP v4.0 steps1–7; step8 push/deploy not authorized. No applicable AGENTS.md found. User reopened Chrome; browser recovered and used for research and production UI checks.
- Started at initial commit d0e3af7 with supplied untracked SOP. Complete Next.js/TypeScript static website, original Accrue assets, calculation model, UI, exports and substantive pages now exist. Working tree is uncommitted; SOP preserved.
- Step1: primary SEC/Investor.gov and CFPB sources, formula conventions and independent cases recorded.
- Step2: original Google natural top10 separate from later page2 snapshot;13 attempted URLs,12 loaded/operated pages,9 numeric outputs. Duplicate KJE hosts distinguished;10 tool interfaces interacted. Full-control acceptance count0; detailed modes/exports/mobile remain incomplete. Do not label research fully accepted.
- Step3: FEATURE-SPEC and DESIGN-SYSTEM written before coding.
- Steps4–5: core calculator, graph, tables, PNG/CSV/print/share/copy, contact dialog and five content pages implemented. Local HTML SEO passed; public domain not configured. Privacy evidence map in QA.
- Step6:9 test groups, strict TypeScript, ESLint, production build and npm audit passed; audit0. TS7 replaced with compatible6.0.3. Next ESLint preset removed to resolve vulnerable transitive chain; rule coverage change documented. Next16.4.0/React19.3.0 and lockfile retained. Official October14 security notice requires follow-up before public release.
- Browser checks: independent arithmetic, four compounding frequencies, five currencies, timing/APY/inflation, zero/partial/100-year boundaries, invalid/recovery, tables, clipboard success/failure/stale-input guard, custom share and corrupt-hash recovery, contact focus/Escape and navigation.
- Responsive:1440desktop,768tablet,390/320simulations. Fixed mobile H1 space, duplicate IDs, hidden duplicate H1, orphan print row and modal focus wrap. No real-device claim.
- Actual PNG/CSV button payloads captured and opened; download event did not return a path, so final browser save unverified. Default1-page and100-year4-page print PDFs rendered/inspected. Actual Print activation blocked browser control; native window not inspectable. Test tab closed and usable preview restored; no physical printing.
- Local noindex production preview http://127.0.0.1:3000 retained for user review. HANDOFF/QA/README/DEPLOYMENT describe evidence and limitations. Evidence/local is Git-ignored.
- Step7: usable first version with acceptance gaps, not blanket SOP pass. Step8 not performed. No email, public upload, deployment or DNS side effects.

## Earlier checkpoint (superseded)

Read complete SOP; checked initially empty repository and Windows/Node22.22.0/npm10.9.4; researched primary sources and first Google snapshot before the browser interruption. Development was not yet started at that checkpoint; the state above supersedes it.

## 2026-10-10 — Current visual implementation
Replaced the rejected forest/cream treatment with a financial workbench: compact introduction, graphite header, continuous calculator, tabular figures, thin borders, contribution/interest composition and shaded interest chart. Updated export styling, brand colors and generated social assets. Build and all checks passed; real desktop/390/320 px browser review completed. See latest QA report for scope and screenshots. No deployment performed.
