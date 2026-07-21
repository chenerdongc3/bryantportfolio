from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path("/Users/hb339/bryantportfolio")
OUT = ROOT / "output/pdf/陈扬-前端与Agent开发-一页简历.pdf"

PAGE_W, PAGE_H = A4
INK = HexColor("#111827")
MUTED = HexColor("#5B6474")
BG = HexColor("#F8FAFD")
WHITE = HexColor("#FFFFFF")
BLUE = HexColor("#3B82F6")
PURPLE = HexColor("#8B5CF6")
YELLOW = HexColor("#FACC15")
LIGHT_BLUE = HexColor("#EAF2FF")
LIGHT_PURPLE = HexColor("#F0EAFF")
LINE = HexColor("#D9E0EA")

FONT_CJK = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_LATIN_BOLD = "/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf"
FONT_MONO = "/System/Library/Fonts/SFNSMono.ttf"

pdfmetrics.registerFont(TTFont("ResumeCJK", FONT_CJK))
pdfmetrics.registerFont(TTFont("ResumeDisplay", FONT_LATIN_BOLD))
pdfmetrics.registerFont(TTFont("ResumeMono", FONT_MONO))


def style(name, size, leading=None, color=INK, font="ResumeCJK", space_after=0):
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.42,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=space_after,
        allowWidows=0,
        allowOrphans=0,
    )


BODY = style("Body", 8.15, 12.2, MUTED)
BULLET = style("Bullet", 8.15, 12.2, INK)
SMALL = style("Small", 7.4, 10.7, MUTED)
ROLE = style("Role", 11.4, 14.5, INK)
ORG = style("Org", 8.1, 10.5, BLUE, "ResumeMono")
SIDE_TITLE = style("SideTitle", 8.2, 10, INK, "ResumeMono")
SIDE_TEXT = style("SideText", 7.8, 11.5, INK)


def paragraph(c, text, x, y_top, width, pstyle, max_height=200):
    p = Paragraph(text, pstyle)
    _, height = p.wrap(width, max_height)
    p.drawOn(c, x, y_top - height)
    return y_top - height


def section_label(c, text, x, y, width=86, fill=YELLOW):
    c.setFillColor(fill)
    c.setStrokeColor(INK)
    c.setLineWidth(1.2)
    c.roundRect(x, y - 14, width, 17, 2, fill=1, stroke=1)
    c.setFillColor(INK)
    c.setFont("ResumeDisplay", 10)
    c.drawString(x + 6, y - 9, text)


def divider(c, x, y, width):
    c.setStrokeColor(INK)
    c.setLineWidth(1.15)
    c.line(x, y, x + width, y)


def bullet(c, text, x, y_top, width, color=BLUE):
    c.setFillColor(color)
    c.saveState()
    c.translate(x + 2.6, y_top - 6.4)
    c.rotate(45)
    c.rect(-2.1, -2.1, 4.2, 4.2, fill=1, stroke=0)
    c.restoreState()
    return paragraph(c, text, x + 12, y_top, width - 12, BULLET)


def tag(c, text, x, y, width, fill=WHITE):
    c.setFillColor(fill)
    c.setStrokeColor(INK)
    c.setLineWidth(0.8)
    c.roundRect(x, y, width, 15, 3, fill=1, stroke=1)
    c.setFillColor(INK)
    c.setFont("ResumeCJK", 6.8)
    c.drawCentredString(x + width / 2, y + 4.2, text)


def draw_resume():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("陈扬 - 前端与 Agent 开发一页简历")
    c.setAuthor("陈扬")

    # Background and a bold editorial frame, matching the portfolio visual system.
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    margin = 12 * mm
    c.setStrokeColor(INK)
    c.setLineWidth(1.5)
    c.rect(margin, margin, PAGE_W - 2 * margin, PAGE_H - 2 * margin, fill=0, stroke=1)

    # Header.
    top = PAGE_H - margin
    c.setFillColor(YELLOW)
    c.rect(margin, top - 10, 98, 10, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont("ResumeDisplay", 30)
    c.drawString(margin + 13, top - 51, "BRYANT CHEN")
    c.setFont("ResumeCJK", 20)
    c.drawString(margin + 13, top - 79, "陈扬")

    c.setFillColor(BLUE)
    c.roundRect(margin + 210, top - 67, 150, 30, 4, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("ResumeCJK", 11)
    c.drawCentredString(margin + 285, top - 55, "前端开发 / Agent 工程")

    intro = "应用心理学背景，具备 Web3 前端性能治理与 Agent 平台工程化经验。关注复杂系统的可用性、可靠性与可验证结果。"
    paragraph(c, intro, margin + 379, top - 25, PAGE_W - margin - (margin + 379) - 11, SMALL)

    contact_y = top - 104
    c.setFillColor(INK)
    c.setFont("ResumeCJK", 6.9)
    c.drawString(margin + 13, contact_y, "151-0838-5918  /  2607653809@qq.com  /  上海")
    c.setFillColor(MUTED)
    c.drawRightString(PAGE_W - margin - 12, contact_y, "chenerdongc3.github.io/bryantportfolio/")

    header_bottom = top - 119
    c.setStrokeColor(INK)
    c.setLineWidth(1.5)
    c.line(margin, header_bottom, PAGE_W - margin, header_bottom)

    # Two-column body.
    left_x = margin + 13
    left_w = 142
    gutter = 18
    main_x = left_x + left_w + gutter
    main_w = PAGE_W - margin - 13 - main_x
    body_top = header_bottom - 23

    # Sidebar.
    section_label(c, "PROFILE", left_x, body_top, 72, YELLOW)
    y = body_top - 28
    y = paragraph(c, "西南交通大学 · 2026届<br/>应用心理学", left_x, y, left_w, SIDE_TEXT)
    y -= 12
    divider(c, left_x, y, left_w)
    y -= 21

    section_label(c, "CORE STACK", left_x, y, 88, LIGHT_BLUE)
    y -= 29
    stack = [
        "TypeScript / React / Next.js",
        "Claude Agent SDK / MCP",
        "PostgreSQL / Kubernetes",
        "SSR / Core Web Vitals",
        "SSE / 任务调度 / 可观测性",
    ]
    for item in stack:
        y = bullet(c, item, left_x, y, left_w, PURPLE) - 5

    y -= 4
    divider(c, left_x, y, left_w)
    y -= 21
    section_label(c, "IMPACT", left_x, y, 71, LIGHT_PURPLE)
    y -= 31

    for metric, label, fill in [
        ("42%", "KuCoin P75 TTFB 降幅", BLUE),
        ("33%", "KuCoin P75 LCP 降幅", PURPLE),
        ("5", "Runtime 部署环境统一适配", YELLOW),
    ]:
        c.setFillColor(fill)
        c.setStrokeColor(INK)
        c.setLineWidth(1)
        c.roundRect(left_x, y - 39, left_w, 39, 3, fill=1, stroke=1)
        c.setFillColor(INK if fill == YELLOW else WHITE)
        c.setFont("ResumeDisplay", 18)
        c.drawString(left_x + 8, y - 22, metric)
        text_color = INK if fill == YELLOW else WHITE
        paragraph(c, label, left_x + 50, y - 8, left_w - 57, style("Metric", 6.8, 9, text_color))
        y -= 49

    y -= 1
    divider(c, left_x, y, left_w)
    y -= 21
    section_label(c, "WORK STYLE", left_x, y, 91, YELLOW)
    y -= 29
    paragraph(c, "数据驱动 · 产品意识<br/>复杂链路拆解 · 工程交付<br/>跨角色协作 · 持续复盘", left_x, y, left_w, SIDE_TEXT)

    # Main content.
    section_label(c, "EXPERIENCE", main_x, body_top, 99, YELLOW)
    y = body_top - 32

    c.setFillColor(BLUE)
    c.rect(main_x, y - 3, 8, 8, fill=1, stroke=0)
    y = paragraph(c, "NOUMI  /  2026.06 - 至今", main_x + 15, y + 1, main_w - 15, style("OrgCJK", 8.1, 10.5, BLUE))
    y -= 3
    y = paragraph(c, "Agent 开发工程师", main_x, y, main_w, ROLE)
    y -= 5
    y = paragraph(c, "负责智能 Agent 工作平台的运行时、编排与可靠性建设，覆盖多环境部署、多智能体协作、能力资产和定时任务全链路。", main_x, y, main_w, BODY)
    y -= 7

    noumi_bullets = [
        "落地“平台控制面 + 每用户有状态 Runtime”架构，以统一接口适配 Docker、Swarm、Kubernetes、ECI、Local Process <b>5 类环境</b>，隔离用户会话、文件与产物。",
        "构建 Main Agent、Topic Agent、SubAgent 协作链路，通过受控 CLI、Dispatch Bridge 与稳定消息 ID 打通跨 Project 委派、进度和产物回流。",
        "完善任务状态机与 SSE 事件重放，支持串行、并发、取消、后台子任务和 Watchdog 恢复；补齐工具授权、计划审批和用户追问等关键控制点。",
        "统一 Skill、Plugin、CLI、MCP、Connector <b>5 类能力资产</b>，并以摘要校验、原子物化和 OAuth 凭据隔离降低配置漂移与凭据串用风险。",
        "设计 PostgreSQL 可靠定时任务链路，统一 Cron、IANA 时区、Lease 与运行日志，结合幂等回报、退避重试和异常 Run 对账降低重复执行与结果遗漏。",
    ]
    for item in noumi_bullets:
        y = bullet(c, item, main_x, y, main_w, BLUE) - 5

    y -= 3
    divider(c, main_x, y, main_w)
    y -= 21

    c.setFillColor(PURPLE)
    c.rect(main_x, y - 3, 8, 8, fill=1, stroke=0)
    y = paragraph(c, "KUCOIN  /  WEB3", main_x + 15, y + 1, main_w - 15, style("OrgPurple", 8.1, 10.5, PURPLE, "ResumeMono"))
    y -= 3
    y = paragraph(c, "前端开发实习生", main_x, y, main_w, ROLE)
    y -= 5
    y = paragraph(c, "参与 Web3 业务前端重构与性能治理，推动页面逻辑、公共组件与研发流程向组件化和标准化收敛。", main_x, y, main_w, BODY)
    y -= 7

    kucoin_bullets = [
        "基于团队 AI Skill 工作流完成代码生成、规范检查与重复性改造，将标准化研发流程沉淀为可复用能力。",
        "基于 Next.js 为关键页面落地 SSR，优化首屏请求、缓存策略和 HTML 输出，使生产环境 P75 TTFB 从 <b>1,200 ms 降至 700 ms</b>，降低约 <b>42%</b>。",
        "使用 Kunlun 平台分析请求瀑布、资源加载与主线程耗时，通过压缩、优先级和请求链路优化，使 P75 LCP 从 <b>3.6 s 降至 2.4 s</b>，降低约 <b>33%</b>。",
    ]
    for item in kucoin_bullets:
        y = bullet(c, item, main_x, y, main_w, PURPLE) - 5

    y -= 3
    divider(c, main_x, y, main_w)
    y -= 21
    section_label(c, "SELECTED PROJECT", main_x, y, 128, LIGHT_BLUE)
    y -= 29
    y = paragraph(c, "旅行助手 Agent", main_x, y, main_w, ROLE)
    y -= 4
    y = paragraph(c, "LangGraph / Python / Qdrant / Claude API / RAG", main_x, y, main_w, style("ProjectStack", 7.4, 10, BLUE, "ResumeMono"))
    y -= 6
    project_bullets = [
        "以 Pydantic Schema、JSON Mode、校验器和指数退避构建稳定结构化输出，支持地图 API 与 PDF 导出链路。",
        "结合 Summarizer Agent、Supervisor 多 Agent 协作、Qdrant Hybrid Search + Rerank 与 Checkpoint，在降低 <b>30%+</b> Token 消耗的同时提升召回质量和恢复能力。",
    ]
    for item in project_bullets:
        y = bullet(c, item, main_x, y, main_w, BLUE) - 4

    # Footer tag row.
    footer_y = margin + 18
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.line(main_x, footer_y + 24, main_x + main_w, footer_y + 24)
    tags = [
        ("AGENT HARNESS", 78, LIGHT_BLUE),
        ("WEB PERFORMANCE", 89, LIGHT_PURPLE),
        ("PRODUCT-MINDED", 84, YELLOW),
    ]
    tx = main_x
    for text, width, fill in tags:
        tag(c, text, tx, footer_y, width, fill)
        tx += width + 8

    c.save()
    return OUT


if __name__ == "__main__":
    print(draw_resume())
