import { Link } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        ZenTech TT
      </Link>

      <nav className={css.navigation}>
        <Link to="/login" className={css.navLinks}></Link>
        <Link to="/register" className={css.navLinks}></Link>
      </nav>
    </header>
  )
}