import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";
import ProfilePage from "@/pages/ProfilePage";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage register />} />
      <Route path="/home" element={<HomePage />} />
      {/* PRIVATE */}
      <Route path="/profile" element={<ProfilePage />} />
      {/* ... */}
      <Route path="/*" element={<PageNotFound />} />
      {/* TEST */}
    </Routes>
  );
};

export default RouterApp;
