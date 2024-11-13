
import React, { Suspense, useEffect, useState } from 'react';
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
  const [isHovered2, setIsHovered2] = useState(false);
  const [searchdiv,setsearchdiv]= useState(false)
  useEffect(()=>{
    if (searchdiv) {
        document.body.style.overflow = "hidden";
        console.log('hidden');
    }else{
        document.body.style.overflow = "auto";
    }
        },[isHovered2,searchdiv])
  return (
   <div style={{overflow:"hidden"}}>
   <Header isHovered2={isHovered2} setIsHovered2={setIsHovered2} searchdiv={searchdiv} setsearchdiv={setsearchdiv}></Header>
   <ProductCategory></ProductCategory>
   <Topselling></Topselling>
   <Suspense fallback={<div>Loading...</div>}>
   <AdBanner></AdBanner>
    </Suspense>
  
   <NewArrival></NewArrival>
   <FlashSale></FlashSale>
   <BrandsSection></BrandsSection>
   <ProductShowcase></ProductShowcase>
   <Gallery></Gallery>
   <Reviews></Reviews>
   <Footer></Footer>
   </div>
  );
}

export default App;
