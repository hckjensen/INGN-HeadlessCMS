
import styles from './Nav.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ items }) => {





    return (
        <>
            <nav className={styles.navbar}>
                <h1>INGN</h1>
                <ul >
                    {items.map(item => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <p>ICONS</p>
            </nav>
        </>
    )
}

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Nav