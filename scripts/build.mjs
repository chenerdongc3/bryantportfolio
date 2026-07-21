import { spawnSync } from "node:child_process";
import { rmSync } from "node:fs";
import { loadEnv } from "vite";

const buildEnvironment = { ...loadEnv("production", process.cwd(), "VITE_"), ...process.env };

function run(command, args) {
  const result = spawnSync(command, args, { env: buildEnvironment, stdio: "inherit", shell: process.platform === "win32" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run("vite", ["build"]);
run("vite", ["build", "--ssr", "src/entry-server.tsx", "--outDir", "dist-ssr"]);
run(process.execPath, ["scripts/prerender.mjs"]);
rmSync("dist-ssr", { recursive: true, force: true });
