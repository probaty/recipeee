import styles from "./Header.module.css";

interface HeaderProps {
  userName: string;
  userImg?: string;
}

export function Header({ userName, userImg = "/user.svg" }: HeaderProps) {
  return (
    <header className={styles.header}>
      <p>Reacipeee</p>
    </header>
  );
}
