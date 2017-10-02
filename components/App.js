import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import CharacterViewport from './CharacterViewport'
import consonants from './data'
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
			totalCharacters: consonants.length,
			showAnswer: false
		}

		this.nextCharacter = this.nextCharacter.bind(this)
		this.showAnswer = this.showAnswer.bind(this)
	}

	showAnswer() {
		this.setState({ showAnswer: !this.state.showAnswer })
	}

	nextCharacter() {
		this.setState({ showAnswer: false })

		if (this.state.characterIndex < this.state.totalCharacters - 1)
			this.setState({ characterIndex: this.state.characterIndex + 1 })
		else 
			this.setState({ characterIndex: 0 })
	}

	render() {
		return (
			<View style={styles.container}>
				<CharacterViewport 
					consonants={shuffle(consonants)} 
					characterIndex={this.state.characterIndex}
					showAnswer={this.state.showAnswer}
				/>
				<Button title="Next" onPress={this.nextCharacter}/>
				<Button title="Toggle Answer" onPress={this.showAnswer}/>
			</View>
		)
	}
}

export default App
