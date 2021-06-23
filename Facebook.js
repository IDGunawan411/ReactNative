import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image , NavigationContainer} from 'react-native'
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


export default class Facebook extends Component {

    constructor(props){
        super(props)

        this.state = {
            
            // State buatAkun
            username : '',
            password : '',
            islogin  : false,
            formDashb : '1',
            
            // State halaman
            formLogin : '0',
            formAkun  : '1',
            lupaPass  : '1',
            errorLogin: '',

            // State login
            userLog : '',
            passLog : '',

            // State this.lupaPassword
            lupaUsser : '',
            passLupa : ''
        }
        
    }

    login() {

        var username = this.state.username
        var password = this.state.password

        var userLog = this.state.userLog
        var passLog = this.state.passLog
        if(userLog === username && passLog === password){
            this.setState({
                formDashb: '0',
                formLogin : '1',formAkun : '1',lupaPass : '1'
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
            formDashb : '1',formAkun : '1',lupaPass : '1',
            
            errorLogin : ''
        })
    }

    lupaPassword(){
        this.setState({
            lupaPass : '0',
            formLogin : '1', formAkun : '1',formDashb : '1',
            
            passLupa : ''
        })
    }
    
    newAkun(){
        this.setState({
            username : '',
            password : '',
            lupaUsser: '',
            passLupa : '',
            formAkun : '0',
            lupaPass : '1',formLogin : '1',formDashb : '1',

            errorLogin : ''
        })
    }

    buatAkun(){
        this.setState({
            formLogin : '0',
            formAkun : '1', lupaPass : '1', formDashb : '1',

            errorLogin : ''
        })
    }

    BackLogin(){
        this.setState({
            formLogin : '0',
            formAkun : '1', lupaPass : '1', formDashb : '1',

            errorLogin : ''
        })
    }

    cariAkun(){
        var lupaUsser = this.state.lupaUsser
        var username  = this.state.username
        var password  = this.state.password
        var passLupa  = this.state.passLupa 

        if(lupaUsser === username){
            this.setState({
                passLupa : "Password anda adalah : " + password
            })
        }else{
            this.setState({
                passLupa : "User tidak ditemukan"
            })
        }
    }
    
    render() {
        const {username,password,formLogin,errorLogin,lupaPass,formAkun,userLog,passLog,formDashb,lupaUsser,passLupa} = this.state
        return (

        <View style={styles.container}>

            {/* Form login user */}
            {formLogin == "0" ? 
                <View>
                    {/* <Text style={styles.title}> Login ke Facebook </Text> */}
                        <View style={{marginLeft:'auto',marginRight:'auto'}}>
                            <Image source={require('./fb.png')} style={{ width: 100, height: 100 }}/>
                        </View>
                        {/* isi */}
                        <View style={styles.isi}>
                        <View style={{marginTop : 10}}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Telepon atau email"
                                // value={userLog} 
                                onChangeText={(userLog) => this.setState({userLog})}
                            />
                        </View>
                        <View style={{marginTop : 10}}>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.textInput}
                                placeholder="Kata sandi"
                                // value={passLog} 
                                onChangeText={(passLog) => this.setState({passLog})}
                            />
                        </View>
                        <View style={styles.Vertikal}>
                            <TouchableOpacity style={styles.tombol} onPress={() => this.login()}>
                                <Text style={{textAlign : 'center', color: 'white',fontSize:15}}>Masuk</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{textAlign : 'center', color: 'royalblue',fontSize:15, marginTop: 10,fontWeight:'bold'}} onPress={()=> this.lupaPassword()}>Lupa Kata Sandi ?</Text>
                        <Text style={{marginTop:10,fontSize:15,color:'red'}}>{errorLogin}</Text>
                        <View style={styles.garis}/>
                        <View style={styles.Vertikal}>
                            <TouchableOpacity style={styles.akunbaru} onPress={() => this.newAkun() }>
                                <Text style={{textAlign : 'center', color: 'white',fontSize:15}}>Buat akun baru</Text>
                            </TouchableOpacity>
                        </View>              
                    </View>
                </View>
            : 
                <View></View>
            }
            
            {/* Form lupa password */}
            {lupaPass == "0" ? 
                <View>
                    <Text style={styles.title}> Masukan username </Text>
                    <View style={{marginTop : 20}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Telepon atau email"
                            onChangeText={(lupaUsser) => this.setState({lupaUsser})}
                        />
                    </View>
                    <View style={styles.Vertikal}>
                        <TouchableOpacity style={styles.tombolBack} onPress={() => this.BackLogin()}>
                            <Text style={{textAlign : 'center', color: 'white',fontSize:15}}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tombol} onPress={() => this.cariAkun()}>
                            <Text style={{textAlign : 'center', color: 'white',fontSize:15}}>Cari</Text>
                        </TouchableOpacity> 
                    </View>
                    <Text style={{fontSize: 15,marginTop :10, textAlign: 'center'}}>{passLupa}</Text>
                </View>
            : 
                <View></View>
            }

            {/* Buat akun baru */}
            {formAkun == "0" ? 
                <View>
                    {/* <Text style={styles.title}> Login ke Facebook </Text> */}
                        <View style={{marginLeft:'auto',marginRight:'auto'}}>
                            <Image source={require('./fb.png')} style={{ width: 100, height: 100 }}/>
                        </View>
                        {/* isi */}
                        <View style={styles.isi}>

                        <View style={{marginTop : 10}}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Telepon atau email"
                                value={username} 
                                onChangeText={(username) => this.setState({username})}
                            />
                        </View>
                        <View style={{marginTop : 10}}>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.textInput}
                                placeholder="Kata sandi"
                                value={password} 
                                onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <View style={styles.Vertikal}>
                            <TouchableOpacity style={styles.tombol} onPress={() => this.buatAkun()}>
                                <Text style={{textAlign : 'center', color: 'white',fontSize:15}}>Buat</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginTop:10,fontSize:15,color:'red'}}>{errorLogin}</Text>              
                    </View>
                </View>
            : 
                <View></View>
            }

            {/* Form berhasil login */}
            {formDashb === "0" ?
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
            :
                <View></View>
            }
            </View>

                
        )
    }
}

const logins = StyleSheet.create({
    dash : {
        padding : 35,
        borderWidth : 1,
        borderColor : 'royalblue'
    }
})
const styles = StyleSheet.create({
    container: {
        marginTop : 100,
        padding : 35,
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
        marginTop : 20,
    },
    Vertikal : {
        flexDirection : 'row',
        flexWrap: "wrap"
    },
    tombol : {
        backgroundColor : 'royalblue',
        flex : 6,
        padding : 10,
        borderRadius : 5,
        marginTop : 20,
        marginRight : 5,
        marginLeft : 5
    },
    tombolBack : {
        backgroundColor : 'red',
        flex : 6,
        padding : 10,
        borderRadius : 5,
        marginTop : 20,
        marginRight : 5,
        marginLeft : 5
    },
    akunbaru : {
        backgroundColor : 'green',
        flex : 2,
        padding : 10,
        borderRadius : 5,
        marginTop : 20
    },
    textInput : {
        borderRadius : 5,
        borderBottomWidth: 1,
        borderColor : 'gray',
        height : 40,
    }

})
