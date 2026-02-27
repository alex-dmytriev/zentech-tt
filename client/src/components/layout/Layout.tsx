import { Outlet } from 'react-router-dom';
import Header from './Header';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={css.mainLayout}>
        <Outlet />
      </main>
    </>
  )
}