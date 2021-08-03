import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const myPets = props.pets.map(pet => <Pet name={pet.name} />)

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            {myPets}

        </div>
    )
}


export default Friend
