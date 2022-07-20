import {Link} from 'react-router-dom'
import './index.css'

const HomeNxtWatchCart = props => {
  const {nxtDataDetails} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount} = nxtDataDetails

  return (
    <li className="list-items-cont">
      <Link to={`/videos/${id}`} className="link-item">
        <img src={thumbnailUrl} alt="thumbnail" className="video-thumb" />
        <div className="details-cont-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
            alt="name"
            className="name-icon"
          />
          <div className="details-cont-2">
            <p className="title">{title}</p>
            <p className="name">iB Cricket</p>
            <p className="span-ele">
              <span className="span">{viewCount} - </span>
              <span className="span">{publishedAt}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default HomeNxtWatchCart
