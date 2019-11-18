import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <>
    <header className="Header">
      <div className="HeaderGroup">
        <Link to="/"><img src='https://designcode.io/images/DesignCode-Logo-Black.svg' width="30" /></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>

    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
