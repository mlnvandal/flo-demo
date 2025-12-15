import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { collections } from "../../data/collections";
import { titles } from "../../data/titles";
import { TitleGrid } from "../shared/TitleGrid";
import styles from "./page.module.css";

export function CollectionPage() {
  const params = useParams();
  const slug = params.slug ?? "";

  const collection = useMemo(() => collections.find((c) => c.slug === slug), [slug]);
  const collectionTitles = useMemo(() => {
    if (!collection) return [];
    const index = new Map(titles.map((t) => [t.slug, t] as const));
    return collection.titleSlugs
      .map((s) => index.get(s))
      .filter((t): t is Title => Boolean(t));
  }, [collection]);

  if (!collection) {
    return (
      <div className={styles.page}>
        <h1 className={styles.h1}>Подборка не найдена</h1>
        <div className={styles.subtle}>Проверьте ссылку в сайдбаре.</div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>{collection.name}</h1>
      <div className={styles.subtle}>{collection.description}</div>
      <TitleGrid titles={collectionTitles} />
    </div>
  );
}
import type { Title } from "../../data/types";
