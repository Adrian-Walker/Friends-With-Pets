import React from "react"

function Friend(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Pet: {props.pets.name}</h2>

        </div>
    )
}


export default Friend
