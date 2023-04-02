import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://learncrypto.com/_nuxt/img/901a7a4.jpg":imageUrl} className="card-img-top" alt=".."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...  <a href={newsUrl}>Click To Read More</a></p>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
