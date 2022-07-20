import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearchAlt2} from 'react-icons/bi'
import HomeNxtWatchCart from '../../CartDesign/HomeNxtWatchCart'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class LandingHomeRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    nxtData: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getNxtWatchData()
  }

  formateData = data => ({
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  proFormateData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  getNxtWatchData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachData =>
        this.formateData(eachData),
      )

      this.setState({
        nxtData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSearchName = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNxtWatch = () => {
    const {nxtData, searchInput} = this.state
    const searchResult = nxtData.filter(eachName =>
      eachName.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const showMainNxtWatchList = nxtData.length > 0
    return showMainNxtWatchList ? (
      <div>
        <div className="search-cont">
          <input
            type="search"
            className="search-bar"
            placeholder="Search"
            value={searchInput}
            onChange={this.onSearchName}
          />{' '}
          <span>
            <BiSearchAlt2 onClick={this.showTheResult} />
          </span>
        </div>
        <ul className="main-list-cont">
          {searchResult.map(eachItem => (
            <HomeNxtWatchCart key={eachItem.id} nxtDataDetails={eachItem} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Videos Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure-view"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderAllSwitchData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderNxtWatch()

      case apiStatusConstants.inProgress:
        return this.renderLoader()

      case apiStatusConstants.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  render() {
    return <div className="nxtData-cont">{this.renderAllSwitchData()}</div>
  }
}

export default LandingHomeRoute
