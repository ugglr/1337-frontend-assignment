import React, { ReactNode } from "react";

import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>The fellowship of tretton37</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
