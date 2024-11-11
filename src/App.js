
import React from 'react';
import './App.css';
// import AdBanner from './components/AdBanner';
import BrandsSection from './components/BrandsSection';
import FlashSale from './components/FlashSale';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import NewArrival from './components/NewArrival';
import ProductCategory from './components/ProductCategory';
import ProductShowcase from './components/ProductShowcase';
import Reviews from './components/reviews';
import Topselling from './components/Topselling';
const AdBanner= React.lazy(() => import('./components/AdBanner'))
function App() {
  return (
   <>
   <Header></Header>
   <ProductCategory></ProductCategory>
   <Topselling></Topselling>
   <AdBanner></AdBanner>
   <NewArrival></NewArrival>
   <FlashSale></FlashSale>
   <BrandsSection></BrandsSection>
   <ProductShowcase></ProductShowcase>
   <Gallery></Gallery>
   <Reviews></Reviews>
   <Footer></Footer>
   </>
  );
}

export default App;
