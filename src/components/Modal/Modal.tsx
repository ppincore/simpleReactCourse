import clsx from "clsx";
import React, { ReactNode, SyntheticEvent } from "react";
import style from "./Modal.module.scss";

type TModalProps = {
  children: ReactNode;
  visible: boolean;
  setVisible: (state: boolean) => void;
};

const Modal = (props: TModalProps) => {
  const { children, visible, setVisible } = props;

  const modalVisible = clsx({
    [style.modal]: true,
    [style.active]: visible,
  });

  return (
    <div className={modalVisible} onClick={() => setVisible(false)}>
      <div
        className={style.modalContent}
        onClick={(e: SyntheticEvent) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
