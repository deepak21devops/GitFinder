import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Search extends Component {

    state = {text:''}

    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value})
       
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.userSelect(this.state.text)
        this.setState({text:''})
        
    }

    static propTypes = {
        userSelect:PropTypes.func.isRequired
      }
    
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search here...." value={this.state.text} onChange={this.onChange}></input>
                    <input type="submit" className="btn btn-dark btn-block" value="Search"></input>
                </form>
            </div>
        )
    }
}

export default Search
