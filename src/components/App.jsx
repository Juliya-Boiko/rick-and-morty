import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { Loader } from './Loader/Loader';

const SharedLayout = lazy(() => import('../layouts/SharedLayout'));
const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
const CharacterPage = lazy(() => import('../pages/CharacterPage/CharacterPage'));

export const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="character/:id" element={<CharacterPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};