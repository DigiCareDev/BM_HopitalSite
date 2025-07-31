import { useState } from 'react';
import Footer from "./components/Footer";
import Secnav from './components/secNav';
import Homeblog from '@/pages/components/home/homeBlog';
import Treatment from "../pages/components/home/treatment";
import Specialities from "../pages/components/home/specialities";
import Hero from "../pages/components/home/hero";
import Whychoose from "./components/home/whychoose";
import Modelcare from "./components/home/modelcare";
import BackToTop from "./components/BackToTopButton"
import Subnav from "./components/subnav";
import Navbar from './components/home/navbar'


export default function Welcome() {
    const [translations, setTranslations] = useState({});

    const handletranslate =(data)=> {
        setTranslations(data);
    }

    return (
        <>
            <div className="bg-white">

                <BackToTop/>
                <Subnav onTranslations={handletranslate}/>
                <Navbar translations={translations}/>
                <Secnav translations={translations} />
                {/* hero */}
                <Hero translations={translations} />
                {/* header */}
                <Specialities translations={translations} />
                {/* treatment */}
                <Treatment translations={translations} />
                {/* Why Choose  */}
                <Whychoose translations={translations} />
                {/* Model Section */}
                <Modelcare translations={translations} />
                {/* Blog Section */}
                <Homeblog translations={translations} />
                <Footer translations={translations} />
            </div>
        </>
    );
}


