const Social = () => {
  return (

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
  )
}

export default Social