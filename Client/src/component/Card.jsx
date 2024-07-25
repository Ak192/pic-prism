import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

const Card = () => {
    return (
        <div className="card glass w-96 m-2  md:w-2/5 lg:w-96">
            
            <figure>
              <div className='absolute top-0 end-0 text-4xl'>
            <FcLikePlaceholder />
            </div>
                <img
                    src="https://images.pexels.com/photos/27001883/pexels-photo-27001883/free-photo-of-a-white-car-is-driving-down-a-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="car!" />
            </figure>

        </div>
    )
}

export default Card