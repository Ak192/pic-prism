import React, { useEffect } from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ id, img, title, author, Icon1, Icon2, price }) => {

  return (

    <div className="card glass w-80   md:w-2/5 lg:w-48" >

      <figure>
        <div className='absolute top-0 end-0 text-4xl'>
          <FcLikePlaceholder />
        </div>
        <img src={img} alt={title} className='w-full h-56' onClick={() => document.getElementById(id).showModal()} />
        <dialog id={id} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className='flex justify-between'>
              <div className='font-bold'>@{author}</div>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </div>          
            </form>
            <div className='p-5'>
              <img src={img} alt={title} className='w-full h-72 shadow-md border border-solid '/>
              <p>{title}</p>
              <div className='flex justify-between'>
              
                <div className='flex'>{Icon1} {Icon2}</div>
              </div>
              <div>${price}</div>
            </div>
          </div>
        </dialog>
      </figure>


    </div>
  )
}

export default Card