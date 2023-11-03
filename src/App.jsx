import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/main/HomePage';
import Page404 from './pages/page_404/Page404';
import Header from '@/components/main/Header/Header';
import Footer from '@/components/main/Footer/Footer';
import PostersPage from './pages/PostersPage/PostersPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posters" element={<PostersPage/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
