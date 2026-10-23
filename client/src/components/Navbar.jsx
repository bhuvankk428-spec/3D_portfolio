import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    const location = useLocation();

    return (
        <motion.nav 
            className="navbar-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="nav-brand">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Bhuvan K K
                    </motion.div>
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                </Link>
                <Link to="/project" className={`nav-link ${location.pathname === '/project' ? 'active' : ''}`}>
                    Projects
                </Link>
                <Link to="/exprience" className={`nav-link ${location.pathname === '/exprience' ? 'active' : ''}`}>
                    Experience
                </Link>
                <Link to="/edu" className={`nav-link ${location.pathname === '/edu' ? 'active' : ''}`}>
                    Education
                </Link>
                <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                    Contact
                </Link>
            </div>
        </motion.nav>
    );
}
