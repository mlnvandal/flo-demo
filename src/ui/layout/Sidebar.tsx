import { FormEvent, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { collections } from "../../data/collections";
import { titles } from "../../data/titles";
import styles from "./sidebar.module.css";

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function Sidebar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const filteredTitles = useMemo(() => {
    const q = normalize(filter);
    if (!q) return titles;
    return titles.filter((t) => normalize(t.name).includes(q));
  }, [filter]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <Link to="/" className={styles.logo}>
          Fletflix
        </Link>
        <div className={styles.caption}>онлайн‑кинотеатр • {titles.length} релизов</div>
      </div>

      <form onSubmit={onSubmit} className={styles.search}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по релизам…"
          className={styles.searchInput}
        />
        <button className={styles.searchButton} type="submit">
          Найти
        </button>
      </form>

      <nav className={styles.nav}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Навигация</div>
          <NavLink to="/" end className={styles.navItem}>
            Главная
          </NavLink>
          <NavLink to="/search" className={styles.navItem}>
            Поиск
          </NavLink>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Подборки</div>
          {collections.map((c) => (
            <NavLink key={c.slug} to={`/collection/${c.slug}`} className={styles.navItem}>
              {c.name}
            </NavLink>
          ))}
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Релизы</div>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Фильтр списка…"
            className={styles.filterInput}
          />
          <div className={styles.titleList}>
            {filteredTitles.map((t) => (
              <NavLink key={t.slug} to={`/title/${t.slug}`} className={styles.titleItem}>
                {t.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
