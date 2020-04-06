import React from 'react';

export default class GifSearch extends React.Component {
constructor(){
  super()
  this.state = {
    search: ''
  }
}
handleSubmit = event =>{
  event.preventDefault();
  this.props.submitF(this.state.search)
}
 handleChange = event =>{this.setState({
   [event.target.name]: event.target.value
   })
 }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        >
        <label>Gif Search: <br/></label>
        <input type='text'  name='search' id='search'></input>
        <input type='submit'/>
      </form>
    )
  }
}
