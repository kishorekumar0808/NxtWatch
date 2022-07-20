import SideBar from '../../components/StructureAndDesign/SideBar'
import Header from '../../components/StructureAndDesign/Header'
import TrendingRoute from '../../components/StructureAndDesign/TrendingRoute'
import './index.css'

const TrendingPage = () => (
  <section>
    <Header />
    <div className="landingPage-cont">
      <SideBar />
      <TrendingRoute />
    </div>
  </section>
)

export default TrendingPage
