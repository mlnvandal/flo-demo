import { titles } from "./titles";
import type { Collection } from "./types";

function pickSlice(start: number, count: number) {
  return titles.slice(start, start + count).map((t) => t.slug);
}

export const collections: Collection[] = [
  {
    slug: "trending",
    name: "В тренде на Fletflix",
    description: "То, что сейчас смотрят чаще всего.",
    titleSlugs: pickSlice(0, 20),
  },
  {
    slug: "new-releases",
    name: "Новинки недели",
    description: "Свежие релизы — от лёгких до напряжённых.",
    titleSlugs: pickSlice(24, 20),
  },
  {
    slug: "dark-nights",
    name: "Ночные триллеры",
    description: "Включай свет и не моргай.",
    titleSlugs: pickSlice(48, 20),
  },
  {
    slug: "family-time",
    name: "Семейный вечер",
    description: "Когда всем нужен один и тот же плей.",
    titleSlugs: pickSlice(72, 20),
  },
  {
    slug: "for-true-detectives",
    name: "Для настоящих детективов",
    description: "Следы, улики и ложные версии.",
    titleSlugs: pickSlice(96, 20),
  },
  {
    slug: "comfort-watch",
    name: "Комфортный просмотр",
    description: "Тёплые истории, в которые хочется вернуться.",
    titleSlugs: pickSlice(120, 20),
  },
];

