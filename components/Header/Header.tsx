import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "../Menu/Menu";

interface HeaderProps {
  userName: string;
}

export function Header({ userName }: HeaderProps): JSX.Element {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
  const [closeState, setCloseState] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <p>Reacipeee</p>
      <button
        className={styles.menu}
        onClick={() => setMenuVisibility(!menuVisibility)}
      >
        <i
          className="fas fa-ellipsis-h transition-all"
          style={{
            transform: menuVisibility ? "rotate(90deg)" : "",
          }}
        ></i>
      </button>
      {menuVisibility && (
        <Menu
          userName={userName}
          changeVisibility={setMenuVisibility}
          closing={closeState}
        />
      )}
    </header>
  );
}
