import AuthPage from "@/pages/AuthPage";
import ComicsListPage from "@/pages/lists/ComicsListPage";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import ProfilePage from "@/pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import ComicPage from "@/pages/ComicPage";
import ComicFormPage from "@/pages/forms/ComicFormPage";
import CollectionFormPage from "@/pages/forms/CollectionFormPage";
import CollectionsListPage from "@/pages/lists/CollectionsListPage";
import CollectionPage from "@/pages/CollectionPage";
import FavoritePage from "@/pages/FavoritePage";
import TrophyPage from "@/pages/TrophyPage";

const RouterApp = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage register />} />
      <Route path="/home" element={<HomePage />} />
      {/* PRIVATE */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/comics-list" element={<ComicsListPage />} />
      <Route path="/comic/:id" element={<ComicPage />} />
      <Route path="/collections-list" element={<CollectionsListPage />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="/fav" element={<FavoritePage />} />
      <Route path="/trophy" element={<TrophyPage />} />
      {/* FORM */}
      <Route path="/comic-form" element={<ComicFormPage />} />
      <Route path="/collection-form" element={<CollectionFormPage />} />
      {/* ... */}
      <Route path="/*" element={<PageNotFound />} />
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;
