import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles/App.module.css';

function App() {
  return (
    <>
      <div>
        <header>
          <h1 className={styles.heading}>BOOKS MANAGEMENT SYSTEM</h1>

          <nav className={styles.navlist}>
            <NavLink to="/" className={({isActive})=> isActive ? styles.activeLink : styles.link}>Home</NavLink>
            <NavLink to="/add" className={({isActive})=> isActive ? styles.activeLink : styles.link}>Add Book</NavLink>
          </nav>
        </header>
        <Outlet/>
      </div>
    </>
  )
}

export default App

