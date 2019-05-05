import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'
import { Helmet } from 'react-helmet'

Helmet.defaultProps = {
  defer: false,
}

function Index() {
  return (
    <div>
      <Helmet title="Home" />
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <Helmet title="About" />
      <h2>About</h2>
    </div>
  )
}
function AboutMe() {
  return <h2>AboutMe</h2>
}

function Users() {
  return <h2>Users</h2>
}

class NotFound extends React.Component {
  state = { countDown: 3 }

  interval = null

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ countDown: this.state.countDown - 1 })
    }, 1000)
  }

  componentWillUnmount = () => {
    console.log('Redirected')
    clearInterval(this.interval)
  }

  render() {
    const { countDown } = this.state

    if (countDown > 0)
      return (
        <div>
          <Helmet title={`(${countDown}) Redirecting...`} />
          <h2>Redirecting to Home in {countDown}s</h2>
        </div>
      )

    return <Redirect to="/" />
  }
}

function GoHome() {
  return <Redirect to="/" />
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Helmet
          defaultTitle="Kmin Todo App"
          titleTemplate="%s – Kmin Todo App"
        />
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                }}
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ fontWeight: 'bold' }} exact to="/about/">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ fontWeight: 'bold' }} to="/about/me">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ fontWeight: 'bold' }} to="/users/">
                Users
              </NavLink>
            </li>
            <li>
              <Link to="/home/">Go home</Link>
            </li>
            <li>
              <Link to="/not-found/">Not found</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
          <Route path="/about/me" component={AboutMe} />
          <Route path="/users/" component={Users} />
          <Route path="/home/" component={GoHome} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
