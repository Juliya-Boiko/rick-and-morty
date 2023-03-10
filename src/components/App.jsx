import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "layouts/SharedLayout";
import { HomePage } from "pages/Homepage";
import { CharacterPage } from "pages/CharacterPage";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route index path="character" element={<CharacterPage />} />
      </Route>
    </Routes>
  )
};