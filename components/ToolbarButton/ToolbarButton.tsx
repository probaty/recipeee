import { FunctionComponent } from "react";
import styles from "./ToolbarButton.module.css";
import Link from "next/link";

interface ToolbarButtonProps {
  href: string;
  icon: string;
}

export const ToolbarButton: FunctionComponent<ToolbarButtonProps> = ({
  href,
  icon,
  children,
}): JSX.Element => {
  return (
    <div className={styles.button}>
      <Link href={href} passHref>
        <div className={styles.buttonContent}>
          <i className={icon}></i>
          <p className={styles.text}>{children}</p>
        </div>
      </Link>
    </div>
  );
};
