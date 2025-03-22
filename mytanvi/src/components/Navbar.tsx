import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} /> {/* Logo */}
      <span className={styles.logo}></span>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
