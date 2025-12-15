import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import styles from "./layout.module.css";

export function RootLayout() {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

