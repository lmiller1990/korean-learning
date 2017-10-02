import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Character from './Character'
import Answer from './Answer'

class CharacterViewport extends Component {
	render() {
		const { consonants, characterIndex } = this.props
		const character = consonants[characterIndex]

		return (
			<View>
				<Character character={character} />
				<Answer 
					character={character} 
					showAnswer={this.props.showAnswer} 
				/>
			</View>
		)
	}
}

export default CharacterViewport
