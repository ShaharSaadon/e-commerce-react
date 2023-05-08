import '../src/assets/styles/global.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader.jsx';
import { AppFooter } from './components/AppFooter.jsx';
import { HomePage } from './views/HomePage.jsx';
import { ProductIndex } from './views/ProductIndex.jsx';
import { ProductDetails } from './views/ProductDetails.jsx';
import { ProductEdit } from './views/ProductEdit.jsx';

function App() {
  return (
    <Router>
      <section className="App">
        <AppHeader />

        <main className="main-container">
          <Routes>
            {/* 
            <Route path="/user" element={<UserDetails />} />
          <Route path="/counter" element={<Counter />} /> */}
            <Route path="/product/edit/:id?" element={<ProductEdit />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shop" element={<ProductIndex />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <AppFooter />
      </section>
    </Router>
  );
}

export default App;
