import { Link } from "react-router-dom"
import Dinning from '../../assets/diningRoom.png'
import LivingRoom from '../../assets/livingRoom.png'
import BedRoom from '../../assets/bedRoom.png'

function Categories() {
  return (
    <section className="categories section">
      <h2 className="categories_title">Browse The Range</h2>
      <p className="categories_description">Browse our range of furniture from various part of your home.</p>

      {/* image links */}
      <div className="categories_card">

         <Link to='shop' className="categories_card_link">
         <img src={Dinning} alt="photo of a room with a coffee table and a knitted table cloth" className="categories_card_image"/>
         <h5 className="categories_card_title">Dining</h5>
         </Link>

         <Link to='shop' className="categories_card_link">
         <img src={LivingRoom} alt="sofa with a beige blanket cover it and a wooded coffee table" className="categories_card_image"/>
         <h5 className="categories_card_title">Living</h5>
         </Link>

         <Link to='shop' className="categories_card_link">
         <img src={BedRoom} alt="bedroom with a flower pot and brown closet door" className="categories_card_image"/>
         <h5 className="categories_card_title">Bedroom</h5>
         </Link>

      </div>
    </section>
  )
}

export default Categories