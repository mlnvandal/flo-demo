import type { Title } from "./types";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function hsl(h: number, s: number, l: number) {
  return `hsl(${h} ${s}% ${l}%)`;
}

function makeCover(index: number) {
  const hue = (index * 37) % 360;
  return {
    gradientFrom: hsl(hue, 85, 52),
    gradientTo: hsl((hue + 45) % 360, 85, 28),
  };
}

function makeSynopsis(name: string, index: number) {
  const hooks = [
    "всё начинается с одной ошибки",
    "никто не знает, кому можно доверять",
    "тайна всплывает слишком поздно",
    "прошлое возвращается без предупреждения",
    "цена правды оказывается выше ожиданий",
  ];
  const hook = hooks[index % hooks.length];
  return `«${name}» — история, где ${hook}.`;
}

function buildTitles(): Title[] {
  const adjectives = [
    "Тихая",
    "Последняя",
    "Северная",
    "Скрытая",
    "Солнечная",
    "Чёрная",
    "Алмазная",
    "Нулевая",
    "Красная",
    "Лунная",
    "Стеклянная",
    "Железная",
    "Золотая",
    "Синяя",
    "Белая",
    "Пятая",
    "Потерянная",
    "Бесконечная",
    "Холодная",
    "Горячая",
  ];
  const nouns = [
    "линия",
    "станция",
    "комната",
    "улица",
    "память",
    "вышка",
    "петля",
    "пыль",
    "формула",
    "карта",
    "тень",
    "волна",
    "грань",
    "легенда",
    "погоня",
    "сделка",
    "охота",
    "пауза",
    "параллель",
    "код",
  ];
  const suffixes = [
    "молчания",
    "времени",
    "города",
    "ночных огней",
    "первого сигнала",
    "чужих правил",
    "потерянных кадров",
    "двух миров",
    "последнего рейса",
    "без обратного адреса",
    "неверных решений",
    "призрачного сезона",
    "дальнего берега",
    "закрытого неба",
    "чёрного льда",
    "странного дня",
  ];
  const tagsPool = [
    "драма",
    "триллер",
    "детектив",
    "криминал",
    "комедия",
    "фантастика",
    "анимация",
    "боевик",
    "приключения",
    "романтика",
    "мистика",
    "семейное",
  ];

  const desiredCount = 168;
  const result: Title[] = [];
  const usedSlugs = new Set<string>();

  for (let i = 0; i < desiredCount; i++) {
    const a = adjectives[i % adjectives.length];
    const n = nouns[(i * 3) % nouns.length];
    const s = suffixes[(i * 5) % suffixes.length];
    const name = `${a} ${n} ${s}`;

    let slugBase = slugify(name);
    if (!slugBase) slugBase = `title-${i + 1}`;
    let slug = slugBase;
    let salt = 2;
    while (usedSlugs.has(slug)) {
      slug = `${slugBase}-${salt++}`;
    }
    usedSlugs.add(slug);

    const year = 2008 + (i % 18);
    const durationMin = 78 + ((i * 7) % 64);
    const rating = clamp(5.6 + ((i * 13) % 36) / 10, 5.0, 9.5);
    const tags = [
      tagsPool[i % tagsPool.length],
      tagsPool[(i * 2) % tagsPool.length],
      tagsPool[(i * 3) % tagsPool.length],
    ].filter((value, index, arr) => arr.indexOf(value) === index);

    result.push({
      slug,
      name,
      year,
      durationMin,
      rating: Number(rating.toFixed(1)),
      tags,
      synopsis: makeSynopsis(name, i),
      cover: makeCover(i),
    });
  }

  return result;
}

export const titles = buildTitles();

