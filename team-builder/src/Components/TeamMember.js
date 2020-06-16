import React,{useState,useEffect} from 'react'
import axios from 'axios'




export default function TeamMember (props){

    const{details} = props

const [image , setimage] = useState([])
const [enemy , setenemy] = useState([])
const [id , setid] = useState(Math.floor(Math.random() * 700))

    useEffect(()=>{
        axios.get(`https://www.superheroapi.com/api.php/3024379780944166/${id}`)
        .then(res =>{
      
          setimage(res.data.image.url)
      
        })
      },[])
      
      useEffect(()=>{
        axios.get(`https://www.superheroapi.com/api.php/3024379780944166/${id}`)
        .then(res =>{
          setenemy(res.data.name)
          
        })
      },[])
    
    const makeStyles = () =>{
        return {
            div:{
                display: 'flex',   
                justifyContent: 'center',
                alignItems: 'center'
            
              
                
            },
            div2:{
                margin: '3%'
            },

            img:{
                width: '70%',
                height: '50%',
                display:'flex',
                oder: '-1'
            }
        }
    }


    return (
        <div style={makeStyles().div}>
        <div >
            <img
            style={makeStyles().img}
            alt="post thumbnail"
            className="post-image"
            src={image}
            />
        
        </div>
        <div style={makeStyles().div2} >
        <h2>{details.superHeroName}</h2>
        <p> SuperPowers: {details.power}</p>
        <p> Weaknesses: {details.weakness}</p>
        <p>Weapon of Choice: {details.weapon} </p>
        <p>Arch Enemy: {enemy} </p>
        </div>
       
        </div>
    )
}