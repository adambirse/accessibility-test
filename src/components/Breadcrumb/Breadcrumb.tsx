import React from "react";

import styles from './Breadcrumb.module.scss';

interface Props {
    links: Link[];
  }

  interface Link {
    href: string,
    label: string
  }


export const Breadcrumb: React.FC<Props> = ({links}) => {
  return (
    <nav className={styles.BreadcrumbContainer}>
    <ol>
      {links.map((link) => (
        <li>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ol>
  </nav>
  );
};
