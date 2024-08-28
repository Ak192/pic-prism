import DeshboardSidebar from "../component/DeshboardSidebar"
import PhotoManagement from "../component/saller/PhotoManagement"


const Buyer = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <DeshboardSidebar />
     <div>
      {/* we will  change the page through switch case here */}
      <PhotoManagement/>
     </div>
    </div>
  )
}

export default Buyer