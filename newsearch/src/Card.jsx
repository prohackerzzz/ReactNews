import React from 'react'

function Card(props) {
  
    return (
        <div>
            <div className="card">
  <img className="card-img-top" src={props.urlToImage} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">{props.desc}</p>
    <a href={props.url} className="btn btn-primary">Read News</a>
  </div>
</div>
        </div>
    )
}

export default Card
