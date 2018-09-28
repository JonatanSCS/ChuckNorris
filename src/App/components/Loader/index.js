// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { ClipLoader } from 'react-spinners'

// Styles
import './styles.scss'

export default function Loader(props) {
  return (
    <div className="Loader">
      <ClipLoader
        size={props.size}
        color={props.color}
      />
    </div>
  )
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

Loader.defaultProps = {
  size: 40,
  color: '#F15A24'
}