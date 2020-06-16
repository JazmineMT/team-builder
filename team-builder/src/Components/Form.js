import React from 'react'

export default function Form(props){
    const{ values, onInputChange,onSubmit, } = props



const makeStyle = () =>{
    return {
        bigContainer:{
                display:'flex',
                justifyContent: 'center',
                flexDirection: 'column'


        },
        title:{

        },

        button:{
               

        },

        forms:{
            display:'flex',
            flexDirection: 'column',
            

        },
        label:{
            padding: '.5%',
            
        }

    }

}




    return (
        <form onSubmit={onSubmit}>
         <div style={makeStyle().bigContainer} >
            <div>
               <h2 style={makeStyle().title}> Join the IT Team</h2>
               <button style={makeStyle().button} >Submit</button>
               
            </div>  
            <div style={makeStyle().forms}>
                <label style={makeStyle().label} > Superhero Name:&nbsp;
                    <input
                        type='text'
                        name='superHeroName'
                        value = {values.superHeroName}
                        onChange={onInputChange}
                        maxLength= '100'

                    />
                </label>
                <label style={makeStyle().label} > Superpower:&nbsp;
                    <input
                        type='text'
                        name='power'
                        value = {values.power}
                        onChange={onInputChange}
                        maxLength= '100'

                    />
                </label >
                <label style={makeStyle().label} > Weaknesses:&nbsp;
                    <input
                        type='text'
                        name='weakness'
                        value = {values.weakness}
                        onChange={onInputChange}
                        maxLength= '100'

                    />
                </label >
                <label style={makeStyle().label} > Weapon of Choice:&nbsp;
                   <select
                        name='weapon'
                        value={values.weapon}
                        onChange={onInputChange}
                   >
                    <option> Select Your Weapon </option>
                    <option value = 'Machete' value='5'>Machete</option>
                    <option value ='Sword'>Sword</option>
                    <option value ='Frying Pan' >Frying Pan</option>
                    <option value ='Lightsaber'>Lightsaber</option>
                    <option value ='Throwing Stars'>Throwing Stars</option>
                    <option value ='Magic Wand'>Magic Wand</option>
                    <option value ='Posion Darts'>Posion Darts</option>

                   </select>
                </label>
            </div>
         </div>  
        </form>
    )








}