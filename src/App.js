import React from 'react';
import axios from 'axios';
import Movie from './Movie';
class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies);//movies -> keep use "var's name" by =this.movie
    //this.setState({movies:movies}); //this.movies ->setState =movies
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // fetch state
    //console.log(isLoading);
    var count1=0;

    console.log();
    console.log(this.state);
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      count1++;
      //console.log(count1);
      console.log(typeof(movie)+"카운트 맵: "+count1);
      console.log(movie);
      return (<Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />);
    })}</div>;
    //this.state.movie
  }
}

export default App;
