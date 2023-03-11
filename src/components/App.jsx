import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { Loader } from './Loader/Loader';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = lazy(() => import('../layouts/SharedLayout'));
const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
const CharacterPage = lazy(() => import('../pages/CharacterPage/CharacterPage'));

export const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="character/:id" element={<CharacterPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};