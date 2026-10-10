## 2026-10-10 — Latest copy and public-alias smoke test

Latest Title has 53 characters and Description has 154. Homepage now explains monthly versus yearly compounding without adding a route. Production build passed. Default visible body keyword density is 83/2572 = 3.2271%, main 81/2535 = 3.1953%, with one H1.

On https://compound-interest-calculator-ecru-xi.vercel.app, browser checks verified $1,000 at 10% for one year with no deposits yields $1,104.71 monthly / $1,100.00 annually; reset growth gives $109,333.14; savings goal gives $215.93 monthly and $50,000.20 ending balance; withdrawals gives $11,236.92 actually withdrawn and month 57 depletion. No captured browser console errors. Seven content routes and crawler files return 200, unknown route 404. Browser metadata: requested Title/Description, index/follow, custom-domain canonical. Screenshot visually reviewed.

This is a production smoke test following the earlier full local audit below. Custom-domain DNS is now verified by Vercel (apex A 76.76.21.21), certificate issuance succeeded, and direct HTTPS with normal certificate validation passed seven content routes, crawler files, metadata and real 404. The current system proxy/browser route fails this new domain; browser functional testing used the working Vercel alias. `production-http-audit.json` records the direct pinned-address test method. Existing native-download and cross-browser limitations remain. Evidence lives under `docs/evidence/local/production-*` and `monthly-yearly-*`.

## 2026-10-10 — Brand correction and pre-release functional audit

**Result:** No blocking calculation or interface defect was found in the tested local Chromium scenarios. This is broad control coverage, not a claim that every possible number/browser or the public deployment has been verified. Native Save As completion remains pending user confirmation.

The only website name is **Compound Interest Calculator**. Removed the invented Accrue identity from live source, structured data, navigation/footer, policies, sharing, print and export cards/filenames, package name and OG assets. The responsive wordmark uses two lines. Historical audit notes retain their historical names.

- Homepage Title: `Compound Interest Calculator: Daily & Monthly` — **45 characters**.
- Homepage Description: `Free compound interest calculator with daily or monthly compounding. Calculate savings growth, monthly contributions, savings goals and withdrawals.` — **148 characters**.
- All seven content-page titles are at most 60 characters; OG/Twitter titles align; one H1 per page, correct self canonical, production indexable HTML and no live Accrue name. Local preview HTTP intentionally still sends `X-Robots-Tag: noindex`.
- Visible homepage density, default growth/yearly table: **82 / 2444 = 3.3552%** body; **79 / 2404 = 3.2862%** main; guide **76 / 1920 = 3.9583%**. Counts use complete phrase occurrences (case-insensitive; whitespace normalized), divided by all visible word tokens including numeric tokens. Print-only/dialog-hidden content is excluded by innerText. This is the actual requested ratio, not phrase words multiplied by three.

### Controls and numerical results

**283 recorded browser checks passed**, alongside **28 automated tests**, TypeScript, lint and the final production build. Browser assertion counts include individual recovery states, option combinations and layout checks; they are not 283 separate features. No browser console warnings/errors were observed in the final test tab.

| Area | Actual coverage | Result |
| --- | --- | --- |
| Growth inputs | Initial amount, regular contribution, years, extra months, rate, inflation; blank/negative/upper limit/fractional periods; zero-rate/time/money; decimal amounts | Passed; invalid input removes stale results/exports and valid correction restores them |
| Growth choices | All five currencies; annual/quarterly/monthly/daily compounding; monthly/yearly deposits; start/end timing; nominal/APY and disabled frequency; inflation purchasing power | Independently summed growth factors and deposits match displayed cents |
| Savings goal | Starting balance, target, years, months, rate; all frequencies/currencies/timings; blank/negative/over-limit entries; already-funded and interest-only targets; impossible zero horizon | Monthly payment rounds upward to cents and forward projection agrees |
| Withdrawals | Starting balance, withdrawal amount, all fields/options; month/year cadence; start/end timing; zero money/payment/time; exact/partial depletion and shortfall | Remaining balance, actual payments and interest agree with independent month stepping |
| Baselines | Growth $109,333.14, contributed $58,000, interest $51,333.14; goal $215.93/month projects $50,000.20; withdrawals $11,236.92 paid, $12,763.08 unfunded, depletion month 57 | Passed |
| Duration and limits | 100 years plus extra month rejected; unsafe projection rejected; 100-year zero-rate max amount/deposit valid, 1201 monthly rows and $1,201,000,000,000 balance | Passed |
| Chart | All eight keyboard commands; mouse down/drag before release; emulated touch start/move before release; goal/withdrawal endpoints | Inline readout updates during dragging and agrees with monthly results |
| Tabs and reset | All three modes; retained independent inputs; ArrowLeft/Right wrapping, Home/End; reset from changed/invalid state; direct anchors | Passed |
| Tables | Yearly/monthly in all modes, row counts and final rows; 241 growth rows / 121 plan rows; final partial years covered by calculation scenarios | Passed |
| Copy/share | Actual clipboard text in all modes; actual share URLs and restoration; malformed v1/plan1/v2/plan2 fallback; simulated clipboard rejection/manual-copy dialogs | Passed; test overrides restored |
| PNG | All three preview dialogs, image dimensions 1200×800, controls, Blob files saved and opened for visual inspection | Generated files correct; OS Save As completion pending |
| CSV | All three preview dialogs, complete monthly rows, final amounts/assumptions, target payment and withdrawal shortfall metadata | Generated files correct; OS Save As completion pending |
| Print | Every print button invokes window.print; actual withdrawal print dialog launched; Chromium printToPDF generated all three one-page default reports, rendered and visually reviewed | Printed content passed; native printer/save-dialog completion not verified |
| Contact | Header/footer, all three tool icons, contact-page button; read-only email; actual copy; clipboard failure; Escape/close/focus loop/return; mailto activation captured and cancelled before external handoff | In-page controls passed; external mail client not launched and no email sent |
| Responsive | 320, 390, 540, 600, 768, 850, 900, 1024, 1280 widths; no page/header overflow; 320px maximum amounts; mobile result/inputs navigation and invalid result clearing | Passed in Chromium emulation, not physical device/Safari certification |
| Pages/links | All main/footer/guide navigation clicked; all six info pages opened; policy pages checked at 320px; all internal href/hash targets verified; correct HTTP 200/assets/sitemap/robots/llms | Passed |

Independent browser expectations use per-deposit geometric factors for growth, summation of payment factors for goals, and separate cash-flow stepping for withdrawals; they do not call the site's calculation functions. Browser source links to Investor.gov calculators, CFPB APY rules and Microsoft FV/PMT documentation were also opened successfully during this audit.

### Remaining acceptance boundaries

1. **Native file saving:** Download buttons were activated, generated Blob bytes checked, and five final PNG/CSV outputs matched actual Chrome `.tmp` downloads byte-for-byte. The final growth CSV was regenerated after a header-only wording cleanup and inspected separately. The browser is configured to ask where to save files; the automation API did not report completion of those native Save As dialogs. A question asking the user to confirm PNG/CSV final saving has been sent. Do not silently mark this passed. Browser `.tmp` files were not renamed/deleted by the agent.
2. **Deployment:** Only local static output has been tested. Publish `out/` to the actual static host, then check public HTTPS, redirects, headers without noindex, assets, 404 response, canonicals/sitemap and a real calculation/share/download path. Do not expose the local preview server as production.
3. **Security follow-up:** `npm audit --omit=dev` reports zero known vulnerabilities. The official October 8 Next.js announcement still plans an October 14, 2026 security update for three upstream vulnerabilities, with affected versions/impact not yet disclosed. No exemption for this static export is assumed. Follow the official advisory and update when available: https://nextjs.org/blog/upcoming-nextjs-security-update-october-2026 .
4. **Environment scope:** No real iPhone/Safari, Firefox, physical printer, or external email-client handoff test. No public deployment, Search Console setup, clean-checkout verification, commit or push was performed.

### Evidence

Local ignored artifacts (available in this workspace, not promised in Git): `docs/evidence/local/release-browser-audit.json`, `release-static-audit.json`, `release-export-file-audit.json`, `release-homepage.png`, six `compound-interest-*` PNG/CSV artifacts, three `release-*-print.pdf` files and their rendered PNGs. Homepage screenshot, OG image, all three exported cards and all three rendered print pages were opened and visually reviewed. Automation retries caused by browser focus/scroll timing or incorrect test expectations were distinguished from application defects and rerun against observed state.

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

Evidence: [consolidated homepage](evidence/local/home-consolidated.jpg), [content audit JSON](evidence/local/home-consolidation-audit.json). No skipped heading levels or broken homepage anchors; console error/warning capture empty. HTTP home200 and four removed routes404.

Checks:21 tests, typecheck, lint and fresh static build. Browser: all three modes, remembered12000 principal /60000 target /300 withdrawal, mouse and keyboard tabs, same-origin growth share restoration from withdrawal mode, default results and chart endpoints,320px layout. No duplicate DOM IDs or old-card links. Native print completion and original export OS handoff limitations remain as previously documented; not a renewed entire-site acceptance claim. Local preview http://127.0.0.1:3000/ . No deployment.

---

## 2026-10-10 — Expansion verification

Scope: homepage synonym/internal-link changes, two new calculation modes, two tutorial routes, shared chart regression. Not a claim of renewed whole-site or whole-competitor acceptance.

- Unit tests: 21 passing (13 existing + 8 planning groups). Independent hand-step withdrawal examples: end $819.10, beginning $817.09; $250/zero-rate/$100 requests -> actual $250, shortfall $50; $200 opening -> depletion month2, first shortfall month3. Monthly/yearly timing and partial horizons, accounting conservation, zero/invalid/extreme values, goal cent rounding and forward-target checks covered.
- Browser: 31 recorded result/state observations. Both tools' numeric fields edited; monthly/yearly tables, reset, goal currencies and frequencies, beginning/end timing, impossible zero horizon and invalid input recovery. Goal example $215.93/month -> $50,000.20. Withdrawal default depletion month57, actual $11,236.92, unfunded $12,763.08. Home regression remains $109,333.14 with Home/End $10,000/$109,333.14.
- Charts: declining-balance scale includes opening/historical peak; no negative/off-canvas balance after depletion. In-chart values follow keyboard and simulated touch at320px; Home/End correct, no rectangular outline. Milestone identifies depletion/target. 390px and320px DOM dimensions showed no page overflow, tooltip inside plot. Touch is browser simulation, not a physical phone.
- Navigation/content: actual related links opened withdrawals, formula, Excel, goal and home. Header Planning tools anchor works. Tool feedback opens and Escape restores focus. Four new static pages have one H1 each, parseable matching JSON-LD and no broken internal destinations. Local robots noindex, sitemap remains empty intentionally until configured public origin/indexing. Canonical helper uses each page's own path when configured; no localhost canonical added.
- Content count: main.innerText, default inputs and yearly table, hidden print/dialog text excluded, whitespace-separated English tokens. Withdrawals1552, goal1588 (desktop1707px); formula998 (desktop), Excel943 (320px). Both new tool pages exceed1,000. Static HTML counts include hidden text and are recorded separately, not substituted for visible count.
- Printing: print-media rendering visibly shows scenario assumptions, financial totals and table; inputs/guides hidden and scroll height released. Native Print button/system dialog completion not confirmed. Excel examples/formula signs independently derived and documentation checked; no claim of running an actual Excel workbook.
- Console: captured error/warning list empty during final browser checks. Build, typecheck, lint pass; npm audit --omit=dev reports0 vulnerabilities. No dependencies changed.
- Evidence (local-only): expansion-browser-results.json, expansion-static-check.json and expansion-*.jpg under evidence/local. Early browser log status queries selected a hidden contact status; headline/chart/table observations are valid, later log entries correctly scope the result status. They are not counted as evidence for the early result notices.

Screenshots: [homepage links](evidence/local/expansion-home-tools.jpg), [goal desktop](evidence/local/expansion-goal-desktop.jpg), [withdrawal desktop](evidence/local/expansion-withdrawal-desktop.jpg), [goal mobile](evidence/local/expansion-goal-mobile.jpg), [withdrawal mobile](evidence/local/expansion-withdrawal-mobile.jpg).

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

# 最新逐控件验收 — 2026-10-10

记录时间：2026-10-10T12:47:06（本机时间）。对象：http://127.0.0.1:3000/ 的最新静态构建，金融工作台版本。按用户要求，从新用户视角实际操作所有站内输入和按钮；本节优先于后面的历史记录。

## 结论与范围

- **89 组浏览器数值/状态记录均已核验通过**，原始条件、独立预期、实际金额和失败列表保存在 [fullqa-cases.json](evidence/local/fullqa-cases.json)。这不是“89 个按钮”，也不把一次正常输入当作所有边界都通过。
- 所有 11 个计算参数均实际操作，所有选择器的每个选项都覆盖。另测只读邮箱、CSV 文本、手动复制文本。
- 发现并修复 **5 处问题**，见下表。计算引擎没有修改。
- 最新 `npm run build` 和 `npm run check` 通过：13 个自动化测试、TypeScript、ESLint。
- 浏览器界面、计算输出、导出预览和浏览器打印 PDF 已验证。**下载最终落盘、原生打印窗口完成、外部邮件客户端成功唤起仍未确认**，不宣称全链路 100% 通过。

## 缺陷与修复复测

| ID | 复现问题 | 修复 | 实际复测 |
| --- | --- | --- | --- |
| QA-01 | Save image 异步生成后关闭弹窗，焦点落到 body | 保留原导出按钮引用，关闭/卸载时恢复焦点 | 桌面 Escape、关闭按钮、手机 Back to calculator 均返回 Save image |
| QA-02 | 剪贴板请求一直 pending 时，复制没有任何结果或降级 | 2 秒超时进入原有手动复制路径；超时计时器清理 | 浏览器模拟 pending 后，摘要出现手动文本、邮箱出现手动复制提示；新增成功/拒绝/pending 3 个测试 |
| QA-03 | 手动复制弹窗首次打开，文本显示但选中长度为 0 | 等待文本渲染后再打开弹窗 | 摘要 325/325 字符、分享链接 340/340 字符全选 |
| QA-04 | 快速关闭再复制时，旧 close 事件可能清空新请求/使新弹窗消失 | 在关闭动作中同步处理请求失效和清理，Escape 走同一路径 | 连续 6 次摘要/分享/重复摘要均打开并完整全选；Escape 后焦点返回 Copy summary |
| QA-05 | 开启通胀后，PNG 只含通胀假设，遗漏页面上的今日购买力金额 | 图片增加购买力金额行 | EUR 复杂场景导出显示 €37,673.99；手机 GBP 场景显示 £3,306.26，排版无重叠 |

## 逐控件矩阵

| 控件 | 实际操作与核验 | 状态 |
| --- | --- | --- |
| Initial investment | 0、12345.67、10亿、空值、负数、超过上限；键盘 ArrowUp；金额更新 | 已验证 |
| Regular contribution | 0、345.67、10亿、空值、负数、超过上限 | 已验证 |
| Years | 0、1、100、空值、-1、101、1.5 | 已验证 |
| Extra months | 0、1、11、空值、-1、12、1.5；100 年 + 1 月联合限制 | 已验证 |
| Annual interest rate / APY | 0、0.01、100、空值、负数、100.01；APY 8.25；异常巨额结果限制 | 已验证 |
| Annual inflation | 0、2.5、25、空值、负数、25.01；3.2/3.5/2 的购买力结果 | 已验证 |
| Currency | USD、EUR、GBP、CAD、AUD：只换符号、不换数额 | 已验证 |
| Add money | 每月、每年；含部分年度 | 已验证 |
| Compound interest | 年、季、月、日，配合 2 种投入周期 × 2 种投入时点共 16 组 | 已验证 |
| Rate type | Nominal → APY → Nominal；APY 禁用复利频率，返回后恢复 | 已验证 |
| When do you add money | 期初/期末；年初投入含部分年、年末只计完整年 | 已验证 |
| More options | 展开、折叠；关闭后通过错误链接定位通胀字段并自动展开 | 已验证 |
| Reset example | 错误、定制参数、分享链接、图片生成期间重置；恢复默认并移除分享 hash | 已验证 |
| Yearly / Monthly | 来回切换；默认、部分年、APY；100 年 1201 行月表 | 已验证 |
| Copy summary | 真实剪贴板内容对照；拒绝/pending 手动复制；快速重复打开 | 已验证 |
| Share | 真实链接内容；新页面恢复全部 11 参数；刷新；坏链接；重置 | 已验证 |
| Save image | 默认/定制/手机预览；当前金额及假设；生成失败恢复；生成期间改输入/重置/改开 CSV | 已验证生成及预览 |
| CSV | 完整月度预览；复杂场景 72 行逐行独立核对；只读、点击全选 | 已验证生成及预览 |
| Download PNG / Download CSV | 实际点击，页面提示请求已发出；CSV 下载事件等待超时，工具不支持 blob 下载；已检查下载目录，无本轮新增文件 | 已操作，最终落盘未确认 |
| Close export / Back to calculator | 两种关闭、Escape、Tab/Shift+Tab 环绕、焦点恢复 | 已验证 |
| 手动复制文本 / Close | 只读、全选、Tab 环绕、关闭、Escape、重复打开 | 已验证 |
| Print | 实际点击；原生窗口自动化未完成；另用浏览器打印引擎生成 PDF 核对 | PDF 已验证，原生完整流程未确认 |
| Feedback（页头） | 打开、邮箱只读、复制、Tab 环绕、关闭、Escape 恢复 | 已验证 |
| Contact & feedback（输入区/页脚） | 两个入口分别打开，页脚复制成功；关闭恢复 | 已验证 |
| View contact options（联系页） | 打开、复制成功、关闭 | 已验证 |
| Contact email / Copy email | 只读拒绝编辑、可选择、复制成功；pending 时提示手动复制 | 已验证 |
| Open email app | 点击 mailto:websiteaftersales@gmail.com；浏览器控制连接在系统协议交接时中断，随后恢复；没有发送邮件 | 已操作，客户端唤起未确认 |
| 顶部 Calculator / How it works、跳过链接 | 定位相应站内锚点 | 已验证 |
| 5 个说明目录链接 | Using / Formula / Contributions / Questions / Sources 定位 | 已验证 |
| About / Contact / Privacy / Terms | 页脚逐个打开，核对最终 URL 和页面标题；关于页方法、条款、联系、Try a projection 及品牌返回 | 已验证 |
| 3 个外部参考来源 | 两个 Investor.gov 页面和 CFPB APY 页面均在新标签打开并取得对应标题；CFPB 内容已读取 | 已验证打开 |

## 右侧结果的独立核验

使用独立的“每笔现金流分别复利后求和”公式，而非调用本站 calculate() 当作预期。核对结束余额、累计投入、累计利息、有效年化率、通胀购买力，以及表格每行。图表在默认、零时长、一个月、零金额、零利率、无追加投入、无本金、小数部分年度等场景逐点核对坐标。

- 默认：余额 $109,333.14，投入 $58,000.00，利息 $51,333.14。
- EUR：本金 25000.50，每年年初 500.25，5 年 11 月，8.5% nominal / daily，3.2% inflation：余额 €45,392.06，购买力 €37,673.99。
- 手机 GBP：本金 2500，每年年初 100，3 年 6 月，6.25% APY，2% inflation：余额 £3,543.55，投入 £2,900.00，利息 £643.55，购买力 £3,306.26。
- 100 年零利率：结束余额 $250,000.00，打印 4 页，每页重复表头，最后第 100 年完整。
- 100% 极端利率的独立 JavaScript double 基准在万亿规模出现 5 分误差。改用 Python Decimal 70 位精度裁定：20 年余额 2731034503516.19849…，显示 .20 正确；第 18/19 年也与高精度值一致。这是基准精度问题，不记为网站金额缺陷。

## 交付与设备证据

- 桌面以及 390/320 px 浏览器视口实际操作；手机全部参数、APY 切换、表格、复制分享、图片/CSV、错误恢复和反馈已操作。320 px 文档宽度/滚动宽度均为 305 px（扣除滚动条），反馈弹窗 271/271 px，无横向页面溢出。超大金额按行折行；这不是物理真机测试或完整屏幕阅读器审计。
- [最终桌面](evidence/local/fullqa-final-desktop.jpg)、[手机结果](evidence/local/fullqa-mobile-results.jpg)、[320px 反馈](evidence/local/fullqa-mobile320-feedback.jpg)、[320px 大金额](evidence/local/fullqa-mobile320-large.jpg)。
- [通胀 PNG 预览修复](evidence/local/fullqa-inflation-export.jpg)、[手动全选修复](evidence/local/fullqa-manual-copy-fixed.jpg)、[复制超时降级](evidence/local/fullqa-copy-fallback.jpg)。
- [单页打印 PDF](evidence/local/fullqa-print.pdf)、[100 年 PDF](evidence/local/fullqa-print100.pdf)、[4 页渲染图](evidence/local/fullqa-print100-pages.png)。PDF 已提取文字并渲染查看。
- [CSV 预览内容副本](evidence/local/fullqa-csv-preview.csv)来自可见文本框，用于逐行核验；**不是浏览器下载成功的证明**。
- 所有临时故障注入（剪贴板拒绝/pending、canvas 失败/延迟）均在临时标签刷新后移除，测试标签关闭，视口恢复，用户预览保留默认值。

## 尚未闭环的系统交接

PNG/CSV 文件保存到磁盘、原生打印对话框最终操作、邮件客户端成功唤起无法通过本轮工具完成确认。已有站内请求/预览/降级路径验证不能替代这些最终动作。除此之外，本轮已覆盖控件范围内未遗留已知可复现缺陷；这不等于所有设备和所有输入组合绝对无 bug。

---

# QA report

## Visual redesign verification — 2026-10-10

Production build,10 existing tests, typecheck and lint passed. Actual browser: default balance109333.14; principal12000 balance114758.42; zero rate60000;101years removes result; reset restores default. Updated PNG preview loads1200×800, CSV preview opens. Modal Escape works.390px viewport(client375/scroll375),320px(client305/scroll305), no horizontal page overflow. Desktop and phone screenshots reviewed. Small dialog eyebrow spacing adjusted after320px inspection and rebuilt. Real OS downloads and printing are not re-certified by this visual pass.


## Continuation verification — 2026-10-10 (current changes)

-10 arithmetic/serialization tests pass. New regression covers long leading-zero amounts, plus signs, exponent notation and whitespace/newlines while preserving equivalent numerical results and valid CSV rows.
- PNG generation deliberately delayed in browser, then Share clicked, then old callback released: Save image enabled, no stale export dialog, current copy status retained. Temporary prototype instrumentation restored.
- Image and CSV previews opened from actual buttons. Full CSV contains254 lines (13 metadata/header +241 periods); final row240,58000.00,51333.14,109333.14.
- Download PNG and Download CSV links actually clicked; truthful “Download requested” status observed. Event-based path still times out; supported media API specifically reports “Blob downloads are not supported by this browser.” Final ordinary download remains unverified, not a mathematical/product failure claim.
- CSV is selectable for manual saving; PNG preview is available for browser image-save gestures. No automatic success claim or upload occurs.
- Modal Tab order Close → Download → Back → Close verified. Escape closes and returns focus to CSV trigger.320px layout no horizontal page overflow; image loads, controls and helper text visible.
- Invalid inflation26 then manually collapsed More options: error-summary link names Annual inflation, reopens details and focuses inflation field.
- Long principal with leading zeros shared as canonical1234; copied URL339 characters.
- Browser console sample after changed flows:0 errors/warnings. Screenshot files export-preview-v2.jpg and export-mobile320-v2.jpg saved locally and visually reviewed.
- Prior default content count, arithmetic baselines and print layout remain unchanged by this iteration. Prior full competitor/native print/real-device acceptance gaps remain.

## Previous baseline evidence


Date: 2026-10-10. Subject: uncommitted Accrue 0.1.0 working tree, Next 16.4.0 static production build. Windows, Node 22.22.0, npm 10.9.4, connected desktop Chrome. Test data is synthetic. This is a local first version with explicit acceptance gaps, not an all-SOP-pass claim.

## Core calculation and controls

| Check | Actual evidence | Status |
|---|---|---|
| Lump sum | Browser: 10000, 10 years, 5%, annual, 0 deposits → 16288.95; independent power formula | Verified |
| Monthly contribution | Browser: 10000 +100/month, 10 years, 5% monthly, end → 31998.32; paid in 22000 | Verified |
| Zero rate | Same deposits at 0% → 22000 | Verified |
| Annual timing | Browser: 1000 +100/year, 10%, annual, 2 years → end1420, start1441 | Verified |
| APY/inflation | Browser: 1000, no contributions, 1 year, 12% APY →1120; nominal-frequency disabled; 2% inflation→1098.04; EUR formatting correct | Verified |
| Compounding modes | Browser: 10000, 1 year, 5%, no deposits → annual10500; quarterly10509.45; monthly10511.62; daily10512.67 | Verified |
| Duration | Browser zero duration→10000, one table row; six months with200/month at0%→11200; extra months12 gives adjacent error | Verified |
| Invalid/recovery | Empty principal removes old balance/actions; negative principal gives adjacent range error; Reset restores109333.14 | Verified |
| Table modes | Monthly produces241 rows including month0; yearly returns annual rows; independent model/CSV endpoint checked | Verified |
| Broader input matrix | Nine automated test groups cover APY equivalence, all currencies/frequencies, zero/partial duration, overflow, invalid enums/numbers and 18 closed-form cases | Verified logically; not every permutation clicked |
| Advanced details | Opened using keyboard; nominal/APY, start/end and inflation edited | Verified |
| Chart | Displayed result/paid-in curves, accessible description and table alternative; invalid inputs remove chart | Verified; no interactive hover controls exist |

## Delivery, contact and state

| Check | Evidence | Status |
|---|---|---|
| Copy summary | Actual clipboard contains inputs and109333.14/58000/51333.14; success after resolved API | Verified |
| Share | Actual copied version1 hash opened in new tab; also tested nondefault principal1234,3years →9183.92 with restored inputs and notice | Verified |
| Corrupt/hostile share | Strict version/schema/2048 limit tested in unit suite. Browser #v1=broken shows explicit failure notice and valid default109333.14; Reset removes fragment | Verified |
| Clipboard failure | Temporarily rejected Clipboard API on local test page; selectable summary dialog and contact manual-copy message observed; patch restored | Verified |
| Contact | Opens, email is selectable, actual clipboard equals websiteaftersales@gmail.com; Escape closes and restores Feedback focus; no duplicate IDs | Verified |
| Mailto | Correct href in actual HTML; no email sent and external mail application not launched | Link verified; external app N/A |
| Focus containment | Native dialog initially allowed sequential focus into browser chrome; explicit endpoint wrap added | Verified after rebuild: six consecutive Tab actions remained in dialog and wrapped from Copy email to Close |
| PNG | Actual Save image button generated1200×800 PNG; captured its Blob through temporary local developer instrumentation, wrote projection.png and opened visually; correct amounts/assumptions | Content verified; normal download completion unconfirmed |
| CSV | Actual CSV button generated full monthly payload; captured Blob, opened schedule.csv; metadata +241 data rows, endpoint240,58000.00,51333.14,109333.14 | Content verified; normal download completion unconfirmed |
| Download infrastructure | Browser waitForEvent(download) timed out despite app completion status. No download path returned. No security controls bypassed | Tool limitation; not counted as full download-chain pass |
| Print | Browser CDP printToPDF from actual production page; final default one-page A4 PDF rendered and opened; final year20 and109333.14 present | PDF layout verified; actual Print activation entered a blocking browser flow, but native dialog was not inspectable. Test tab closed and a fresh usable preview retained. Physical printer unverified |
| Async stale state | Generation/clipboard epochs inspected; tokens invalidated on input/reset/close; delayed Clipboard promise injected then restored | Verified for copy-summary input-change race: delayed promise resolved after principal edit, old success status suppressed. Other race permutations code-reviewed |

Temporary clipboard/Blob instrumentation was restored. Files in evidence/local are developer-captured test artifacts; they are not falsely presented as confirmed browser Downloads-folder files.

## Responsive, content, SEO and performance

- Viewed1440×1000 desktop,768×1024 tablet,390×844 and320×800 viewport simulations. Windows scrollbar reduces client width by15px. No document horizontal overflow at checked sizes. 320px feedback dialog, labels, amount inputs and error recovery viewed. Not real-device/touch testing.
- Fixed missing mobile heading word spacing, duplicate contact IDs and hidden print second H1. Default print improved from two pages with an orphan final row to one complete A4 page.
- Default page body innerText: **2167 whitespace-separated English words**, 2 exact phrase matches for “compound interest calculator”, desktop1440, advanced closed, yearly table, default inputs. CSS-hidden print/dialog content excluded by innerText; off-screen normal document content included. No density target.
- HTTP HTML parsing: five content routes200, each exactly1 H1, unique IDs, description and `noindex, follow`; preview response header `X-Robots-Tag: noindex`;15 referenced internal links/assets200; unknown route404. Core original content/formulas exist in HTML before JS.
- Canonical intentionally absent without a real public origin. Preview sitemap has no URLs; robots permits crawling so noindex is discoverable. JSON-LD parses as truthful WebApplication with free offer, no invented ratings. Public-domain SEO and hosting redirects await actual deployment configuration.
- About/Contact/Privacy/Terms navigated through footer; relevant page headings observed. Formula anchor navigated to `#formula`. Source destinations were opened during research. No llms.txt needed for this single tool.
- Browser console sampled after normal interactions: no captured errors/warnings. This is a sample, not proof no runtime errors can occur.
- Local unthrottled page sample: DOMContentLoaded156ms, load258ms, HTML~62.6KB, CSS~16.6KB, JS~478KB uncompressed network payload. No remote fonts/analytics/API. Loopback timings are not real-user performance or a Lighthouse score.
- Keyboard activation used throughout; visible blue focus ring observed. Automated accessibility certification, all screen readers, reduced-motion OS emulation and exhaustive contrast analysis were not performed.

## Privacy/terms evidence map

| Data/action | Code/config evidence | Notice section |
|---|---|---|
| Inputs | Calculator React memory + lib/calculator; no API calls | Calculator inputs |
| Sharing | Versioned location.hash encode/decode, no query payload | Shared links and browser history |
| Clipboard | writeText only, triggered by user action; no read API in app | Clipboard, images, CSV and printing |
| Files/print | Canvas Blob, CSV Blob, window.print | Clipboard, images, CSV and printing |
| Cookies/storage | No analytics embeds, fetch, cookie setter or storage API in app source | Cookies and local storage |
| HTTP metadata | Static HTTP hosting necessarily receives requests; future provider unknown | Ordinary website requests |
| Email | mailto/selectable address, no form submission backend | Email and voluntary correspondence |
| External sources | Plain links, no embedded third-party tools | External links |

Terms cover model assumptions, responsible use, exports, accuracy, rights and contact without inventing an operator, jurisdiction, credentials or guarantees. Hosting-specific retention/operating facts require review before public release; this is not a legal-compliance certification.

## Toolchain and security

Nine test groups passed; strict TypeScript, ESLint and production build passed. npm audit found zero known vulnerabilities after replacing eslint-config-next's vulnerable transitive dependency chain. TypeScript7 was incompatible with current lint tooling; compatible6.0.3 is pinned. ESLint now covers TypeScript recommended and React Hooks rules, not the removed Next preset's full framework/a11y coverage. Lockfile retained.

Official sources consulted: [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation), [upcoming security notice](https://nextjs.org/blog/upcoming-nextjs-security-update-october-2026), [Google robots metadata](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics). The announced October14 patch requires follow-up before public release; no claim of immunity based on static export.

## Evidence availability and unresolved coverage

Local-only files: desktop1440.jpg, tablet768.jpg, mobile390.jpg, mobile320.jpg, mobile320-dialog.jpg, projection.png, schedule.csv, print-default.pdf, print-final-1.png, performance.json, seo-report.json under `docs/evidence/local/`. Screenshots and final generated image/PDF render were opened and inspected. Source and written reports are available in the working tree; no GitHub upload claimed.

Competitor full-control verification remains incomplete (see research audit). Download final save, native print-dialog flow, real devices and exhaustive assistive-technology coverage remain unverified. Public release, domain/canonical verification, clean-checkout release verification and search indexing are outside this local delivery.

## Final supplemental checks

- Explicit modal wrap passed six consecutive keyboard Tab actions (input → email link → Copy email → Close → input → link), all inside dialog; Escape restores invoking control.
- All five currency choices clicked; same109333.14 quantity displayed with €, £, CA$, A$, $ respectively.
- Canvas failure injection produced a recoverable “Image could not be created” message; native method restored.
-100-year zero-rate boundary returned250000; four-page browser PDF rendered as a montage, repeated table headers and final year100/250000 intact.
- Calculated text/background contrast samples: primary15.67:1, muted5.55:1, blue6.10:1, green5.05:1, chart labels4.67:1, error6.70:1. Decorative step-number badge3.70:1; this is not an exhaustive WCAG audit.
- Final checks after focus helper: tests9/9, tsc, eslint, build all pass; audit0. Browser temporary overrides restored and final preview returns default example.

## 2026-10-10 — Financial workbench visual QA
- Production build passed; npm run check passed (10 tests, TypeScript, ESLint).
- Real Chrome desktop reviewed: compact heading, continuous calculator, neutral surfaces, tabular figures, contribution/interest split and chart.
- Default displayed balance $109,333.14. Initial investment 12,000 returned $114,758.42; changing its rate to 0 returned $60,000.00. Years 101 removed balance and image-export controls; reset restored the example.
- PNG preview visibly rendered in the new neutral/orange palette, 1200 x 800. Desktop and mobile preview opened and closed. Actual file saving and printing were not retested in this visual revision.
- 390 px and 320 px viewports visually reviewed. Document clientWidth/scrollWidth were 375/375 and 305/305 respectively (scrollbar excluded); no page-level horizontal overflow. Mobile result figures, chart, legend and action area inspected.
- Screenshots: evidence/local/workbench-desktop.jpg, workbench-export.jpg, workbench-mobile390.jpg, workbench-mobile320.jpg.
- Temporary viewport override reset; desktop preview retained.
