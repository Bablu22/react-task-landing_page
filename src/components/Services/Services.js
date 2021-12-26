import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container mx-auto mb-5">
            <div className='mt-5 pt-5'>
                <p className=' service-text w-75 mx-auto text-center fw-medium fs-5'>Botsopot AI offers our customer a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any busness need. Our knowledge and experience transkate to added value and peace of mind for our customer.
                </p>
                <div className='service'>
                    <h3>Who We Serve</h3>
                </div>
                <p className='service-text w-75 mx-auto text-center fw-medium mt-4'>Botspot AI serves businesses in all major sectors, providing exceptional software solutions for large corporation, mid-sized and startups. we use industry specific knowledge and custom tailor our products to each customer’s unique needs.</p>


                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;