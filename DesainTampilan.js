import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesainTampilan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Belajar ReactNative & Flexbox </Text>
                <View style={styles.garis}/>

                {/* isi */}
                <View style={styles.isi}>
                    <Text> Flex direction Row (Vertical) </Text>
                    <View style={styles.Vertikal}>
                        <View style={styles.kotakMerah}/>
                        <View style={styles.kotakBiru}/>
                        <View style={styles.kotakKuning}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {padding : 30},
    title    : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    garis    : {
        borderBottomWidth: 1,
        marginTop :10
    },
    isi : {
        marginTop :10
    },
    Vertikal : {
        flexDirection : 'row'
    },
    kotakBiru : {
        width : 100,
        height : 100,
        backgroundColor : 'blue'
    },
    kotakKuning : {
        width : 100,
        height : 100,
        backgroundColor : 'yellow'
    },
    kotakMerah : {
        width : 100,
        height : 100,
        backgroundColor : 'red'
    }


})
