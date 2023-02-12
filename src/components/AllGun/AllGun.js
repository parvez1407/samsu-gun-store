import React, { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import Gun from '../Gun/Gun';
import "./AllGun.css"

const AllGun = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>Total Gun: {guns.length}</h1>
                <h1 className="mt-7 text-4xl text-center font-bold text-purple-800">Welcome to Samsu GUN Store</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repudiandae tempora quisquam, ullam assumenda consectetur!</p>
            </div>
            <div className='w-[90%] mx-auto'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        guns.map(gun => <Gun
                            countIncrease={countIncrease}
                            gun={gun}
                            key={gun.id}
                        ></Gun>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGun;
