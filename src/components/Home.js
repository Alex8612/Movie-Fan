import React, { Component } from 'react'
import Movie from './Movie'
import { Container, Row, Col } from 'reactstrap';
import Search from './Search'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

//Get the Popular Movies from the api
componentWillMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ab8356e075fc49f45bcecd2802a2c5dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2'
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
        const Movies =this.state.movies.map(movie =>
            <Movie key={movie.id}  movie={movie} />)
        return(
            <div>
                <div>
                    <Search />
                </div>
                <Container>
                    <Row>
                        {Movies}
                    </Row>
                </Container>
            </div>


        )

    }


}



export default Home
