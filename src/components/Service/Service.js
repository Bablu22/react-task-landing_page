import React from 'react';

const Service = ({ service }) => {
    const { name, img } = service

    return (
        <>
            <div className="col">
                <div className="card p-3">
                    <img src={img} className="card-img-top w-25 mx-auto"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;