import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetails from "./pages/ServiceDetail.tsx";
import { ThemeProvider } from './context/ThemeContext';
import Prices from "./pages/Prices.tsx";
import Footer from "./components/Footer.tsx";
import useScrollToTop from "./hooks/useScrollToTop.ts";

function AnimatedRoutes() {
    const location = useLocation();
    useScrollToTop();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/prices" element={<Prices />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
                    <Navbar />
                    <main className="flex-1">
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;