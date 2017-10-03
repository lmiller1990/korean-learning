import React, {Component} from 'react'
import {TextInput, View, StyleSheet, Button} from 'react-native'
import Firebase from 'firebase/app'
import * as firebase from 'firebase'
import Database from 'firebase/database'

import config from '../config/firebase'

Firebase.initializeApp(config)

const styles = StyleSheet.create({
	text: {
		borderColor: 'silver',
		borderWidth: 1,
		width: 100
	}
})

class Login extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}

		this.authenticate = this.authenticate.bind(this)
	}

	authenticate() {
		console.log('user', this.state.username, 'pass', this.state.password)
		firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
		.then((response) => console.log(response))
		.catch((error) => console.log('error', error))
	}

	render() {
		return (
			<View>
				<TextInput
					style={styles.text}
					onChangeText={(username) => 
					this.setState({username})} 
					value={this.state.username} 
				/>

				<TextInput 
					style={styles.text}
					onChangeText={(password) => 
					this.setState({password})} 
					value={this.state.password} 
				/>

				<Button 
					onPress={this.authenticate}
					title="Authenticate"
				/>
			</View>
		)
	}
}

export default Login
