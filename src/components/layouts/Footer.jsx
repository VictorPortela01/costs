import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.social_list.li}>
          <FaFacebook />
        </li>
        <li className={styles.social_list.li}>
          <FaInstagram />
        </li>
        <li className={styles.social_list.li}>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span className={styles.copy_right.span}>Costs </span>&copy;2025
      </p>
    </footer>
  );
};

export default Footer;
