import classNames from "classnames";
import Link from "next/link";
import styles from "./MenuButton.module.css";

interface MenuButton {
  href: string;
  content: string;
  icon: string;
}

export function MenuButton({ href, content, icon }: MenuButton) {
  return (
    <Link href={href} passHref>
      <div className={styles.link}>
        <i className={classNames(icon, styles.icon)}></i>
        <p>{content}</p>
      </div>
    </Link>
  );
}
