import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "@/App";

describe("public routes", () => {
  it("leads with experience and keeps selected project proof on the homepage", async () => {
    render(<MemoryRouter initialEntries={["/"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 2, name: /先看我解决过/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Noumi" })).toBeInTheDocument();
    expect(await screen.findByRole("heading", { level: 2, name: "ADHD 情感陪伴闹钟" })).toBeInTheDocument();
  });

  it("renders a project deep link", async () => {
    render(<MemoryRouter initialEntries={["/projects/ai-conversation-practice"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "智能陪练对话平台" })).toBeInTheDocument();
  });

  it("renders the German note from the notes index", async () => {
    render(<MemoryRouter initialEntries={["/notes"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 2, name: "德语学习笔记" })).toBeInTheDocument();
  });

  it("renders the German grammar outline", async () => {
    render(<MemoryRouter initialEntries={["/notes/german"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "德语学习笔记" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "第一部分 词法" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "2.6 从句 Linker" })).toHaveAttribute("href", "#linker");
  });

  it("renders a noindex 404 for an unknown route", async () => {
    render(<MemoryRouter initialEntries={["/missing"]}><AppRoutes /></MemoryRouter>);
    expect(await screen.findByRole("heading", { level: 1, name: "页面没有找到" })).toBeInTheDocument();
  });
});
