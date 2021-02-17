/**
 * The NextJs app starts from a file _app.js
 * https://medium.com/weekly-webtips/next-js-on-the-server-side-notes-to-self-e2170dc331ff
 */
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="App">
        <Component {...pageProps} />
    </div>
  )
}
