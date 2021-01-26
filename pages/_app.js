/**
 * The NextJs app starts from a file _app.js
 */
import Footer from '../components/footer'
import BurgerMenu from '../components/burgerMenu';
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="App">
        <Component {...pageProps} />
        <BurgerMenu className="burger-menu" outerContainerId={"App"} ></BurgerMenu>
        <Footer></Footer>
    </div>
  )
}