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
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="car!" />
            </figure>

        </div>
    )
}

export default Card