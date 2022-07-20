import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {IoGameController} from 'react-icons/io5'
import {RiSaveFill} from 'react-icons/ri'
import './index.css'

const SideBar = () => (
  <section className="sidebar-cont">
    <div>
      <ul className="sidebar-list">
        <li>
          <span>
            <AiFillHome />
          </span>
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li>
          <span>
            <ImFire />
          </span>
          <Link to="/trending" className="link-item">
            Trending
          </Link>
        </li>

        <li>
          <span>
            <IoGameController />
          </span>
          <Link to="/gaming" className="link-item">
            Gaming
          </Link>
        </li>

        <li>
          <span>
            <RiSaveFill />
          </span>
          <Link to="/saved" className="link-item">
            Saved Items
          </Link>
        </li>
      </ul>
    </div>
    <div className="social">
      <h1>CONTACT US</h1>
      <div className="social-logos-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="facebook-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="twitter-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
          className="linedIn-logo"
        />
      </div>
      <p className="des">Enjoy! Now to see your channels and relationship!</p>
    </div>
  </section>
)

export default SideBar
