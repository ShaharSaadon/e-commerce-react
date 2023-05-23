import '../src/assets/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './views/AdminPanel';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader.jsx';
import { AppFooter } from './components/AppFooter.jsx';
import { HomePage } from './views/HomePage.jsx';
import { ProductDetails } from './views/ProductDetails.jsx';
import { ProductEdit } from './views/ProductEdit.jsx';
import { ShoppingCartCmp } from './components/ShoppingCart.jsx';
import { Signup } from './views/Signup.jsx';
import { Login } from './views/Login.jsx';
import { UserProfile } from './views/UserProfile.jsx';
import { AboutPage } from './views/AboutPage.jsx';
import { ContactPage } from './views/ContactPage.jsx';
import { DynamicProducts } from './views/DynamicProducts';
import { ToastContainer } from 'react-toastify';
import { ShoppingCartPage } from './views/ShoppingCartPage.jsx';
import { UserTable } from './components/UserTable';
import { OrdersTable } from './components/OrdersTable';
import { BlogArticle } from './views/BlogArticle.jsx';
import { useEffect, useState } from 'react';
import { Blog } from './views/Blog.jsx';
function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  useEffect(() => {
    console.log('isCartVisible:', isCartVisible);
  }, [isCartVisible]);

  return (
    <Router>
      {isCartVisible ? (
        <ShoppingCartCmp setIsCartVisible={setIsCartVisible} />
      ) : (
        ''
      )}
      <section className="main-container">
        <AppHeader />
        <ToastContainer />
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
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin-panel/orders" element={<OrdersTable />} />
          <Route path="/admin-panel/users" element={<UserTable />} />
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
