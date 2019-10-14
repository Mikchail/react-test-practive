import React from 'react';

import MyPortal from './myPortal';

import './modal.scss';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {
  return (
    <>
      { isOpen &&
        <MyPortal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
              </div>
              <div className="modalBody">
                {children}
              </div>
              <div className="modalFooter">
                <button onClick={onCancel} >Cancel</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </MyPortal>
      }
    </>
  );
};


export default Modal;
