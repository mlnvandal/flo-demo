import { Link } from "react-router-dom";
import type { Title } from "../../data/types";
import styles from "./titleCard.module.css";

export function TitleCard({ title }: { title: Title }) {
  return (
    <Link to={`/title/${title.slug}`} className={styles.card}>
      <div
        className={styles.cover}
        style={{
          background: `linear-gradient(135deg, ${title.cover.gradientFrom}, ${title.cover.gradientTo})`,
        }}
      >
        <div className={styles.coverShade} />
        <div className={styles.coverTitle}>{title.name}</div>
      </div>
      <div className={styles.meta}>
        <span>{title.year}</span>
        <span>•</span>
        <span>{title.durationMin} мин</span>
        <span>•</span>
        <span>{title.rating}</span>
      </div>
    </Link>
  );
}

