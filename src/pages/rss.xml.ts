import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";
import { isPublished, newestFirst } from "../utils/investigations";

export async function GET(context: { site: URL }) {
  const investigations = newestFirst(
    (await getCollection("investigations")).filter(isPublished),
  );
  const basePath = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/`;
  const publicRoot = new URL(basePath, context.site);
  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: publicRoot,
    items: investigations.map(({ data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedDate,
      link: `investigations/${data.slug}/`,
      categories: data.topics,
      author: data.authors.join(", "),
    })),
  });
}
