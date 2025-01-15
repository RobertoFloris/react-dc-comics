const Footer = () => {
  return (
    <footer>

      <div className="bgFooter">


        <div className="container">
          <div>
            <ul className="link">
              <h2>DC COMICS</h2>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>

              <h2>SHOP</h2>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>

              <h2>DC</h2>
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

              <h2>SITES</h2>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </div>
          <div>
            <img src="img/dc-logo-bg.png" alt="logoBg" />
          </div>
        </div>
      </div>

      <div className="social">
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
                    <img src="img/footer-facebook.png" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/footer-twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/footer-youtube.png" alt="youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/footer-pinterest.png" alt="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="img/footer-periscope.png" alt="periscope" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer