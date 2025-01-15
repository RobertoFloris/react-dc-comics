import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import headerList from "./data/headerList"

import comics from "./data/comics"

import dcComics from "./data/dcComics"
import shop from "./data/shop"
import dc from "./data/dc"
import sites from "./data/sites"

const App = () => {
  return (
    <>
      <Header headerList={headerList} />
      <Main comics={comics} />
      <Footer dcComics={dcComics} shop={shop} dc={dc} sites={sites} />
    </>
  )
}

export default App
