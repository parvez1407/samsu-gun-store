import React from 'react';
import "./Modal.css"

const Modal = ({ data, setModalData }) => {
    const { action, bullet, capacity, category, id, img, name, price } = data;
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={setModalData} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-black">Name: {name}</h3>
                    <img className='w-3/4 mx-auto my-4' src={img} alt="" />
                    <p className="py-4 text-lg font-black">ID: {id}</p>
                    <p className="py-4">Action: {action}</p>
                    <p className="py-4">Bullet: {bullet}</p>
                    <p className="py-4">Capacity: {capacity}</p>
                    <p className="py-4">Category: {category}</p>
                    <h1 className="py-4 text-lg font-black">Price: ${price}</h1>
                </div>
            </div>
        </div >
    );
};

export default Modal;