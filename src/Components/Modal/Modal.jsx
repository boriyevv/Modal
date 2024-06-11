import React from 'react';
import "./modal.css"
import ReactDom from 'react-dom'

const Modal = ({children, handleclose}) => {

    return ReactDom.createPortal  ((<div className='modal-wrap'>
            <div className="modal">
                {children}
                <button onClick={handleclose}>Close Modal</button>
            </div>
        </div>), document.body);
}

export default Modal;
