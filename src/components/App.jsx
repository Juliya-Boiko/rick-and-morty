import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'hocs/PublicRoute';
import { PrivateRoute } from 'hocs/PrivateRoute';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = lazy(() => import('../layouts/SharedLayout'));
const HomePage = lazy(() => import('../pages/Homepage/Homepage'));
const CharacterPage = lazy(() => import('../pages/CharacterPage/CharacterPage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));

export const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="top-center" autoClose={5000}  hideProgressBar={false}
        newestOnTop={false}  rtl={false} closeOnClick
        pauseOnFocusLoss draggable pauseOnHover theme="colored"
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="character/:id" element={<PrivateRoute><CharacterPage /></PrivateRoute>} />
          <Route path="auth" element={<PublicRoute restricted><AuthPage /></PublicRoute>} />
          <Route path="*" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        </Route>
      </Routes>
    </Suspense>
  )
};