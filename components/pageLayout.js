import { TopBar } from '../pages/index'
import Footer from './footer'

export default function Layout({ children }) {
    return (
      <>
      <TopBar/>
      <div className="container px-7 mx-auto mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {children}
        </div>
      </div>
      <Footer />
      </>
    )
  }