import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		/*borderStyle: 'solid',
		borderColor: 'silver',
		borderWidth: 1,*/
	},
})

class Answer extends Component {
	render() {
		const textStyle = { 
			fontSize: 100, 
			opacity: this.props.showAnswer ? 1 : 0,
		}

		return (
			<View style={styles.container}>
			{
				this.props.character.sounds.map((x, idx) => 
					<Text key={idx} style={textStyle}>{x}</Text>
				)
			}
			</View>
		)
	}
}

export default Answer
