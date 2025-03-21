import { Link } from "react-router-dom";

import Container from "./Container.jsx";

import styles from "./Navbar.module.css";
import Logo from "../../image/costs_logo.png";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Container>
          <Link to="/">
            <img src={Logo} alt="Costs" />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/projects">Projetos</Link>
            </li>
            <li className={styles.item}>
              <Link to="/company">Empresa</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
