import {React,useState} from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Searchnews from './Searchnews'
import useSearch from './useSearch'


function Listnews() {

    const [content,setcontent] = useState([])
    
    const news=useSearch()

    const onsub=(data)=>{
        setcontent(data)
        console.log(content)
    }
    if(content.length != 0){
        return( 
            <div>
        <Navbar callbacks={onsub}/>
            <div class="container my-5">
            <div class="row">
            

                {content.map(ele=>
                <div class="col-md-4">
                 <div><Card url={ele.url} urlToImage={ele.urlToImage} desc={ele.description}/></div>
                 </div>
                )}
            </div>
            </div>
        </div>
        )
                }

    else{
    return (
        
        <div> 
        
            <Navbar callbacks={onsub}/>
            {/*news.map(ele=>{
            <div class="container my-5">
                
                 <div><Card url={ele.url} urltoimage={ele.urlToImage} desc={ele.description}/></div>
            </div>
            })*/}
            
            {<div class="container my-5">
            <div class="row">
            

                {news.map(ele=>
                <div class="col-md-4">
                 <div><Card url={ele.url} urlToImage={ele.urlToImage} desc={ele.description}/></div>
                 </div>
                )}
            </div>
            </div>}
        </div>
        
    )
}
}

export default Listnews