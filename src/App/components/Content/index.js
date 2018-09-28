// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Utils
import { setBackgroundImage } from 'utils/data'

// Styles
import './styles.scss'

export default function Content(props) {
  return (
   <div className="ChuckNorris__Content">
      <p>{props.text}</p>
      <div style={setBackgroundImage(props.image)} />
    </div>
  )
}

Content.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string
}

Content.defaultProps = {
  image: 'https://gph.is/16dJ6O5'
}