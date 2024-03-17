import styles from "@/styles/Socials.module.scss";
import { socialType } from "@/types";
import { FC } from "react";

type SocialsProps = {
  socials: [socialType];
};

const Socials: FC<SocialsProps> = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <>
      <ul className={styles.socials}>
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;
