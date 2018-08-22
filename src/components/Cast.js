import React, {Component} from 'react'
import {Container, Row, Col, Card, CardImg,CardTitle } from 'reactstrap'
import { Link,Route} from 'react-router-dom'
import CastInfo from './CastInfo'



const base_url = 'http://image.tmdb.org/t/p/w185'

class Cast extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {cast} = this.props
        return (
            <div>
                <Card className =" h-100 w-75 mb-0 ">
                        <CardImg  src={`${base_url}${cast.profile_path}`} alt ={cast.name}/>
                        < CardTitle className="cardTitle">{cast.name}</CardTitle>
                </Card>
        </div>
        )
    }

}




export default Cast
