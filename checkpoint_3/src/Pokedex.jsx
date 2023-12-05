import { useState } from "react"

export function Pokedex () {

    const [name, setName] = useState("")
    const [info, setInfo] = useState("")

    function handleSerch(event){
setName(() => event.target.value)
    }



async function fetchData(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await res.json()
    console.log(data)

    setInfo(data)

}



    return(
        <>
        <input onChange={handleSerch}  type="text" value={name}/>
            <button onClick={fetchData}>Genera</button>
            {info && <img src={info.sprites.front_default} alt="Pokemon_image" />}
        </>
    )
}