import imgDigital from "../assets/img/buy-comics-digital-comics.png"
import imgMerchandise from "../assets/img/buy-comics-merchandise.png"
import imgSubscription from "../assets/img/buy-comics-subscriptions.png"
import imgShop from "../assets/img/buy-comics-shop-locator.png"
import imgVisa from "../assets/img/buy-dc-power-visa.svg"
import logoBg from "../assets/img/dc-logo-bg.png"

const Main = () => {
  return (
    <main>
      <section>

        <div>
          <div className="container">
            <h2>&lt;-- Content goes here --&gt;</h2>
          </div>
        </div>

        <div>
          <div className="container">
            <ul>
              <li>
                <a href="#">
                  <img src={imgDigital} alt="" />
                  <span>DIGITALS COMICS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgMerchandise} alt="" />
                  <span>DC MERCHANDISE</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgSubscription} alt="" />
                  <span>SUBSCRIPTION</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgShop} alt="" />
                  <span>COMIC SHOP LOCATOR</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={imgVisa} alt="" />
                  <span>DC POWER VISA</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </section>

      <section>
        <div className="container">
          <div>
            <ul className="link">
              <h2><a href="#">DC COMICS</a></h2>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>

              <h2><a href="#">SHOP</a></h2>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>

              <h2><a href="#">DC</a></h2>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy Policy (New)</a></li>
              <li><a href="#">Ad Choices</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Talent Workshops</a></li>
              <li><a href="#">CPSC Certificates</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Shop Help</a></li>
              <li><a href="#">Contact Us</a></li>

              <h2><a href="#">SITES</a></h2>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </div>
          <div>
            <img src={logoBg} alt="logoBg" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main