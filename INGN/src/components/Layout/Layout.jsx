import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

function Layout() {
    const navItems = [
        { path: "/", name: 'Alle' },
        { path: "/indland", name: 'Indland' },
        { path: "/udland", name: 'Udland' },
        { path: "/teknologi", name: 'Teknologi' },
        { path: "/sport", name: 'Sport' },
        { path: "/politik", name: 'Politik' },
        { path: "/samfund", name: 'Samfund' }
    ];

    return (
        <div>
            <Nav items={navItems} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;