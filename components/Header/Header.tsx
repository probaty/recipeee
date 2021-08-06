import styles from "./Header.module.css";
import { useState } from "react";
import { Menu } from "../Menu/Menu";

interface HeaderProps {
  userName: string;
}

export function Header({ userName }: HeaderProps): JSX.Element {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
  const [closeState, setCloseState] = useState<boolean>(false);
  const closeMenu = (): void => {
    setCloseState(true);
    setTimeout(() => {
      setMenuVisibility(false);
    }, 100);
  };
  const openMenu = (): void => {
    setCloseState(false);
    setMenuVisibility(true);
  };
  return (
    <header className={styles.header}>
      <p>Reacipeee</p>
      <button className={styles.menu} onClick={openMenu}>
        <i
          className="fas fa-ellipsis-v transition-all"
          style={{
            transform: menuVisibility ? "rotate(90deg)" : "",
          }}
        ></i>
      </button>
      {menuVisibility && (
        <Menu
          userName={userName}
          changeVisibility={closeMenu}
          closing={closeState}
        />
      )}
    </header>
  );
}
