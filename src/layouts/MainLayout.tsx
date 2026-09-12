// src/layouts/MainLayout.tsx
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    const navRef = useRef<HTMLElement>(null);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const node = navRef.current;
        if (!node) return;

        const observer = new ResizeObserver((entries) => {
            setNavHeight(entries[0].contentRect.height);
        });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar ref={navRef} />
            <div style={{ paddingTop: navHeight }}>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;