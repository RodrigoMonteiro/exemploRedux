import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'



function Soma(props) {

    const {min, max} = props
    return (
        <Card title="Soma dos números" blue>
            <div className="Soma">
                <span>Resultado: </span>
                <strong>{min+max}</strong>

            </div>


        </Card>
    )
}
function mapStateToProps(state){
    return{
        min: state.numeros.max,
        max: state.numeros.min
    }
}


export default connect(mapStateToProps)(Soma)