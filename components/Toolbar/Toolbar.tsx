import { FunctionComponent } from "react";
import { ToolbarButton } from "../ToolbarButton/ToolbarButton";
import styles from "./Toolbar.module.css";

export const Toolbar: FunctionComponent = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.wrap}>
        <ToolbarButton href="/" icon="fas fa-home">
          Главная
        </ToolbarButton>
        <ToolbarButton href="/" icon="fas fa-home">
          Главная
        </ToolbarButton>
      </div>
    </div>
  );
};
