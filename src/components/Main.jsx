const Main = (props) => {

  const { comics } = props;


  return (
    <main>

      <div className="jumbotron">
      </div>

      <div className="container">
        <ul>
          {comics.map(item => (
            <li key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>




      <div className="blueBand">
        <div className="container">
          <ul>
            <li>
              <a href="#">
                <img src="img/buy-comics-digital-comics.png" alt="" />
                <span>DIGITALS COMICS</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/buy-comics-merchandise.png" alt="" />
                <span>DC MERCHANDISE</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/buy-comics-subscriptions.png" alt="" />
                <span>SUBSCRIPTION</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/buy-comics-shop-locator.png" alt="" />
                <span>COMIC SHOP LOCATOR</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/buy-dc-power-visa.svg" alt="" />
                <span>DC POWER VISA</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </main>
  )
}

export default Main