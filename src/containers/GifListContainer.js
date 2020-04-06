import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      gifs: []
    }
  }
  fetchGifs = (search ='dolphins') =>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r=>r.json())
    .then(({data})=>{
      this.setState({
        gifs: data.map( gif=> ({url: gif.images.original.url}))
      })
    })
  }
  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    return(
      <div>

      <GifSearch submitF={this.fetchGifs}/>

        <GifList apiGifs={this.state.gifs}/>
      </div>


    )
  }
}
