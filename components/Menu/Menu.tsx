import styles from "./Menu.module.css";
import cn from "classnames";

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
        className={cn(styles.overlay, {
          [styles.overlayClose]: closing === true,
        })}
        onClick={(e) => {
          e.stopPropagation();
          changeVisibility(false);
        }}
      ></div>
      <div
        className={cn(styles.menu, { [styles.menuClose]: closing === true })}
      >
        <div className={styles.close}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeVisibility(false);
            }}
            className={styles.button}
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
      </div>
    </>
  );
}
