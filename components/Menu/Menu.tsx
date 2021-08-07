import styles from "./Menu.module.css";
import cn from "classnames";
import { MenuButton } from "../Header/MenuButton/MenuButton";

interface MenuProps {
  userName: string;
  changeVisibility: any;
  closing: boolean;
}

export function Menu({
  userName,
  changeVisibility,
  closing,
}: MenuProps): JSX.Element {
  return (
    <>
      <div
        className={cn(
          "w-screen h-screen fixed top-0 left-0",
          styles.overlayOpen,
          {
            [styles.overlayClose]: closing === true,
          }
        )}
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          changeVisibility(false);
        }}
      ></div>
      <div
        className={cn(styles.menu, { [styles.menuClose]: closing === true })}
        // className={`${styles.menu} ${closing ? styles.menuClose : ""}`}
      >
        <div className={styles.close}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeVisibility(false);
            }}
          >
            <i className="fas fa-times text-3xl"></i>
          </button>
        </div>

        <div className={styles.user}>
          <div className={styles.imageField}>
            <i className="fas fa-user"></i>
          </div>
          <div className={styles.userName}>{userName}</div>
        </div>
        <div className={styles.links}>
          <MenuButton
            href="/"
            content="Мои рецепты"
            icon="fas fa-pizza-slice"
          />
          <MenuButton
            href="/add"
            content="Добавить рецепт"
            icon="fas fa-plus"
          />
          <MenuButton href="/" content="Избранное" icon="fas fa-heart" />
        </div>
        <div className={styles.logout}>
          <MenuButton href="/" content="Выйти" icon="fas fa-sign-out-alt" />
        </div>
      </div>
    </>
  );
}
