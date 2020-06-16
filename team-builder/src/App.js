import React, {useState,useEffect ,} from 'react';
import './App.css';
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'




const initialITTeamMembers = [
  {
    id:1 ,
    superHeroName: 'The Amazing Jaz-mataz',
    power: 'Mind Reading',
    weakness: 'Mac and Cheese',
    weapon: 'Machete'

  },
]

const initialITTeamValues = {

  superHeroName: '',
  power: '',
  weakness: '',


  }




function App() {
const [superheros , setSuperheros] = useState(initialITTeamMembers)
const [formValues , setFormValues] = useState(initialITTeamValues)



const onInputChange = evt =>{
  const {name,value} = evt.target
  

  setFormValues({
    ...formValues,
    [name]:value,
  })


  

  
}





const onSubmit = evt =>{
  evt.preventDefault()
  const newHero = {...formValues}

  setSuperheros(superheros => [newHero,...superheros])

}






  return (
    <div className="App">
      <header><h1> The IT Team </h1></header>
      <Form values ={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>

     { 
      superheros.map(hero =>{
        return (
          <TeamMember key={hero.id} details={hero}/>
          
        )
      })
     
     }
     
    </div>
  );
}

export default App;
