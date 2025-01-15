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

    </main>
  )
}

export default Main