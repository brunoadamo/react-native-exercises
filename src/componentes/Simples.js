import React from 'react'
import {Text} from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function(props) {
//     return <Text>Arrow: {props.texto}</Text>
// }

//no estilo pode ser arrau ou objeto {} ou {[],[]}
export default props => 
    <Text style={[Padrao.ex]}>Arrow 1: {props.texto}</Text>
