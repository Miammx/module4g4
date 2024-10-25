import {useState, useEffect} from 'react'
import "./App.css"

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
  const getData = async () => {
    const response = await fetch("https://api.disneyapi.dev/character")
    const json = await response.json();
    console.log(json);
    setCharacters(json.data)
  }
  getData()

  },[])
  console.log(characters);

  return (
    <>
      <div style={{ 
        backgroundColor: 'lightblue', 
        padding: '20px', 
        borderRadius: '8px', 
        width: '100%', 
        display:'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
      }}>
        <h1 style={{ fontFamily: 'Georgia, sans-serif' }}>Disney World!</h1>
        <h2 style={{ fontFamily: 'Georgia, sans-serif' }}>Enjoy a lot of funny moments</h2>
        {characters.map((character)=>{
          return (
            <div className= "characters-container">
              <h3>{character.name}</h3> 
              <img src={character.imageUrl}></img>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
