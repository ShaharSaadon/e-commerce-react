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

function App() {
  return (
    <Router>
      <section className="main-container">
        <AppHeader />

        <main className="main-content">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/edit/:id?" element={<ProductEdit />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/shop" element={<ProductIndex />} />
            <Route
              path="/linen"
              element={<DynamicProducts category="linen" />}
            />
            <Route
              path="/pillows"
              element={<DynamicProducts category="pillows" />}
            />
            <Route
              path="/blankets"
              element={<DynamicProducts category="blankets" />}
            />
            <Route
              path="/towels"
              element={<DynamicProducts category="towels" />}
            />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <AppFooter />
      </section>
    </Router>
  );
}

export default App;
