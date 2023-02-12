import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import "./Gun.css"

const Gun = (props) => {
    const [modalData, setModalData] = useState({});
    // console.log(modalData);
    const { gun, countIncrease } = props;
    const { action, bullet, capacity, category, id, img, name, price } = gun;
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img className='w-96 h-64' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-accent">{action}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-action">
                    <div className="badge badge-outline">{bullet}</div>
                    <div className="badge badge-outline ml-3">{category}</div>
                    <div className='mt-2'>
                        <button onClick={countIncrease} className="btn btn-sm bg-indigo-600 hover:bg-indigo-500 border-0">Add to Card</button>
                        {/* <button className="btn btn-sm hover:bg-slate-700 ml-3">Details</button> */}
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm hover:bg-slate-700 ml-3">Details</label>
                    </div>
                </div>
            </div>
            {modalData && (
                <Modal data={modalData} setModalData={() => setModalData()}></Modal>
            )}
        </div>
    );
};

export default Gun;