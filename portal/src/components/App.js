import React, { Component } from 'react'
import { HashRouter as Router, Route } from "react-router-dom";
import Drawer from './Drawer'
import AppBar from './AppBar'
import Map from './Map'
import Members from './Members'
import About from './About'
import Admin from './Admin'
import './App.css'

export default class App extends Component {
  state={
    session: null,
    access: null,
    drawer: false,
  }

  updateSession = ({ session, access }) => {
    this.setState({
      session,
      access,
    })
  }

  toggleDrawer = () => {
    this.setState({
      drawer: !this.state.drawer,
    })
  }

  render() {
    const { session, access, drawer } = this.state
    // console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
    return (
      <Router
        // basename={'/'}
      >
        <div className="App">
          <AppBar toggleDrawer={this.toggleDrawer} />
          <Drawer toggleDrawer={this.toggleDrawer} open={drawer}/>
          <Route
            path={`/`}
            render={props => <Members {...props} session={session} access={access} />}
          />
          <Route
            path={`/sobre`}
            component={About}
          />
          <Route
            path={`/map`}
            render={props => <Map />}
          />
          <Route
            path={`/admin`}
            render={props => <Admin {...props} session={session} access={access} updateSession={this.updateSession} />}
          />
          {/* <AddVoucher
            session={session}
            access={access}
          />
          {!session && <Login
            updateSession={this.updateSession}
          />} */}
        </div>
      </Router>
    )
  }
}