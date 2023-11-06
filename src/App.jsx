import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/main/HomePage';
import Page404 from './pages/page_404/Page404';
import Contacts from './pages/contacts/Contacts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<HomePage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
