import React from "react";

import styles from './Breadcrumb.module.scss';


export const Breadcrumb: React.FC = () => {
  return (
    <nav className={styles.BreadcrumbContainer}>
      <ol>
        <li>
          <a href="">Link 1</a>
        </li>
        <li>
          <a href="">Link 2</a>
        </li>
        <li>
          <a href="">Link 3</a>
        </li>
      </ol>
    </nav>
  );
};
