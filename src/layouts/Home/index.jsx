import React from 'react'
import NavBar from '../../components/Navbar'
import HotLinks from '../../components/HotLinks'
import HeroSection from './HeroSection'
import QualityTags from '../../components/qualityTags'
import FeaturedProducts from './FeaturedProducts'
import About from './About'
import Footer from '../../components/Footer'
import ProductBanner from './ProductBanner'

const Home = () => {
  return (
    <>
        <NavBar />
        <HotLinks />
        <HeroSection />
        <QualityTags />
        <FeaturedProducts />
        <ProductBanner />
        <FeaturedProducts />
        <About />
        <Footer />
    </>
  )
}

export default Home