import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

class CharacterSetSelector extends Component {
	render() {
		return (
			<View>
				{
					this.props.setNames.map(x => <Button title={x} key={x} onPress={() => this.props.setCharacterSet(x)} />)
				}
			</View>
		)
	}
}

export default CharacterSetSelector
