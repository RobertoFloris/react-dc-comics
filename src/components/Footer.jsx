import BlueBand from "./partials/BlueBand"
import Social from "./partials/Social"

const Footer = (props) => {

  const { dcComics, shop, dc, sites } = props;

  return (
    <footer>

      <div className="bgFooter">

        <BlueBand />

        <div className="container">

          <div className="link flex">

            <div>
              <ul>
                <li><h2>DC COMICS</h2></li>
                {dcComics.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
              <ul className="link">
                <li><h2>SHOP</h2></li>
                {shop.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul>
                <li><h2>DC</h2></li>
                {dc.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul>
                <li><h2>SITES</h2></li>
                {sites.map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div>
            <img src="img/dc-logo-bg.png" alt="logoBg" />
          </div>
        </div>

        <Social />

      </div>




    </footer>
  )
}

export default Footer