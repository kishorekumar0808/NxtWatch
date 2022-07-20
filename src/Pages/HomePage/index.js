import SideBar from '../../components/StructureAndDesign/SideBar'
import Header from '../../components/StructureAndDesign/Header'
import LandingHomeRoute from '../../components/StructureAndDesign/LandingHomeRoute'
import './index.css'

const HomePage = () => (
  <section>
    <Header />
    <div className="landingPage-cont">
      <SideBar />
      <LandingHomeRoute />
    </div>
  </section>
)

export default HomePage
