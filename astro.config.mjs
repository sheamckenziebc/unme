// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isUserSite = Boolean(owner && repository === `${owner}.github.io`);
const site =
  process.env.PUBLIC_SITE_URL ||
  (owner ? `https://${owner}.github.io` : "https://urnotmadenough.ca");
const base =
  process.env.PUBLIC_BASE_PATH ||
  (repository && !isUserSite ? `/${repository}` : "/");

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [mdx(), sitemap()],
});
