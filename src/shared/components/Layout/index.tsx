import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './Layout.module.css';
import Logo from '@images/NYtimes-logo.png';

const Layout: FC = () => {
  return (
    <div className={`${styles.layout}`}>
      <header className={`${styles.navbar}`}>
        <div className={`${styles.navbarLeft}`}>
          <img src={Logo} width={300} />
        </div>
        <ul className={`${styles.navbarRight}`}>
          <Link to='/' className={`${styles.navLink}`}>
            Home
          </Link>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={`${styles.footer}`}>
        © {new Date().getFullYear()} NY Times App
      </footer>
    </div>
  );
};

export default Layout;
