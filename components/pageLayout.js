import { TopBar } from '../pages/index'
import Footer from './footer'

export default function Layout({ children }) {
    return (
      <>
      <TopBar/>
       <main>{children}</main>
      <Footer />
      </>
    )
  }