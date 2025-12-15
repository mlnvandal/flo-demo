import { Link } from "react-router-dom";
import type { Title } from "../../data/types";
import styles from "./title.module.css";

export function TitlePage({ title }: { title: Title }) {
  return (
    <div className={styles.page}>
      <header
        className={styles.header}
        style={{
          background: `linear-gradient(135deg, ${title.cover.gradientFrom}, ${title.cover.gradientTo})`,
        }}
      >
        <div className={styles.headerInner}>
          <div className={styles.kicker}>Fletflix • релиз</div>
          <h1 className={styles.title}>{title.name}</h1>
          <div className={styles.meta}>
            <span>{title.year}</span>
            <span>•</span>
            <span>{title.durationMin} мин</span>
            <span>•</span>
            <span>Рейтинг {title.rating}</span>
          </div>
          <p className={styles.synopsis}>{title.synopsis}</p>
          <div className={styles.actions}>
            <button className={styles.primary}>Смотреть трейлер</button>
            <button className={styles.secondary}>Добавить в “Моё”</button>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>О релизе</div>
          <div className={styles.rows}>
            <div className={styles.row}>
              <div className={styles.label}>Жанры</div>
              <div className={styles.value}>{title.tags.join(" • ")}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.label}>Качество</div>
              <div className={styles.value}>4K • HDR • Dolby (demo)</div>
            </div>
            <div className={styles.row}>
              <div className={styles.label}>Язык</div>
              <div className={styles.value}>RU/EN (demo)</div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Похожие</div>
          <div className={styles.hint}>
            Откройте любую другую страницу из списка слева или через{" "}
            <Link to="/search">поиск</Link>.
          </div>
        </div>
      </section>
    </div>
  );
}

