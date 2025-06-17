import Hero from "../../components/home/hero/Hero";
import CTA from "../../components/home/CTA/CTA";
import News from "../../components/home/news/News";
import Services from "../../components/home/services/Services";
import AboutUs from "../../components/home/aboutUs/AboutUs";
import Products from "../../components/home/products/Products";
import Projects from "../../components/home/projects/Projects";
import Logotypes from "../../components/home/logotypes/Logotypes";

function Home() {
    return (
        <div>
            <Hero />
            <CTA />
            <News />
            <Services />
            <AboutUs />
            <Products />
            <Projects />
            <Logotypes />
        </div>
    )
}

export default Home