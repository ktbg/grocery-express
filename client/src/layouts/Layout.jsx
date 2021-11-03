import Nav from "../components/Nav"
import Footer from "../components/Footer"
import './Layout.css'

const Layout = (props) => {
  
  return (
    <div className="layout">
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
