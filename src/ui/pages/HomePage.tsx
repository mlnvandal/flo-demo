import { collections } from "../../data/collections";
import { titles } from "../../data/titles";
import { TitleRail } from "../shared/TitleRail";
import styles from "./page.module.css";
import { Link } from "react-router-dom";

export function HomePage() {
  const hero = titles[0];

  return (
    <div className={styles.page}>
      <section className={styles.hero} style={{ background: `linear-gradient(135deg, ${hero.cover.gradientFrom}, ${hero.cover.gradientTo})` }}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Fletflix Original</div>
          <h1 className={styles.heroTitle}>{hero.name}</h1>
          <div className={styles.heroMeta}>
            <span>{hero.year}</span>
            <span>•</span>
            <span>{hero.durationMin} мин</span>
            <span>•</span>
            <span>Рейтинг {hero.rating}</span>
          </div>
          <p className={styles.heroText}>{hero.synopsis}</p>
          <Link className={styles.heroCta} to={`/title/${hero.slug}`}>
            Смотреть страницу релиза
          </Link>
        </div>
      </section>

      {collections.map((c) => (
        <TitleRail key={c.slug} collection={c} />
      ))}
    </div>
  );
}
