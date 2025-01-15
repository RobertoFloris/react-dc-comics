const Main = (props) => {

  const { comics } = props;


  return (
    <main>

      <div className="jumbotron">
      </div>

      <div className="container containerCard">
        <ul>

          {comics.map(item => (
            <li key={item.id}>
              <div className="card">
                <a href="#"><img src={item.thumb} onError={(e) => { e.target.src = "/img/placeholder.png"; }} alt="image"
                />
                  <span>{item.title}</span>
                </a>
              </div>
            </li>

            // <li key={item.id}>
            //   <a href="#">{item.title}</a>
            // </li>
          ))}
        </ul>
      </div>

    </main>
  )
}

export default Main