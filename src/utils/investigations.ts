import type { CollectionEntry } from "astro:content";

export type Investigation = CollectionEntry<"investigations">;

export function isPublished(entry: Investigation) {
  return !entry.data.draft && !entry.data.demonstration;
}

export function newestFirst(entries: Investigation[]) {
  return [...entries].sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
