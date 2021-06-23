import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Operan from './Operan'

export default class StateProps extends Component {

    constructor(props){
        super(props)

        this.state = {
            sekolah : 'Wahidev Academy'
        }
        
    }
    
    gantiState() {
        this.setState({
            sekolah : 'Wahidev'
        })
    }
    gantiStateLagi() {
        this.setState({
            sekolah : 'Wahidev Lagi'
        })
    }
    render() {
        const {sekolah} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Belajar State & Props </Text>
                <View style={styles.garis}/>

                {/* isi */}
                <View style={styles.isi}>
                    <Text>Ini adalah state {sekolah}</Text>
                    <Operan func_oper={sekolah}/>
                    <View style={styles.Vertikal}>
                        <TouchableOpacity style={styles.tombol} onPress={()=> this.gantiState()}>
                        <Text style={{textAlign : 'center'}}>Ganti</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tombol} onPress={()=> this.gantiStateLagi()}>
                            <Text style={{textAlign : 'center'}}>Ganti</Text>
                        </TouchableOpacity>
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
        flexDirection : 'row',
        flexWrap: "wrap"
    },
    tombol : {
        backgroundColor : 'skyblue',
        flex : 6,
        padding : 10,
        borderRadius : 10,
        marginTop : 10
    }


})
