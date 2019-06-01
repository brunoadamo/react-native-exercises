import React, { Component} from 'react'
import{ View, Text, TouchableHighLight } from 'react-native'


export default class Contador extends Component {
    render() {
        this.props.numero++
        return (
            <View>
                <Text style={{fontSize: 40}}>{ this.props.numero }</Text>
            </View>
        )
    }
}