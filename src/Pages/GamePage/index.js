import SideBar from '../../components/StructureAndDesign/SideBar'
import Header from '../../components/StructureAndDesign/Header'
import GameRoute from '../../components/StructureAndDesign/GameRoute'
import './index.css'

const HomePage = () => (
  <section>
    <Header />
    <div className="landingPage-cont">
      <SideBar />
      <GameRoute />
    </div>
  </section>
)

export default HomePage
