import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ItemPage } from './pages/ItemPage';
import { ErrorPage } from './pages/ErrorPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/items/:id" element={<ItemPage />} />
      <Route path="/error_page" element={<ErrorPage />} />
    </Routes>
  );
};
