import React, {Component} from 'react';
import {Movies} from "../components/Movies/Movies";
import {PreLoader} from "../components/preLoader/PreLoader";
import {Search} from "../components/search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?apikey=1d8278e2&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
  }.catch((err)=>{
    console.error(err)
  this.setState({loading: false});
  })


  searchMovies = (str,type='all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
  }.catch((err)=>{
  console.error(err)
  this.setState({loading: false});
})

  render() {
    const {movies, loading} = this.state;
    return (
        <main>
          <Search searchMovies={this.searchMovies}/>
          {
            loading ? <span>{<PreLoader/>}</span> : (<Movies movies={movies}/>)
          }
        </main>
    );
  }
}

export {Main};