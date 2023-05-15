import '../src/assets/styles/global.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader.jsx';
import { AppFooter } from './components/AppFooter.jsx';
import { HomePage } from './views/HomePage.jsx';
import { ProductIndex } from './views/ProductIndex.jsx';
import { ProductDetails } from './views/ProductDetails.jsx';
import { ProductEdit } from './views/ProductEdit.jsx';
import { ShoppingCart } from './views/ShoppingCart.jsx';
import { Signup } from './views/Signup.jsx';
import { Login } from './views/Login.jsx';
import { UserProfile } from './views/UserProfile.jsx';
import { AboutPage } from './views/AboutPage.jsx';
import { ContactPage } from './views/ContactPage.jsx';
import { DynamicProducts } from './views/DynamicProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './views/AdminPanel';

function App() {
  return (
    <Router>
      <section className="main-container">
        <AppHeader />
        <ToastContainer />
        <Routes>
          <Route path="/product/edit/:id?" element={<ProductEdit />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/:category/:subCategory" element={<DynamicProducts />} />
          <Route path="/:category" element={<DynamicProducts />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/shop" element={<ProductIndex />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <AppFooter />
      </section>
    </Router>
  );
}

export default App;
