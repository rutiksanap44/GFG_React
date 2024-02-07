import { Fragment } from "react";
import { Backdrop } from "./Loader";
import ReactDom from "react-dom";

const Modal = ({onClose,children}) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <Backdrop />
          <div className="modal">
          {children}
          <button type="close" onClick={onClose}>X</button>
          </div>
        </Fragment>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
