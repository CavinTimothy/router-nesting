import { Route, Switch, NavLink, useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies(props) {
  const movieId = useParams();
  const md = props.movies.map((x) => x.title + " ");
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={`/movies/1`}>{md[0]}</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/2`}>{md[1]}</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/3`}>{md[2]}</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/4`}>{md[3]}</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movie={props.movies[movieId]} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
