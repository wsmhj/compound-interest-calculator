# Compound Interest Calculator design system

## 最新视觉改版 — 2026-10-10

用户要求整体美化。当前采用暖白#f6f5f0、森林绿#214b3a、正文#203b32、辅助文字#63726b、浅绿#d5edb1和陶土色#bd7047。保留Accrue名称与增长标志结构；标题改为本地Georgia衬线与斜体组合，正文Segoe UI/Arial。原创SVG增长图形用于首屏；深绿色结果摘要、白色图表、浅纸色明细表形成层次。最大内容宽1288px，计算器双列约0.85:1.55；850px以下单列；手机表单与结果独立卡片。

新增app/theme.css集中维护主题，globals.css保留布局与可访问性基础。导出PNG、favicon、Apple图标及OG资源同步森林绿。尊重减少动画，保留焦点、错误提示和打印结构。下方为初始设计记录，颜色等以本节为准。

2026-10-10, established before application coding. References actually viewed: NerdWallet calculator screenshot (clear input/result separation), BNC screenshot (large editorial heading but tool pushed below hero), SEC/TCS/Omni rendered controls and tables. Do not copy their branding/layout. Our design prioritizes compact calculator above editorial content.

## Direction and tokens

Calm financial worksheet: warm off-white #f7f8fa, white surfaces, ink #17233b, muted #58657b, cobalt #2459d3, pale blue #eaf0ff, teal #167c71 for earned interest, border #dfe4ec; warning #a22e2e with pale red. Cobalt is principal action; teal identifies interest, not a financial recommendation. System sans font stack, geometric large heading, tabular numeric outputs. No external fonts or stock finance photography. Original vector mark: three rising rounded bars under a growth arc; standalone32px favicon.

Max width1200px; spacing4/8/12/16/24/32/48/72; rounded cards16–24; modest border/shadow. Type body16–18px, labels14px, result48px desktop/34px phone; H1 clamp36–60px. Focus outline3px cobalt offset3px; controls min44px; transitions<=150ms and disabled under reduced motion. Graph includes labels/legend/table, not color alone.

## Desktop structure (>=1000px)

```text
┌ Website wordmark           Calculator   How it works   About    Feedback ┐
│ SAVING, MADE CLEAR                                                   │
│ Compound interest calculator                   small growth motif   │
│ Explore what consistency can add up to.                             │
├───────────────────────┬─────────────────────────────────────────────┤
│ Your starting point   │ YOUR PROJECTED BALANCE          [Example]   │
│ principal / currency  │ $xx,xxx.xx                                   │
│ contribution/freq     │ Paid in                     Interest earned │
│ years / months        │                                             │
│ rate / compounding    │          accessible growth chart            │
│ ▸ More options        │                                             │
│ Reset example         │ assumptions + PNG / CSV / Share / Print     │
├───────────────────────┴─────────────────────────────────────────────┤
│ Year-by-year / Monthly table                 Copy summary           │
│ editorial guide index  | explanatory sections, examples, formulas   │
│ FAQ, primary sources, projection disclaimer                         │
└ Brand / About / Contact / Privacy / Terms / feedback                 ┘
```

## Phone structure (<700px)

```text
logo                     feedback
short heading and description
inputs (single card; two columns only for short paired fields)
advanced disclosure / reset
balance / paid in / interest
chart (legible limited axis labels)
wrapped actions (2 columns)
scrollable labeled data table
guide (single column), FAQs, sources
wrapped footer links
```

Tablet700–999px uses single calculator column or equal split only when controls remain comfortable. No sticky overlay blocks inputs. Dialog max560px/max-height85dvh with scrolling; long email wraps. Print on white with compact brand, assumptions, results and annual table; use repeated table headers and avoid split rows.

## 2026-10-10 — Current financial workbench redesign
This revision supersedes the earlier warm-paper / forest-green editorial direction, which the user rejected. Current visual language: graphite header and text, white calculation surface, thin rules, square corners, tabular monospace amounts, and rust-orange interest figures. The compact introduction leads directly into a continuous input/results workbench. Contributions and interest are shown as a proportional bar; chart shading now separates interest from money contributed. The calculation engine is unchanged. PNG preview and original social assets share the new palette.
