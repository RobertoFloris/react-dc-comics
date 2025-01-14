import facebook from "../assets/img/footer-facebook.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
import pinterest from "../assets/img/footer-pinterest.png"
import periscope from "../assets/img/footer-periscope.png"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <button>SIGN-UP NOW!</button>
        </div>

        <div className="flex">

          <div className="followUs">
            <h3>FOLLOW US</h3>
          </div>


          <div>
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={pinterest} alt="pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={periscope} alt="periscope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer