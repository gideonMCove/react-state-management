import { useState, useEffect} from "react"
const App = () => {

  const [team, setTeam] = useState([])

  const [money, setMoney] = useState(100)

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const [strength, setStrength] = useState(0)

  const [agility, setAgility] = useState(0)

  let filteredTeam = []

  console.log("zombieFighter",zombieFighters)
  console.log("team",team)

  const handleAddFighter = (zombieFighter) => {
    if((money - zombieFighter.price) >= 0){
        setTeam([...team, zombieFighter])
        setMoney(money - zombieFighter.price)
        setStrength(strength + zombieFighter.strength)
        setAgility(agility + zombieFighter.agility)
    
    } else{
      console.log("You do not have enough moneys")
    }

  }

  const handleRemoveFighter = (filter) => {
    console.log('filter', filter)
    function filterTeam (filter){
      return team.filter(team => team.name != filter.name)
    }
     filteredTeam = filterTeam(filter)
    setTeam(filteredTeam)
    setMoney(money + filter.price)
    setStrength(strength - filter.strength)
    setAgility(agility - filter.agility)
  }

  return (
    <div className ="App">
      
      
      {team.length == 0 ? (
        <h1>Pick your team!
          <br />
         Funds: ${money}
        </h1>
        
      ) : (
        <h1>Funds: ${money}</h1>
      )}

      {
        zombieFighters.map((zombieFighter, index) => (
          
          <ul className="list" key ={index}>
            <li className="bold">{zombieFighter.name}{"  "}</li>
            <li> Price:{zombieFighter.price}{"  "}</li>
            <li> Strength:{zombieFighter.strength}{"  "}</li>
            <li> Agility:{zombieFighter.agility}{"  "}</li>
            <img src= {zombieFighter.img}/>
            <button onClick={()=>handleAddFighter(zombieFighter)}>ADD</button>
          </ul>
        ))
      }
      <h1>Your team: </h1>

    
      {
        
        team.map((team, index) => (
          <ul className="list" key ={index}>
            {team.name}{"  "}
            Price:{team.price}{"  "}
            Strength:{team.strength}{"  "}
            Agility:{team.agility}{"  "}
            <img src= {team.img}/>
            <button onClick={()=>handleRemoveFighter(team)}>REMOVE</button>
          </ul>
        ))
      }
      <h1>Team's collective strength:{strength} </h1>
      <h1>Team's collective Agility:{agility}</h1>
    </div>
  )
}

export default App
