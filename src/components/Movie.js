import React from 'react'
import {  Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const base_url = 'http://image.tmdb.org/t/p/w185'

const Movie = ({movie}) => {
    return(
        <div className = 'col-lg-3 col-md-3 col-sm-12   Container'>
            <Link to = {`/movie/${ movie.id }`}>
                <div className= 'Container'>
                    <Row>
                        <Col>
                            <img src={`${base_url}${movie.poster_path}`} alt ={movie.title}/>
                            <p className = 'font-weight-bold text-dark'>{movie.title} </p>
                        </Col>

                    </Row>
                </div>
            </Link>
        </div>


    )
}

export default Movie
