import styles from "../components/Footer.module.css";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../data";
import profileLogo from "../images/joyce-logo-white.png";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer--container"]}>
        <ul className={styles["footer--icons--container"]}>
          {socialLinks.map((link) => {
            return (
              <SocialLinks
                key={link.id}
                {...link}
                itemClass={styles["footer--icon"]}
              />
            );
          })}
        </ul>
        <p>
          Project was bulit by{" "}
          <a
            href="https://github.com/Joycey83"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={profileLogo}
              alt="personal Profile Logo"
              className={styles["profile--logo"]}
            />
          </a>
        </p>
        <p className={styles.copyright}>
          copyright &copy; Dictionaryopedia App
          <span className={styles["copyright--year"]}>
            {new Date().getFullYear()}
          </span>{" "}
          All rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
