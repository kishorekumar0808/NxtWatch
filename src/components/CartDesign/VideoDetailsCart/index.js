import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../../StructureAndDesign/Header'
import SideBar from '../../StructureAndDesign/SideBar'

import './index.css'

class VideoDetailsCart extends Component {
  state = {
    videoDetailsData: {},
    isPlaying: false,
  }

  componentDidMount() {
    this.getVideosDetailsData()
  }

  formattedData = data => ({
    id: data.id,
    description: data.description,
    title: data.title,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    videoUrl: data.video_url,
    viewCount: data.view_count,
  })

  getVideosDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.formattedData(data.video_details)
      this.setState({videoDetailsData: updatedData})
    }
  }

  playerControls = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  videoPlayer = () => {
    const {isPlaying, videoDetailsData} = this.state
    const {videoUrl} = videoDetailsData
    return (
      <div className="video-player">
        <ReactPlayer
          url={videoUrl}
          playing={isPlaying}
          controls
          width="74rem"
          height="30rem"
        />
      </div>
    )
  }

  cartDetails = () => {
    const {videoDetailsData} = this.state
    const {description, title, publishedAt, viewCount} = videoDetailsData
    return (
      <section className="cart-cont">
        <div>
          {this.videoPlayer()}
          <p className="des">{title}</p>
          <p className="des">
            <span>
              {viewCount} <span>{publishedAt}</span>
            </span>
          </p>
          <hr className="line" />
          <div className="cart-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
              alt="name"
              className="name-icon"
            />
            <div>
              <p className="name">iB Cricket</p>
              <p className="des">{description}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <section>
        <Header />
        <div className="view-cart">
          <SideBar />
          {this.cartDetails()}
        </div>
      </section>
    )
  }
}

export default VideoDetailsCart
