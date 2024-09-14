import React from 'react'
import DeshboardSidebar from '../component/DeshboardSidebar'
import PhotoManagement from '../component/saller/PhotoManagement'

const Saler = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-gradient-to-r from-cyan-300 to-blue-300'> 
    
    <DeshboardSidebar/>
     <div>
      {/* we will  change the page through switch case here */}
      <PhotoManagement/>
     </div>
    </div>
  )
}

export default Saler