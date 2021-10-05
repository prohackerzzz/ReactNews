import { useState,useEffect,React} from 'react'
import axios from 'axios'

export default function useSearch() {
    const [content,setcontent] = useState([])
    useEffect(()=>{
    axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=1280d16f51ed419786a6e6b0a187275d')
    .then(res=>{
    setcontent(res.data.articles)})
},[])
    
    return content
}

