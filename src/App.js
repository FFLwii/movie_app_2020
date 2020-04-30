import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state ={
    isLoading: true,
    movies: []
  };
  getMovies= async ()=>{
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
    setTimeout(()=>{
    this.setState({isLoading: false});
  }, 6000);
}

  render(){
   const {isLoading} = this.state;
   console.log(this.state);
   return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
