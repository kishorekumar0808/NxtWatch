import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'
import VideoDetailsCart from './components/CartDesign/VideoDetailsCart'
import ProtectedRoute from './components/ProtectedRoute'
import TrendingPage from './Pages/TrendingPage'
import GamePage from './Pages/GamePage'
import NotFound from './Pages/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute eace path="/trending" component={TrendingPage} />
        <ProtectedRoute eace path="/gaming" component={GamePage} />
        <ProtectedRoute exact path="/videos/:id" component={VideoDetailsCart} />
        <NotFound />
      </Switch>
    )
  }
}

export default App
