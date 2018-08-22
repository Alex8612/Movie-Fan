import React, { Component }from 'react'
import { Container, Row, Col, Badge} from 'reactstrap';
import Search from './Search'
import CastList from './CastList'
//


const base_url = 'http://image.tmdb.org/t/p/w300'
const back_url = 'https://image.tmdb.org/t/p/original/'

class MovieInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie:{}
        }
    }
    componentWillMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=045f31b15b9d8afe2e600dc3d040bc31&language=en-US`
        ).then(response => response.json())
         .then(movie => this.setState({
             movie
         }) )
    }

    render(){
        const {movie} = this.state

        const backImg = {
            backgroundImage: `linear-gradient(rgba(9, 66, 59, 0.8) 0%, rgba(9, 28, 37, 0.8) 100%),
            url('${back_url}${this.state.movie.backdrop_path}')`,
            backgroundPosition: "center",
            backgroundSize: "cover"
                        }

        return(
                <div className="h-auto backImg" style = {backImg}>
                  <div>
                    <Search />
                  </div>
                    <Container >
                        <Row>
                            <Col className = "mt-4 mb-4">
                                <img src = {`${base_url}${movie.poster_path}`} alt={movie.title}/>
                            </Col>
                            <Col className="align-self-center">
                                <div className="text-left text-white">
                                    <h3>{movie.title}</h3>
                                    <p>{movie.overview}</p>
                                    <h4><small>User score: </small><Badge color="primary">{movie.vote_average}</Badge></h4>
                                    <h4><small>Budget: <Badge color="info">{parseInt(movie.budget,10).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Badge></small></h4>
                                    <h4><small>Revenue: <Badge color="success">{parseInt(movie.revenue,10).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Badge></small></h4>
                                    <h4><small >Relase date: </small>{(movie.release_date)+""} </h4>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                                <CastList id={this.props.match.params.id}/>
                        </Row>
                    </Container>
                </div>


        )
    }
}

export default MovieInfo
