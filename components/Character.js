import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	text: {
		fontSize: 200
	}
})

class Character extends Component {
	render() {
		return (
			<View>
				<Text style={styles.text}>{this.props.character.character}</Text>
			</View>
		)
	}
}

export default Character
