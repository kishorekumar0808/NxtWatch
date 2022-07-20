import {Link} from 'react-router-dom'
import './index.css'

const GameCart = props => {
  const {nxtDataDetails} = props
  const {id, thumbnailUrl, title, viewCount} = nxtDataDetails

  return (
    <li className="list-items-cont">
      <Link to={`/videos/${id}`} className="link-item">
        <img src={thumbnailUrl} alt="thumbnail" className="video-thumb" />
        <div className="details-cont-1">
          <div className="details-cont-2">
            <p className="title">{title}</p>
            <p className="span-ele">
              <span className="span">{viewCount} - </span>
              <span className="span">Watching WorldWild</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default GameCart
