import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import CartPopup from './components/CartPopup';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import WorkProcess from './components/WorkProcess';
import CustomerSuggestions from './components/CustomerSuggestions';
import ChargingStations from './components/ChargingStations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import CareersPage from './pages/CareersPage';
import ServicesPage from './pages/ServicesPage';
import SingleProductPage from './pages/SingleProductPage';
import Layout from './components/Layout';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ProductDetailPageProps {
  addToCart: (product: Product) => void;
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Header toggleCart={toggleCart} cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
        <CartPopup 
          isOpen={cartOpen} 
          onClose={toggleCart}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
        <main>
          <Layout>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <VideoSection />
                  <AboutSection />
                  <ServicesGrid />
                  <WorkProcess />
                  <CustomerSuggestions />
                  <ProductPage addToCart={addToCart} />
                  <ChargingStations />
                </>
              } />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
              <Route path="/products/:id" element={<SingleProductPage addToCart={addToCart} />} />
              <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage addToCart={addToCart} />} />
            </Routes>
          </Layout>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
