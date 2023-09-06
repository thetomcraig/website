import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import HeaderComponent from "./components/header"

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>TomCraig.org</title>
            <link rel="canonical" href="http://tomcraig.org" />
          </Helmet>
          <div className="container">
            <HeaderComponent />
          </div>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
