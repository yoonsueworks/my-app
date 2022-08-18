/** @format */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/Movie/:id`}>
          <Detail />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

/* function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (ev) => {
    setToDo(ev.target.value);
    console.log(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (toDo === "") {
      return;
    } else {
      setToDos((current) => [toDo, ...current]);
      setToDo("");
    }
  };
  console.log(toDos);
  const deleteBtn = (ev) => {
    const targetId = Number(ev.target.className);
    setToDos(
      toDos.filter((item, index) => {
        return index !== targetId;
      })
    );
  };
  return (
    <div>
      <h2>got {toDos.length}tasks</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={deleteBtn} className={index}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; */

/* 
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    ).then((response) =>
      response.json().then((json) => {
        setMovies(json.data.movies);
      })
    );
  }, []);
  console.log(movies.map((movies) => console.log(movies)));

  return (
    <div>
      {loading ? <h1>Loading</h1> : null}
      <ul>
        {movies.map((movies) => (
          <li>
            {movies.title}
            <img src={movies.small_cover_image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}



function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usds, setUsds] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      })
    );
  }, []);
  const onChange = (ev) => {
    setUsds(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <h1>The Coins List</h1>
      {loading ? <h3>Loading...</h3> :       <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={usds}
          type="number"
          placeholder="How Much Money"
        />
        <button>USD</button>
      </form>}

      <ul>
        {coins.map((item, index) => (
          <li key={index}>
            {item.name} : {usds / item.quotes.USD.price}
            {item.symbol}
            <br />
            {Math.round(item.quotes.USD.price)}USD/1{item.symbol}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
} */

export default App;
