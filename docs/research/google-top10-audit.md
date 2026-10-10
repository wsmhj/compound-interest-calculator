# Google and tool audit

## 当前结论：原始十站深入验证，2026-10-10

### 换节点后四站恢复，最新状态

用户更换网络节点后，原始Moneychimp、Bankrate、BNC、Anderson链接全部成功加载，均取得实际计算输出。新增70个有输入证据且由独立公式/递推复核的数值结果，70个吻合。累计149个数值结果、148个吻合，唯一差异仍是此前Ramsey100年算例。数值吻合不代表异常输入、所有控件或打印验收通过；Bankrate零利率的空金额显示另外记为交互/输出异常，不计数值通过。

### 换节点前四站重试（历史）

用户要求继续验证其余四站后，使用原始链接再次实际导航。Moneychimp仍返回`ERR_BLOCKED_BY_CLIENT`，Bankrate及BNC仍返回`ERR_CONNECTION_CLOSED`。Anderson首次返回`ERR_ABORTED`且页面读取超时，在新标签页复查后返回`ERR_CONNECTION_CLOSED`。四站均未出现可操作计算器，本次没有新增数值通过项，79个算例统计不变。此结果仅说明当前浏览器环境无法完成访问，不证明网站对所有访客不可用；没有修改浏览器安全设置或用其他网站替代。

**尚未完成十站全控件验收，但原始十站均已有实际数值证据。** 本轮严格使用下方快照A的原始名单；最初6站可操作，另外4站现已在换节点后恢复并补测。NerdWallet此前后续出现安全验证，本次未重测该站。未以补充样本替换原始十站，也未修改安全设置。

累计独立数值核验见 [149个实测结果](competitor-verified-cases.csv)：**148个在所记录模型与显示精度下吻合，1个差异已复现、原因未明。** 银行同一报告的四种复利分别计一条数值结果，不是149次独立页面操作；无效输入、手机、导出和访问障碍另计。此前明确验证的基础算例沿用，下方历史记录不冒充本轮新测试。

| 原始名次 / 网站 | 本轮新增覆盖 | 当前不能签收的项目 |
|---|---|---|
| 1 Investor.gov | 全部5种复利频率、上下利率区间、负利率、月提款、小数/零期限、错误恢复、表格、CSV内容、390px | PNG转到Highcharts导出服务后被拦截；XLS未取得文件，其他图片/PDF格式未完成；打印触发后无法验证系统输出；窄屏溢出需进一步定位 |
| 2 NerdWallet | 年度追加、零利率、期限0/51报错与旧结果、手机计算按钮、390px | 回访进入安全验证；部分频率测试输入未可靠提交，不计通过；需补齐频率与金额边界 |
| 3 Moneychimp | 已恢复；5种频率、年/月追加、期初/期末、零/负利率、零/小数/负期限、负/零/空/非数字本金、非法频率、恢复、键盘Calculate、390px | 零频率得到0余额；负频率仍计算；空/abc本金转换0；手机横向溢出1078px；无核心分享/重置/下载控件（不适用） |
| 4 Bankrate | 已恢复；4复利频率、5追加频率、0/1.5/100年、零/负利率、空/负/零本金、空/负追加、恢复、键盘顺序、390px及手机Calculate | 零利率余额/利息只显示$且图表留旧值；无效字段禁用Calculate但留旧结果；图例按钮/文字点击未确认隐藏成功；未发现核心导出按钮 |
| 5 BNC Bank | 已恢复；完整报告4种复利/APY、10年明细、零利率、零期限、小数期限、超界/空字段、恢复、三项帮助、输入/图表折叠、3滑块键盘端点、390px表单/图表及报告入口 | Print操作超时，未取得打印文件；金额/利率滑块键盘值改变但未同步输入金额，年份End可改50；指针拖动未验证；空字段最终报告未签收 |
| 6 The Calculator Site | 11标准+自定义频率、5利率单位、6追加频率、9取款类型、期初/期末、两类追加增长、提款增长、额外月份、EUR格式、错误恢复、重置、图表/表格/摘要/建议、分享恢复、390px | CSV操作后浏览器屏蔽；打印无最终文件；复制未确认；个别边界和图表内导出仍有缺口；图标控件键盘可达性不足 |
| 7 GetSmarterAboutMoney | 4复利频率、5追加频率、年/月等价、月表All Rows、假设、零利率/期限上下限/小数/负本金、恢复、关闭调查后的390px表单 | 打印无最终文件；滑块键盘操作未确认（末次复查快照含slider，但定位返回0，工具层不一致）；明细排序/分页按钮未全测 |
| 8 Ramsey | 每日复利、零/负利率、零/负/小数/100年期限、负本金、空追加、恢复、FAQ折叠/展开、390px | 零期限NaN已复现；长周期差异待解释；无效输入保留旧结果；未完成所有键盘路径和极值组合 |
| 9 Anderson Brothers Bank | 已恢复并独立操作；完整报告4种复利/APY、10年明细、零利率/零期限/小数期限、超界/空字段、恢复、帮助、折叠、3滑块键盘端点、390px | Print操作超时、无打印文件；金额/利率滑块未确认与输入同步；指针拖动未验证；空字段报告未签收；手机Cookie条覆盖下方图表 |
| 10 Omni | 13复利选项（3个average仅到分精度观察）、7追加周期、期初/期末、年/周期存款增长、图表/月年表、清除及Reload恢复默认、实际复制并打开分享链接、零/负利率、零月期限、USD/EUR转换与年月单位转换、390px | average的确切年长规则未辨明；更多金额边界及变量菜单未全测；汇率准确性未核验；浏览器控制间歇超时 |

### 已证实的算法口径与差异

- 换节点后新增：Moneychimp17条、Bankrate13条、BNC20条、Anderson20条，共70条数值结果均吻合。银行两站独立打开，未因同用KJE引擎而跳过任一主机。
- 两家银行基准报告的10年×4频率×2主机共80个明细单元格、8个APY值另行独立核对，均吻合；不重复加入149条结果计数。本地复核结果bank-table-check.json。
- Moneychimp的Annual Addition先除以每年复利次数；1200/年、每月复利等价于100/月。10000本金、5%、10年，期末31998.32，期初32063.02。0%时22000；负5%期初追加模型15478.03。允许输入小数期限，不代表负期限/零频率合理。
- Bankrate将追加折算成年度金额，再均摊到复利周期。10000本金、5%月复利、1年、100/年，结果10613.94；100/季度10920.91；100/月11739.50；100/周15832.46；100/双周13172.04。这里年度/季度追加并非严格在年末/季末单笔入账。该结论是黑盒算例模型吻合，不是读取内部源码。
- BNC与Anderson：10000本金、5%、10年，年/季/月/日分别16288.95、16436.19、16470.09、16486.65；APY分别5%、5.095%、5.116%、5.127%。输入1.5年，报告明确写2年并按2年计算。0年报告返回本金、逐年表无年份行；页面却提示1–50年。-1本金、-1%利率、51年仍生成报告，与页面标注范围不一致；不把这些行为当作推荐的金融假设。
- 基础复利使用独立幂公式；追加用逐期递推复核，不调用我们网站的计算函数。月末100追加、5%月复利、10年，在Omni得到31998.32；月初为32063.02。
- GetSmarter明确把每周52次追加均摊到复利周期，季度和年度追加则按实际对应月末入账；独立递推吻合。1.5年输入结果按2年显示，不能称支持精确18个月。
- TCS每年增长在年度边界调整：0%时月存100、第二年增长10%，两年追加2520。Omni把年增长10%折算为每月因子1.1^(1/12)，首年追加1254.05；两者不是同一业务假设。
- TCS提取50%收益，提款逐次舍入到分的模型可复现结果：本金10000、12%月复利、1年，按月提款后的余额10616.77；按年提款10634.12。只是黑盒算例吻合，不宣称取得其内部源码。
- **Ramsey差异：**10000本金、5%、Daily、100年、追加0，页面1483615；365次/年公式1483623.46019791。新页面重新输入并确认Daily选中后复现。360次/年公式1483616.40470695也不能完全解释。暂不猜测内部舍入根因，也不判定所有日复利结果错误。

- Omni独立周期增长输入：本金1000、8%月复利、12个月、月初存50、每月存款增长1%，结果1744.76，与逐月递推吻合。年度增长同步显示12.683%。零月期限报错但仍显示先前1744.76；Reload恢复1000/8%/240个月/不追加，结果4926.80，保留months单位。USD1000切换EUR显示892.30、再切回USD1000；仅确认换算交互，不认证当日汇率。

### 可用于我们网站的体验结论

- Bankrate零利率已实际复现：10000本金、1年、100/年、月复利，余额与利息仅显示美元符号、贡献金额10100，图表仍显示此前10613.94。恢复5%后金额恢复。Moneychimp的频率0导致余额0，需对复利次数做明确校验。证据：[Bankrate零利率](../evidence/local/competitors/bankrate-zero-rate.jpg)、[Moneychimp零频率](../evidence/local/competitors/moneychimp-zero-frequency.jpg)。
- 四站390px实测：Moneychimp clientWidth375/scrollWidth1078，计算器被横向裁切；Bankrate/BNC/Anderson均为375/375。后两家手机端隐藏滑块，但保留文本输入；BNC关闭Cookie提示后表单与图表可读，AndersonCookie提示覆盖下半图表。截图均仅本地保存。切换视口后的初始未完成布局不作为最终证据。
- NerdWallet、GetSmarter、Ramsey、Omni的部分无效输入仍保留上一组结果，需防止用户把旧金额当新结果。我们现有“输入无效撤下结果”应保留并回归验证。
- Ramsey零期限显示NaN；应明确零期限含义或拒绝，并保持解释、金额与图表一致。
- TCS分享链接恢复输入后，初始结果仍为默认5000/5%/5年；手动Calculate才恢复12640。分享应连同结果正确恢复，不能只验证链接生成。
- TCS图表/摘要等是带点击事件的span图标，无原生按钮语义；我们的同类控件应采用有名称的button并验证键盘。
- 六站390px截图和页面宽度已观察；NerdWallet/TCS/GS/Ramsey/Omni无页面横向溢出记录，Investor的结果状态scrollWidth710、clientWidth375。这里只是模拟视口，不是实机或全站无障碍认证。
- 增长、提款、更多周期属于可选产品扩展，不能因为竞品有就全部堆进首版；先明确口径和独立验收，再决定采纳。**当前证据不支持“我们全面超过十站”。**

### 证据与未完成事项

实测CSV随项目提供；原始控件快照、截图和核算脚本仅本地保存在 `docs/evidence/local/competitors/`（Git忽略）。已打开核看关键截图：NerdWallet年度追加与无效期限、Ramsey零期限与100年、TCS图表、GS关闭调查后的手机表单、Omni负利率手机表单。Investor实际下载CSV的行值已读取，不能因下载事件超时就判断下载失败；XLS没有同等文件证据。打印只确认入口被触发，系统输出受当前浏览器工具限制。

Moneychimp/Bankrate/BNC/Anderson访问和银行报告缺口现已补上。后续仅按本表剩余项补测，包括NerdWallet正常访问、打印实际文件和未确认控件；已核验算例无需重做。其他未完成控件仍如实保留，没有因为数字算例多就把“全控件通过数”改为10。新增原始证据为moneychimp-log.json、bankrate-log.json、bank-hosts-log.json、four-sites-ui.json，核算仍由本地check-evidence.cjs生成CSV。本轮没有修改我们网站应用代码，也没有重新执行或宣称通过应用回归测试。

---

## Search snapshot A

Observed during 2026-10-10 session before browser interruption. Chrome desktop, logged-in browser (identity omitted), query `compound interest calculator`, URL `https://www.google.com/search?q=compound+interest+calculator&hl=en&gl=us`, page 1. English UI, US query hint; actual search location/footer was not captured. This is one personalized/time-specific observation, not a global rank. Source: browser accessibility tree in conversation; no saved screenshot yet. User closed browser after this observation.

| Natural position | Page | URL | Type |
|---|---|---|---|
| 1 | Investor.gov | https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator | Tool |
| 2 | NerdWallet | https://www.nerdwallet.com/banking/calculators/compound-interest-calculator | Tool/article |
| 3 | Moneychimp | http://www.moneychimp.com/calculator/compound_interest_calculator.htm | Tool |
| 4 | Bankrate | https://www.bankrate.com/banking/savings/compound-savings-calculator/ | Tool/article |
| 5 | BNC National Bank | https://www.bnc.bank/calculator/compound-interest | Tool |
| 6 | The Calculator Site | https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php | Tool/article |
| 7 | GetSmarterAboutMoney | https://www.getsmarteraboutmoney.ca/calculators/compound-interest-calculator/ | Tool |
| 8 | Ramsey Solutions | https://www.ramseysolutions.com/retirement/compound-interest-calculator | Tool/article |
| 9 | Anderson Brothers Bank | https://www.abbank.com/calculators/compound-interest | Tool |
| 10 | Omni Calculator | https://www.omnicalculator.com/finance/compound-interest | Tool/article |

Separate module: one sponsored Compass Financial Ministry result with sitelinks, excluded from ranking. Related-search module includes daily/monthly/yearly/contributions/retirement plus navigational variants. No AI overview was present in the captured accessibility tree. Any subsequent search ordering is a new snapshot.

## Operation protocol

Synthetic inputs only. Primary common case: principal 10000, no contributions, 5% annual rate, annual compounding, ten years; expected 16288.94626777442. Secondary: 100/month with monthly compounding, expected 31998.322921469524 where timing/model matches. Also check zero rate, empty/negative inputs, recovery, frequency changes, reset, available delivery controls, desktop/mobile and keyboard as accessible. Record actual capabilities rather than require nonexistent ones. Downloads only pass when obtained and inspected; print only passes with actual output.

## Actual operations, 2026-10-10

Desktop Chrome extension browser. Synthetic values only. Initial pointer activation on Investor.gov navigated to an unrelated IRS link; returned and used keyboard activation, then verified the real result. Formatted text input sometimes appended characters, so Ctrl+A and sequential typing were used and inputs/result rechecked. These are automation observations, not attributed product bugs.

| Site | Visible core controls / actions performed | Actual result | Status / remaining coverage |
|---|---|---|---|
| Investor.gov | Principal, monthly contribution, years, rate, variance, 5 frequencies, Calculate, Reset, chart/table/export menu. Entered baseline; monthly contribution case; zero interest; Reset then empty Calculate. | $16,288.95; $31,998.32; zero interest $22,000; reset clears results and required-field errors appear for principal/years/rate. | Core cases verified. Variance, other frequencies, export file, narrow layout and full keyboard traversal unverified. |
| NerdWallet | Principal, years, return, daily/monthly/annual compounding, contribution, monthly/annual contributions; live chart. Used baseline and monthly contribution case. Screenshot opened and visually checked inputs (10000/10/5/0/annual). | $16,288.95; $31,998.32. | Core cases verified; invalid, annual contribution toggle and narrow layout not yet verified. No delivery buttons observed in core. |
| Moneychimp | Browser navigation attempted to natural-result HTTP URL. | ERR_BLOCKED_BY_CLIENT. | Failed to open; no calculation or controls claimed. No security protections bypassed. |
| Bankrate | Four amount/time fields, five contribution frequencies, four compounding frequencies, Calculate, chart visibility. Ctrl+A typed baseline; switched monthly and 100 deposits. | $16,288.95 / $10,000 contributed / $6,288.95 interest; monthly $31,998.32 / $22,000 / $9,998.32. | Core cases verified; remaining frequencies, invalid recovery and narrow screen unverified. |
| BNC Bank | KJE/Dinkytown engine: principal, rate, years, sliders, definitions, Calculate/View Report, graph collapse. Set rate 5 with principal 10000 and years10; Calculate then View Report via keyboard and pointer. | Inputs confirmed; report did not become visible or open a discovered tab. Screenshot viewed but showed page hero, not numeric graph. | Operated, result unconfirmed. Cannot call a mathematical failure; report/graph not verified. |
| The Calculator Site | Currency, principal/rate/rate-period, 12 frequency choices, years/months, none/deposit/withdraw/both, regular deposit frequency/increase, result summary, monthly/yearly table, share, CSV, print and restart. Baseline none/annual; then deposits100/month and monthly compounding. | $16,288.95 and $31,998.32; paid-in $22,000; interest $9,998.32. | Core cases verified. Keyboard Space successfully changes radios where pointer automation missed. Withdrawals/growth/custom modes/delivery/narrow-screen unverified. |
| GetSmarterAboutMoney | Iframe principal/addition/frequency/rate/compounding/time units/duration slider; Calculate; Graph/Yearly/Monthly Table; print and assumptions. Entered baseline, opened Yearly Table and Assumptions with keyboard. | $16,288.95; $6,288.95 interest; yearly table endpoint agrees. | Core and two conditional sections verified. Disclosed end-of-month additions and contribution grouping; other modes/print output/narrow-screen unverified. |
| Ramsey | Three compounding choices, years/principal/monthly contribution/rate, Calculate, result composition and three what-if examples. Selected Yearly, baseline; then Monthly +100. | $16,288, growth $6,288; monthly $31,998, growth $9,998. | Consistent with dollar truncation; not a cent-precision pass. FAQ toggles/invalid recovery/narrow-screen unverified. No sales lead submitted. |
| Anderson Brothers | Same visibly credited KJE engine as BNC, different domain/host presentation. Set5%, Calculate, View Report. | Inputs confirmed; report did not become visible. | Operated, result unconfirmed; not independent algorithm evidence. |
| Omni | Principal currency, rate, years/months/unit, many compounding choices, deposit frequency and conditional amount/timing/growth, graph/pie/table, share/reload/clear. Baseline; switched deposits to monthly. | Baseline settled at $16,288.95. Additional fields appeared with default $50 and beginning timing; annual model yielded $24,038.55 (not the common monthly case). | Baseline verified. Attempt to change deposit amount encountered CDP dispatch deadline, so monthly common case unconfirmed. |

## Supplemental search snapshot B

Original query, same hl=en/gl=us, `start=10` (page2), observed later in same date. Ordering differs: Omni recurs despite appearing at A position10, so this is explicitly a separate snapshot. Visible order: Fidelity Bank https://www.fidelitybanker.com/calculator/compound-interest ; Omni (duplicate, skipped); Moneysmart https://moneysmart.gov.au/budgeting/compound-interest-calculator ; Google Play app listing (not web tool, not used); Schwab https://www.schwabmoneywise.com/compound-savings-calculator (operated in follow-up below). No variant searches used.

- Fidelity: opened and operated rate5/principal10000/years10 and Calculate/View Report; same KJE implementation, no report visible. Treated as supplementary duplicate engine, not a new independent tool design.
- Moneysmart: initial/regular deposit, deposit and compound frequency, years/rate, effective rate help; result and alternative strategy (delay, deposit, frequency) appear after entry. Entered10000/0, years10/rate5 defaults confirmed, switched Annual. Actual total $16,289 and interest $6,289 (whole-dollar rounded). Baseline verified. Alternative strategy/accordion/invalid/narrow-screen not verified. Australia context, not evidence of US-specific rules.

### Follow-up: Schwab Moneywise

Opened the next observed page2 result, https://www.schwabmoneywise.com/compound-savings-calculator. This is a KJE savings/contributions interface with starting amount, years, return, additional deposits, five deposit frequencies and four compound frequencies, Calculate, View Report, definitions and chart. It is materially different from the simple compound-interest KJE interface on BNC/Anderson/Fidelity, but not an independent vendor.

Entered10000,0 contributions,5%,10years,annual. Visible result16288.92, reproduced after Ctrl+A/sequential typing/Tab. This differs by3 cents from the unrounded formula16288.9463; intermediate rounding is a possible explanation, not a verified root cause. At0% the correctly committed input produced10000. Initial fill-only edits left old results, so they were not counted as true calculator responses. Negative input was entered and formatted as -$1; final validation result was not confirmed. View Report did not reveal a report in the observed state. Other frequencies, report/export and mobile remain unverified.

Final totals: **13 attempted URLs;12 loaded and operated tool pages;9 pages with confirmed numeric baseline outputs (8 matching within their stated display precision, plus Schwab's reproduced3-cent difference);0 full-control acceptance passes.** BNC/Anderson/Fidelity are one duplicated implementation family. Counting that family once and Schwab's distinct contribution tool separately gives10 interacted tool designs, not10 independent algorithms. Expansion stopped at that scope; no page3–5 or variant queries were needed to reach10 interacted designs. Detailed mode/export/mobile acceptance remains incomplete. Research screenshots were viewed in the conversation, not saved repository files. No competitor download or print output is claimed verified.


## Selection for product specification

| User problem | Adopt | Evidence | Acceptance |
|---|---|---|---|
| Confuses deposits with earnings | Three-part result: future value, paid in, interest | Bankrate, Ramsey and TCS operations | All three reconcile for baseline and contributions |
| Needs to verify chart | Readable annual/monthly table | SEC and GetSmarter table | Same model and exact endpoint as summary/CSV |
| APY vs rate ambiguity | Explicit nominal/APY selector with effective-yield explanation | Official CFPB; rate labels across sampled sites | Equivalent rate inputs produce equivalent values |
| Needs to understand assumptions | Visible model summary + detail section | GetSmarter assumptions interaction; Omni timing | Start/end timing hand cases pass; equal-month convention visible |
| Needs reusable result | PNG card, full CSV, print, hash share | TCS visible delivery affordances; user SOP | Must actually generate/open files and restore share in local QA |
| Too much form complexity | Primary savings inputs; advanced timing/inflation/rate-type | TCS breadth and Omni conditional fields | Small-screen core path stays clear; all modes genuinely implemented |
| Incorrect/missing inputs | Explicit field validation, remove old result immediately | SEC reset/required error operation | Empty, negative, invalid hash never display stale output |

No competitor text, identity, historical return claims or layout will be copied. Missing competitive cases remain tracked rather than marked complete; SOP allows independent development with honestly recorded research gaps.

## 深入验证续作（2026-10-10，进行中）

范围固定为快照 A 的原始十站；补充站点不替代原始名单。历史明确通过的基础算例沿用，未确认项目重新操作。当前没有任何站被宣称全控件通过。

### Investor.gov 新增证据

- 本金10000、无追加、5%、1年：年/半年/季度/月/日结果分别10500.00、10506.25、10509.45、10511.62、10512.67，与独立公式一致。
- 利率区间±1个百分点：年复利4%/5%/6%结果10400/10500/10600；图表和表格一致。
- 每月末提款100、月复利5%、1年：9283.73，与独立逐月递推一致。格式化字段fill曾形成0-100，改为Ctrl+A、逐字键入、Tab后明确显示$-100，前一结果不算有效提款测试。
- 期限0：提示Years to grow must be 1 or above，移除结果；键入-1被过滤成1；1.5年可计算8911.97。负利率-5%、月提款100、1年显示8338.42（待独立核对）。恢复1年重新计算成功。
- Show Table键盘激活变成Hide Table，显示完整数据表。
- CSV菜单点击后浏览器下载事件超时，但实际文件已保存；读取Downloads/total-savings (1).csv，Year1的6%/5%/4%提款结果9383.22/9283.73/9185.17与页面一致。不能将下载事件缺失当产品失败。
- 390px视口实测innerWidth390/clientWidth375/scrollWidth710，存在横向溢出；截图已保存并在工具中核看，仍需进一步定位表格/工具区影响。
- 仍待：其余导出格式和打印、更多边界、手机完整路径。Highcharts Cloud会转到第三方账户流程，不在工具核心体验范围。
- 本地证据（不随仓库提供）：docs/evidence/local/competitors/investor-log.json、investor-mobile.jpg。

### 后续站点新增证据（进行中）

- NerdWallet：年度追加手算1000本金、每年100、10%、2年得到1420，截图已核看。0%得到1200。期限0和51均提示1–50范围，但保留上次结果，已复现截图。负号/小数在部分字段被过滤（-5显示5%，1.5期限对应15年结果），不能作为负利率/1.5年的算法证据。390px下client/scroll均375；手机出现Calculate按钮，桌面实时交互与手机提交模式需分别处理。频率补测中格式化金额未全部按预期更新，不能据此宣称通过。无核心导出/重置控件观察记录。
- Moneychimp：原始HTTP再次ERR_BLOCKED_BY_CLIENT，未绕过。
- Bankrate：原始URL本轮ERR_CONNECTION_CLOSED，reload仍失败，历史核心算例沿用，深入补测受阻。
- BNC：原始URL本轮ERR_CONNECTION_CLOSED，reload仍失败，历史结果未确认状态保留。
- The Calculator Site：本金10000、5%、1年、无追加，11种标准频率逐项等待结果出现后核对，均与P(1+r/n)^n一致。自定义12/年、月存100月取50，11125.56。0%两年每月100，年度追加增长10%得12520；固定每年增加20得12640。切换存取模式会清空金额，已排除空字段假算例。期限0年0月撤下结果并显示Oops及明确错误，改回1年恢复。分享链接恢复输入，但初始结果仍为5000/5%/5年默认值，手动Calculate才得到12640；复制按钮尚未确认剪贴板。CSV尝试后Chrome屏蔽页面，未确认文件。390px无横向溢出，截图已核看。其他条件模式和打印仍待。
- GetSmarterAboutMoney：10000本金、100月追加、5%、月复利1年11739.50；同条件周/双周/月/季度/年追加分别15832.46、13172.04、11739.50、10919.21、10611.62。页面披露月末追加、周52次按复利周期折算。12个月与1年等价。无追加5%1年季度/半年/年复利10509.45/10506.25/10500。Monthly Table和All Rows已操作。零利率被明确拒绝（最小0.01%）并保留旧结果；恢复5%成功。手机反馈调查覆盖下半屏，需关闭再检查核心路径。打印尚未验证。
- Ramsey：每日复利10000/5%/1年10512（整美元截断），0%得10000。负利率提示>=0并保留旧结果。期限0可计算但文案出现In NaN years，重新Ctrl+A逐字键入0复现，截图已核看保存；恢复1年成功。100年每日复利1483615。4个FAQ键盘可折叠，首个重新展开。390px client/scroll375，无页面横向溢出。其他边界待完整记录。
- Anderson Brothers：本轮ERR_CONNECTION_CLOSED，reload仍失败，历史结果未确认状态保留。
- Omni：金额掩码Ctrl+A偶尔追加，使用Home/Shift+End/Backspace明确清空后本金10000。等待具体结果稳定后，年/半年/季/双月/月/双周26/周52/日360/日365/连续分别10500、10506.25、10509.45、10510.53、10511.62、10512.21、10512.46、10512.67、10512.67、10512.71。月末100追加10年31998.32；月初32063.02，独立公式吻合。Charts and table及Yearly表操作并核对年10余额32063.02。零利率周期切换存在旧结果现象，尚在排查，暂不判数学缺陷。

本地详细日志与截图保存在docs/evidence/local/competitors/；目前仍为进行中，不能将上述数值通过等同全控件验收通过。
