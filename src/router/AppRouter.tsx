import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout } from "../ui/layout/RootLayout";
import { HomePage } from "../ui/pages/HomePage";
import { SearchPage } from "../ui/pages/SearchPage";
import { titles } from "../data/titles";
import { TitlePage } from "../ui/pages/TitlePage";
import { CollectionPage } from "../ui/pages/CollectionPage";
import { NotFoundPage } from "../ui/pages/NotFoundPage";

const base = import.meta.env.BASE_URL;

export function AppRouter() {
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="collection/:slug" element={<CollectionPage />} />
          {titles.map((title) => (
            <Route
              key={title.slug}
              path={`title/${title.slug}`}
              element={<TitlePage title={title} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

