import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { titles } from "../../data/titles";
import { TitleGrid } from "../shared/TitleGrid";
import styles from "./page.module.css";

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";

  const results = useMemo(() => {
    const query = normalize(q);
    if (!query) return [];
    return titles.filter((t) => normalize(t.name).includes(query));
  }, [q]);

  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>Поиск</h1>
      <div className={styles.subtle}>
        Введите запрос в сайдбаре или добавьте <code>?q=</code> в URL.
      </div>

      {!q ? (
        <div className={styles.empty}>
          Нет запроса. Попробуйте, например: <Link to="/search?q=тихая">тихая</Link>.
        </div>
      ) : results.length === 0 ? (
        <div className={styles.empty}>По запросу “{q}” ничего не найдено.</div>
      ) : (
        <>
          <div className={styles.subtle}>
            Найдено: {results.length}
          </div>
          <TitleGrid titles={results} />
        </>
      )}
    </div>
  );
}

