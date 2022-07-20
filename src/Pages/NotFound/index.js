import SideBar from '../../components/StructureAndDesign/SideBar'
import Header from '../../components/StructureAndDesign/Header'
import './index.css'

const NotFound = () => (
  <section>
    <Header />
    <div className="landingPage-cont">
      <SideBar />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </div>
  </section>
)

export default NotFound
