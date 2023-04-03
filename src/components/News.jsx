import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {


    constructor(){
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=34d01750e609463b8cfee9469d6b6d03&page=1pageSize=10";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles: parseData.articles,
          totalResults: parseData.totalResults
        });
    }

    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=34d01750e609463b8cfee9469d6b6d03&page=${this.state.page - 1}&pageSize=10`;
      let data = await fetch(url);
      let parseData = await data.json();

      this.setState({
        page: this.state.page - 1,
        articles: parseData.articles
      });
    }

    handleNextClick = async ()=>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=34d01750e609463b8cfee9469d6b6d03&page=${this.state.page + 1}&pageSize=10`;

        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
          page: this.state.page + 1,
          articles: parseData.articles
        })
      }

    }

  render() {
    return (
      <div className='container my-5 mx-2'>
        <h3>Top Headline</h3>


        <div className="row mx-4">
        {this.state.articles.map((element)=>{
            return <div className="col md-3" key={element.url}>
                <Newsitem  title={element.title? element.title.slice(0, 44):""} description={element.description? element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl ={element.url} />
            </div>
        })}

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-link" onClick={this.handlePrevClick} > &larr; Previous Page</button>
          <button type="button" className="btn btn-link" onClick={this.handleNextClick}>Next Page &rarr;</button>
        </div>
        </div>
      </div>
    )
  }
}

export default News
