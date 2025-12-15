import { Link } from "react-router-dom";
import styles from "./page.module.css";

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.h1}>404</h1>
      <div className={styles.subtle}>Страница не найдена.</div>
      <div className={styles.empty}>
        Вернуться на <Link to="/">главную</Link>.
      </div>
    </div>
  );
}

