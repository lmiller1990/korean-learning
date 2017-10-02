import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import CharacterViewport from './CharacterViewport'
import CharacterSetSelector from './CharacterSetSelector'

import * as data from './data'
import shuffle from 'lodash/shuffle'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

class App extends Component {
	constructor() {
		super()

		this.state = {
			characterIndex: 0,
			totalCharacters: 0,
			setNames: data.setNames,
			sets: data.sets,
			selectedSet: null,
			showAnswer: false,
			characterSet: 'consonants'
		}

		this.nextCharacter = this.nextCharacter.bind(this)
		this.showAnswer = this.showAnswer.bind(this)
		this.setCharacterSet = this.setCharacterSet.bind(this)
	}

	showAnswer() {
		this.setState({ showAnswer: !this.state.showAnswer })
	}

	setCharacterSet(type) {
		this.setState({ characterIndex: 0, selectedSet: type })
	}

	nextCharacter() {
		this.setState({ showAnswer: false })

		if (this.state.characterIndex < this.state.sets[this.state.selectedSet].length - 1)
			this.setState({ characterIndex: this.state.characterIndex + 1 })
		else 
			this.setState({ characterIndex: 0 })
	}

	render() {
		const characterView = this.state.selectedSet
			? <View>
					<CharacterViewport 
						characterSet={this.state.sets[this.state.selectedSet]} 
						characterIndex={this.state.characterIndex}
						showAnswer={this.state.showAnswer}
					/>
					<Button title="Next" onPress={this.nextCharacter}/>
					<Button title="Toggle Answer" onPress={this.showAnswer}/>
				</View>
			: null

		return (
			<View style={styles.container}>
				<CharacterSetSelector 
					setNames={this.state.setNames} 
					setCharacterSet={this.setCharacterSet} />

				{characterView}
			</View>
		)
	}
}

export default App
