import React, { Component } from 'react'

export default class People extends Component{
    
render(){
    console.log(this.props);
    return(
        <div style={{display: 'inline-block'}}>
        <div className="card" style={{width: '18rem'}}>
        <img src={this.props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">{this.props.name}</p>
        </div>
      </div>
        </div>
    )
}
}