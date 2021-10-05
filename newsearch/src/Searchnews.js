import {useEffect,useState} from 'react'
import axios from 'axios'

export default function Searchnews(q) {
    const [query,setquery]= useState([])
    useEffect(()=>{
        console.log(q)
        axios({            method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        url: `https://newsapi.org/v2/everything?q=${q}&apiKey=1280d16f51ed419786a6e6b0a187275d`,
    })

        .then(res=>{
            setquery(res.data.articles)
        })
    },[q])
    return query
}

