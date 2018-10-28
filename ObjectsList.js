import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row.js'

// const renderItem = obj => {

// }

const renderItem = obj => <Row objectValue={obj.item} />

const renderSectionHeader = obj => <Text> {obj.section.title} </Text>

const sections = props => {
	return(
		props.objectsArray.map(object => ({
			title: object.objectName,
			data: [object.objectValue]
		}))
	)
}


const ObjectsList = props => {
	const sectionsArr = sections(props)
	console.log("sectionArr: " + JSON.stringify(sectionsArr))
	
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


