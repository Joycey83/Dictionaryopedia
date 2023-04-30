import styles from "../components/Footer.module.css";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../data";

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
