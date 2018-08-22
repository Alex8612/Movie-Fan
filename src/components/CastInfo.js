import React, {Component} from 'react'
import {Container, Row, Col } from 'reactstrap'


const base_url = 'http://image.tmdb.org/t/p/w342'

class CastInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            cast:{}
        }
    }
    componentWillMount(){
        const url = `https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=045f31b15b9d8afe2e600dc3d040bc31&language=en-US`
        fetch(url).then(res => res.json())
                    .then(cast =>{
                        const a=cast
                        console.log(a)
                        this.setState({
                            cast:a
                        })
                    }


                )
    }

    render(){
    const {cast} = this.state
        return(
            <Container>
                <Row className="mt-2 mb-2">
                    <Col >
                        <img className= "pt-2" src={`${base_url}/${cast.profile_path}`} alt ={cast.name}/>
                    </Col>
                    <Col className="text-left pt-2">
                        <h1>{cast.name}</h1>
                        <h3>Biography</h3>
                        <p>{cast.birthday}</p>
                        <p>{cast.biography}</p>

                    </Col>
                </Row>
            </Container>
        )
    }



}

export default CastInfo
