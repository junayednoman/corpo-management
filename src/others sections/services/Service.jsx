import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { image, name, short_description, id, price } = service;
    return (
        <div className="keen-slider__slide p-4 rounded-lg bg-[#A5D7E8] mt-3">
            <img className='rounded-md' src={image} alt="" />
            <div className='p-1'>
            <h2 className='text-xl font-semibold mt-3'>{name}</h2>
            {
                short_description.length < 200 ? <p className='text-sm mt-2'>{short_description}</p> : <p className='text-sm mt-2'>{short_description.split('.')[0]}.</p>
            }
            <div>
                <p className='mt-2'><span className='font-medium'>Price</span>: {price}</p>
            </div>
            <Link to={`/service/${id}`} className='btn text-[12px] bg-[#0B2447] border-none mt-4 text-white hover:bg-[#0B2447]'>View Details</Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}

export default Service;