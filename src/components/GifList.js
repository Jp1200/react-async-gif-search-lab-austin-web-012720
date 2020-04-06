import React from 'react';

export default class GifList extends React.Component {



  render(){
    return (

      <div id='gif list'>
        {this.props.apiGifs.map(gif=> <img key={gif.url} src={gif.url} alt='gif'/>)}
      </div>
    )
  }
}
