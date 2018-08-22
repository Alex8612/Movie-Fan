import React, { Component } from 'react'
import Movie from './Movie'
import { Container, Row, Col } from 'reactstrap';
import Search from './Search'


class Top extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

//Get the Top rated Movies from the api
componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ab8356e075fc49f45bcecd2802a2c5dd&language=en-US&include_adult=false&include_video=false&page=1&page=2'
     ).then(response =>response.json())
      .then( data =>{
          let movies = data.results
          this.setState({
              movies: movies
        })
      }
   )
}

    render() {
        const TopMovies =this.state.movies.map(movie =>
            <Movie key={movie.id}  movie={movie} />)
        return(
            <div>
                <div>
                    <Search />
                </div>
                <Container>
                    <Row>
                        {TopMovies}
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Top
