import type { Title } from "../../data/types";
import { TitleCard } from "./TitleCard";
import styles from "./titleGrid.module.css";

export function TitleGrid({ titles }: { titles: Title[] }) {
  return (
    <div className={styles.grid}>
      {titles.map((t) => (
        <TitleCard key={t.slug} title={t} />
      ))}
    </div>
  );
}

