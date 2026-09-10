// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { existsSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isUserSite = Boolean(owner && repository === `${owner}.github.io`);
const cnamePath = new URL("./public/CNAME", import.meta.url);
const customDomain = existsSync(cnamePath)
  ? readFileSync(cnamePath, "utf8").trim()
  : undefined;
const site =
  process.env.PUBLIC_SITE_URL ||
  (customDomain
    ? `https://${customDomain}`
    : owner
      ? `https://${owner}.github.io`
      : "https://urnotmadenough.ca");
const base =
  process.env.PUBLIC_BASE_PATH ||
  (!customDomain && repository && !isUserSite ? `/${repository}` : "/");

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [mdx(), sitemap()],
});
