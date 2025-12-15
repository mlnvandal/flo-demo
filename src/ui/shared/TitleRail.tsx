import { Link } from "react-router-dom";
import type { Collection, Title } from "../../data/types";
import { titles } from "../../data/titles";
import { TitleCard } from "./TitleCard";
import styles from "./titleRail.module.css";

export function TitleRail({ collection }: { collection: Collection }) {
  const index = new Map(titles.map((t) => [t.slug, t] as const));
  const items = collection.titleSlugs
    .map((s) => index.get(s))
    .filter((t): t is Title => Boolean(t));

  return (
    <section className={styles.rail}>
      <div className={styles.head}>
        <div>
          <h2 className={styles.title}>{collection.name}</h2>
          <div className={styles.caption}>{collection.description}</div>
        </div>
        <Link className={styles.more} to={`/collection/${collection.slug}`}>
          Смотреть все
        </Link>
      </div>

      <div className={styles.row}>
        {items.map((t) => (
          <div key={t.slug} className={styles.item}>
            <TitleCard title={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
