import React from 'react';
import './Modal.scss';

const Modal = (props) => {
	const {title, onClose, children} = props || {};
	return (
		<div id="myModal" className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<span onClick={onClose} className="close">&times;</span>
					<h2>{title}</h2>
				</div>
				<div className="modal-body">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal
