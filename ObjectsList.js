import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row.js'


const renderItem = obj => <Row objectValue={obj.item} />

const renderSectionHeader = obj => <Text> {obj.section.title} </Text>

const sections = props => {
	return(
		props.objectsArray.map(object => {
				try {
					console.log(object.objectValue)
					JSON.parse(object.objectValue)	
					return(
						{title: object.objectName,
						 data: [object.objectValue]
						}
				)					
				}
				catch (exception) {
					console.log("here")
					return(
						{
						title: object.objectName,
						data: object.objectValue
						}
					)
				}					
		}
		)
	)
}


const ObjectsList = props => {	
	return(
		 <SectionList
	      renderItem={renderItem}
	      renderSectionHeader={renderSectionHeader}
		  sections={sections(props)}
	    />
    )
}

ObjectsList.propTypes = {
	objectsArray: PropTypes.array
}

export default ObjectsList


