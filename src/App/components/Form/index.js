// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Select from 'react-select'

// Styles
import './styles.scss'

export default function Form(props) {
  return (
    <nav className="ChuckNorris__Navbar">
      <form onSubmit={props.handleSubmit} className="ChuckNorris__Navbar__Form">
        <Select 
          className="ChuckNorris__Navbar__Form__Select"
          placeholder="Select a category"
          onChange={props.handleCategory}
          value={props.category}
          options={props.options}
        />
        <button>Search</button>
      </form>
    </nav>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    }),
    PropTypes.bool
  ]),
  options: PropTypes.array.isRequired
}