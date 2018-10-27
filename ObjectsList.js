import React from 'react'
import {SectionList} from 'react-native'
import PropTypes from 'prop-types'



const ObjectsList = props => (
	<SectionList
      renderItem={props.renderItem}
      renderSectionHeader={props.renderSectionHeader}
      sections={[{
        title: "a",
        data: props.objectsArray,
      }]}
    />
)

ObjectsList.PropTypes = {
	renderItem: PropTypes.func,
	renderSectionHeader: PropTypes.func,
	objectsArray: PropTypes.array
}



export default ObjectsList