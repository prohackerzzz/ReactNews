import {useState} from 'react'
import Searchnews from './Searchnews'


function Navbar(props) {
   const [query,setquery] =useState("")
   
   
   const news=Searchnews(query)

     const submit=(e)=>{
       e.preventDefault()
       console.log(news.length)
       
       props.callbacks(news)
       
       //const news=Searchnews(query)
       //props.callbacks(news)
     }
     
   
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
    <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={submit}>
      <input className="form-control mr-sm-2" type="search" name="inp" value={query} onChange={(e)=>setquery(e.target.value)}  placeholder="Search" aria-label="Search"/>
      
      <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Search"/>
      
    </form>
    
  </div>
</nav>       
    )
}

export default Navbar
