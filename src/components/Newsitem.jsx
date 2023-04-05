import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left: '85%', zIndex: '1'}}>{source}</span>
        <img src={!imageUrl?"https://learncrypto.com/_nuxt/img/901a7a4.jpg":imageUrl} className="card-img-top" alt=".."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...  <a href={newsUrl}>Click To Read More</a></p>
            <p className="card-text"><small className="text-body-secondary"><strong>By: </strong> <span style={{
                color: 'Green'
            }}>{!author?"Unknown":author}</span> <strong>On: </strong> {date}</small></p>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
