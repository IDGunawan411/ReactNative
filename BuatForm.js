import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'

export default class BuatForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : '',
            islogin  : false,
            
            formLogin : '0',
            formDashb : '',
            errorLogin: ''
        }
        
    }

    login() {
        var username = this.state.username
        var password = this.state.password
        if(username === "Gunn" && password === "123"){
            this.setState({
                formLogin : '1'
            })
        }else{
            this.setState({
                errorLogin : 'Username Atau Password Salah'
        })
    }

    }
    logout() {
        this.setState({
            formLogin : '0',
            errorLogin : ''
        })
    }
    render() {
        const {username,password,formLogin,errorLogin} = this.state
        return (

                <View style={styles.container}>
                {formLogin == "0" ? 
                    <View>
                        <Text style={styles.title}> Form Login </Text>
                            <View style={styles.garis}/>
                            {/* isi */}
                            <View style={styles.isi}>
                            <View style={{marginTop : 10}}>
                                <Text style={{fontWeight:'bold',fontSize:15}}>Username:</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Masukan username"
                                    value={username} 
                                    onChangeText={(username) => this.setState({username})}
                                />
                            </View>
                            <View style={{marginTop : 10}}>
                                <Text style={{fontWeight:'bold',fontSize:15}}>Password :</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    placeholder="Masukan password"
                                    value={password} 
                                    onChangeText={(password) => this.setState({password})}
                                />
                            </View>
                            <View style={styles.Vertikal}>
                                <TouchableOpacity style={styles.tombol} onPress={() => this.login()}>
                                    <Text style={{textAlign : 'center', color: 'white'}}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{marginTop:10,fontSize:15,color:'red'}}>{errorLogin}</Text>
                        </View>
                    </View>
                : 
                    <View style={logins.dash}>
                        <Text style={styles.title}>Anda Berhasil Login !</Text>
                        {username !== "" && password !== "" ?  
                            <View>
                                <Text style={{marginTop : 20,fontSize : 15,textAlign:'center'}}>Selamat datang {username}</Text>
                            </View>
                        : 
                            <View></View> 
                        } 
                        <View style={styles.Vertikal}>
                            <TouchableOpacity style={styles.tombol} onPress={() => this.logout()}>
                                <Text style={{textAlign : 'center', color: 'white'}}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                   
                </View>
        )
    }
}

const logins = StyleSheet.create({
    dash : {
        padding : 50,
        borderWidth : 1,
        borderColor : 'royalblue'
    }
})
const styles = StyleSheet.create({
    container: {
        padding : 50,
    },
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
        marginTop : 50,
    },
    Vertikal : {
        flexDirection : 'row',
        flexWrap: "wrap"
    },
    tombol : {
        backgroundColor : 'royalblue',
        flex : 6,
        padding : 10,
        borderRadius : 10,
        marginTop : 20
    },
    textInput : {
        marginTop : 5,
        borderRadius : 5,
        borderWidth : 1,
        borderColor : 'gray',
        height : 40
    }

})
