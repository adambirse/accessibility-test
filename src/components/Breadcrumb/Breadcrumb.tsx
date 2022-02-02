import React from "react";

import styles from "./Breadcrumb.module.scss";

interface Props {
  links: Link[];
}

interface Link {
  href: string;
  label: string;
}

export const Breadcrumb: React.FC<Props> = ({ links }) => {
  return (
    <nav className={styles.BreadcrumbContainer} aria-label="Breadcrumb">
      <ol>
        {links.map((link, index) => {
          const isLastLink = index === links.length - 1;
          return (
            <li key={`breadcrumb-link-${index}`}>
              <a
                href={link.href}
                aria-current={isLastLink ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
