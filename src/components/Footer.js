import styles from "../components/Footer.module.css";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer--container"]}>
        <ul className={styles["footer--icons"]}>
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
      </footer>
    </>
  );
};
export default Footer;
