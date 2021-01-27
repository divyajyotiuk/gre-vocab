/**
 * The NextJs app starts from a file _app.js
 */
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="App">
        <Component {...pageProps} />
    </div>
  )
}
