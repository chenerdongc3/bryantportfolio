import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import { AppRoutes } from "@/App";

describe("public routes", () => {
  afterEach(() => window.localStorage.clear());

  it("leads with English experience and keeps selected project proof on the homepage", async () => {
    render(<MemoryRouter initialEntries={["/"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 2, name: /See the problems/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Enterprise AI Product Team" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Hello" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Hello logo" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "KuCoin logo" })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { level: 2, name: "ADHD Companion Alarm" })).toBeInTheDocument();
  });

  it("renders a project deep link", async () => {
    render(<MemoryRouter initialEntries={["/projects/ai-conversation-practice"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "AI Conversation Practice" })).toBeInTheDocument();
  });

  it("keeps project directory URLs indexable with localized metadata", async () => {
    render(<MemoryRouter initialEntries={["/projects/agent-workbench-lab/"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "Agent Workbench Lab" })).toBeInTheDocument();
    expect(document.title).toBe("Agent Workbench Lab | Projects | Bryant");
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
    fireEvent.click(screen.getByRole("button", { name: "切换到中文" }));
    expect(document.title).toBe("Agent Workbench Lab｜项目｜Bryant");
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
  });

  it("renders the German note from the notes index", async () => {
    render(<MemoryRouter initialEntries={["/notes"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 2, name: "German Study Notes" })).toBeInTheDocument();
  });

  it("renders the German grammar outline", async () => {
    render(<MemoryRouter initialEntries={["/notes/german"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "German Study Notes" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Part I · Morphology" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "2.6 Subordinate Clauses" })).toHaveAttribute("href", "/notes/german/linker");
  });

  it("renders a concise grammar lesson with its directory", async () => {
    render(<MemoryRouter initialEntries={["/notes/german/articles"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "Articles" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "One-line formula" })).toBeInTheDocument();
    expect(screen.getAllByRole("navigation", { name: "German Study Notes directory" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "1.1 Articles" })[0]).toHaveAttribute("aria-current", "page");
  });

  it("renders the full-stack roadmap with actionable completion details", async () => {
    render(<MemoryRouter initialEntries={["/notes/fullstack-roadmap/backend-api"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "Backend and API Design" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Key points in depth" })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 4, name: "What to understand" })).toHaveLength(3);
    expect(screen.getAllByRole("heading", { level: 4, name: "How to apply and verify" })).toHaveLength(3);
    expect(screen.getAllByRole("heading", { level: 4, name: "Common pitfalls" })).toHaveLength(3);
    expect(screen.getByRole("heading", { level: 2, name: "Hands-on practice" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Stage deliverables" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Completion criteria" })).toBeInTheDocument();
  });

  it("renders a noindex 404 for an unknown route", async () => {
    render(<MemoryRouter initialEntries={["/missing"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "Page not found" })).toBeInTheDocument();
  });

  it("switches all visible portfolio copy to Chinese", async () => {
    render(<MemoryRouter initialEntries={["/projects"]}><AppRoutes /></MemoryRouter>);
    const toggle = await screen.findByRole("button", { name: "切换到中文" });
    fireEvent.click(toggle);
    expect(await screen.findByRole("heading", { level: 1, name: /项目实践/ })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "主导航" })).toHaveTextContent("首页");
    expect(screen.queryByRole("button", { name: /主题/ })).not.toBeInTheDocument();
  });
});
