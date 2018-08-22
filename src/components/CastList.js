import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cast from './Cast'
import {Container, Row, Col } from 'reactstrap'

class CastList extends Component{
    constructor(props){
        super(props)
        this.state = {
            casts:[]
        }
    }

    componentWillMount(){
        const url = `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=045f31b15b9d8afe2e600dc3d040bc31&language=en-US`
        fetch(url).then(response => response.json())
                    .then(data => {
                        const casts = data.cast.slice(0,5)

                        this.setState({
                            casts:casts
                        })

            })
    }


    render(){
        const Casts = this.state.casts.map(cast =>

                <Link to = {`/star/${cast.id}`}>
                        <Cast  cast={cast} />
                </Link>

            )
            return(
                <Container className = " d-flex justify-content-center mb-3">
                    <Row>
                        {Casts}
                    </Row>
                </Container>
            )

    }




}



export default CastList
