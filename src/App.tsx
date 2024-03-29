import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import HeaderComponent from "./components/header"
import ContentComponent from "./components/content"
import ImageComponent from "./components/image"

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
            <ImageComponent />
            <ContentComponent />
          </div>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
