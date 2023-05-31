import '../src/assets/styles/global.scss';
// import 'react-toastify/dist/ReactToastify.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AdminPanel } from './views/AdminPanel';
import { AppHeader } from './components/AppHeader.jsx';
import { AppFooter } from './components/AppFooter.jsx';
import { HomePage } from './views/HomePage.jsx';
import { ProductDetails } from './views/ProductDetails.jsx';
import { ProductEdit } from './views/ProductEdit.jsx';
import { ShoppingCartCmp } from './components/ShoppingCart/ShoppingCart.jsx';
import { Signup } from './views/Signup.jsx';
import { Login } from './views/Login.jsx';
import { UserProfile } from './views/UserProfile.jsx';
import { AboutPage } from './views/AboutPage.jsx';
import { ContactPage } from './views/ContactPage.jsx';
import { DynamicProducts } from './views/DynamicProducts';
import { ShoppingCartPage } from './views/ShoppingCartPage.jsx';
import { BlogArticle } from './views/BlogArticle.jsx';
import { ScrollToTop } from './components/ScrollToTop';
import { Blog } from './views/Blog.jsx';

// import { ToastContainer } from 'react-toastify';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <Router>
      {isCartVisible ? (
        <ShoppingCartCmp setIsCartVisible={setIsCartVisible} />
      ) : (
        ''
      )}
      <section className="main-container">
        <ScrollToTop />
        <AppHeader />
        <Routes className="main-app">
          <Route path="/product/edit/:id?" element={<ProductEdit />} />
          <Route
            path="/product/:id"
            element={<ProductDetails setIsCartVisible={setIsCartVisible} />}
          />
          <Route
            path="/:category"
            element={<DynamicProducts setIsCartVisible={setIsCartVisible} />}
          />
          <Route path="/admin-panel/*" element={<AdminPanel />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:article" element={<BlogArticle />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/"
            element={<HomePage />}
            setIsCartVisible={setIsCartVisible}
          />
        </Routes>

        <AppFooter />
      </section>
    </Router>
  );
}

export default App;
