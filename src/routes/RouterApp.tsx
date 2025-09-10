import AuthPage from "@/pages/AuthPage";
import ComicsListPage from "@/pages/ComicsListPage";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import ProfilePage from "@/pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import ComicPage from "@/pages/ComicViewPage";
import ComicFormPage from "@/pages/forms/ComicFormPage";
import CollectionFormPage from "@/pages/forms/CollectionFormPage";
import CollectionsPage from "@/pages/CollectionsPage";

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
      <Route path="/collections" element={<CollectionsPage />} />
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
