import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

interface Props {
  visible: boolean;
  toggle: () => void;
}

export const Modal: React.FC<Props> = ({ visible, toggle, children }) => {
  return visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div
            id="modal"
            className={styles.modalPop}
            role="alert"
            arial-label="my label"
          >
            {children}
            <button type="button" onClick={toggle}>
              Close
            </button>
          </div>
          <div className={styles.modalOverlay}></div>
        </div>,
        document.body
      )
    : null;
};
