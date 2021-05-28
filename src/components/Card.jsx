import React from 'react'
import './Card.css'

function Card(props) {



    function getColor(props){
        
        if(props.green) return "Green"
        if(props.blue) return "Blue"
        if(props.purple) return "Purple"
        if(props.red) return "Red"
        return ""
    }
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
export default Card