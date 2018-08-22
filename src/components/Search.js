 import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { Link } from 'react-router-dom'
import { Form} from 'reactstrap'


const search_url = 'https://api.themoviedb.org/3/search/movie?query='
const api_key = '&api_key=ab8356e075fc49f45bcecd2802a2c5dd'
const small_img= 'https://image.tmdb.org/t/p/w45/'

// Inline css for autosuggest input suggestion resultes
const theme ={
    container: {
      position: 'relative',
      padding:'30px 0px 30px 100px '
    },
    input: {
      width: 340,
      height: 30,
      padding: '10px 20px',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      border: '1px solid #aaa',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
    inputFocused: {
      outline: 'none'
    },
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top: 51,
      width: 280,
      border: '1px solid #aaa',
      backgroundColor: '#fff',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      zIndex: 2
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 1px'
  },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }

}


// When suggestion is clicked, Autosuggest needs to populate the input
// Implement getSuggestionValue to teach Autosuggest what should be the input
//value when suggestion is clicked.
const getSuggestionValue = suggestion => suggestion.title

//Get suggested movies' posters and titles
const renderSuggestion = suggestion => (
      <div>
        <Link to ={`/movie${suggestion.id}`}>
        <div className="container">
            <div className = "row">
                <div className = "col">
                <img className="searchImg" alt = {`Poster Path ${suggestion.title}`} src={(small_img+suggestion.poster_path)}/>
                </div>
                <div className = "searchTitle col">
                    {suggestion.title}
                </div>
            </div>
        </div>
        </Link>
      </div>
)

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            suggestions:[]
        }
    }

//An input value, an onChange handler that updates this value (see below) and
// Suggestions  need to be provided to the Autosuggest,
    onChange= (event,{newValue}) =>{
        this.setState({
                 value: newValue+""//typeof newValue !== 'undefined' ? newValue : ''+newValue
            })
    }

// Autosuggest will call this function every time you need to update suggestions.
onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const  url = search_url + inputValue + api_key

  return inputLength === 0 ? [] : fetch(url).then(res => res.json()).then(data=>{
      this.setState({ suggestions: data.results })
  })
}

// Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
      this.setState({
          suggestions:[]
      })
  }

    render(){
        const { value, suggestions } = this.state

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Type a Movie Title',
          value,
          onChange: this.onChange,
        }


        return(
                <Form className ="searchBar align-left" >
                   <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={ inputProps}
                    theme ={ theme }
                  />
                </Form>

        )
    }
}

export default Search
