import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import headerList from "./data/headerList"
import comics from "./data/comics"

const App = () => {
  return (
    <>
      <Header headerList={headerList} />
      <Main comics={comics} />
      <Footer />
    </>
  )
}

export default App
