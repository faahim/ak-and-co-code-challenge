import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'modern-normalize/modern-normalize.css'
import Header from '../components/header'
import Footer from '../components/Footer'
import logo from '../imgs/logo.svg'
import backgroundImage from '../imgs/header-bg.png'
import '../styles/index.module.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header logo={logo} backgroundImage={backgroundImage} />
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
