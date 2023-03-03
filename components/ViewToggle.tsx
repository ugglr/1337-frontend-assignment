import React from "react";
import { FiGrid, FiList } from "react-icons/fi";

import styles from "./ViewToggle.module.css";
import { cx } from "@/lib/cx";

type Props = {
  currentView: "list" | "grid";
  onToggle: (type: "list" | "grid") => void;
};
const ViewToggle: React.FC<Props> = ({ onToggle, currentView }) => {
  return (
    <div className={styles.container}>
      <FiGrid
        className={cx([
          styles.icons,
          currentView === "grid" && styles.iconsActive,
        ])}
        onClick={() => onToggle("grid")}
      />
      <div className={styles.divider} />
      <FiList
        className={cx([
          styles.icons,
          currentView === "list" && styles.iconsActive,
        ])}
        onClick={() => onToggle("list")}
      />
    </div>
  );
};

export default ViewToggle;
