import Layout from '../comps/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
  <div>
    <Layout className="content">
    <Component {...pageProps} />
    </Layout>
  </div>
  
  )
}

export default MyApp
