import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Operan extends Component {
    render() {
        const {func_oper} = this.props
        return (
            <View>
                <Text> Ini adalah operan : {func_oper} </Text>
            </View>
        )
    }
}

export default Operan
