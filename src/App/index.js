// Dependencies
import React from 'react'
import { withAlert } from "react-alert"

// Utils
import BaseComponent from 'utils/BaseComponent'

// Components
import Loader from './components/Loader'
import Content from './components/Content'
import Form from './components/Form'

// Services
import {
  fetchCategories,
  fetchCategory,
  fetchImage
} from 'services/categories'

// Styles
import './styles.scss'

// Constants
const CHUCK_IMAGE = require('./images/chuck-logo.png')

class App extends BaseComponent {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      categories: [],
      category: null,
      post: {
        isLoading: false,
        text: '',
        image: ''
      }
    }

    this._bind(
      '_handleCategory',
      '_handleSubmit',
      '_fetchImage'
    )
  }

  componentDidMount() {
    fetchCategories()
      .then(({ data }) => {
        let _data = []
        data.forEach(category => {
          _data = [{
            value: category,
            label: category
          }, ..._data]
        })

        this.setState({
          isLoading: false,
          categories: _data
        })
      })
      .catch(err => {
        this.props.alert.error('You just broke something!')
      })
  }

  _handleCategory(category) {
    this.setState({ category })
  }

  _handleSubmit(e) {
    e.preventDefault()
    this.setState({
      post: {
        isLoading: true
      }
    })
    const category = this.state.category.value
    if (category) {
      fetchCategory(category)
        .then(({ data }) => {
          this._fetchImage(data.value)
        })
        .catch(err => {
          this.props.alert.error('You just broke something!')
        })
    } else {
      this.props.alert.show('Select a category!')
    }
  }

  _fetchImage(text) {
    const words = text.split(' ')
    fetchImage(words[0], words[1], words[2])
      .then(({ data }) => {
        const image = data.data[0].images.original.url
        this.setState({
          post: {
            isLoading: false,
            text,
            image
          }
        })
      })
      .catch(err => {
        this.props.alert.error('You just broke something!')
      })
  }

  _renderContent() {
    const post = this.state.post
    return post.isLoading ? (
      <Loader />
    ) : (
      <Content text={post.text} image={post.image} />
    )
  }

  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div className="ChuckNorris">
        <Form
          handleSubmit={this._handleSubmit}
          handleCategory={this._handleCategory}
          category={this.state.category}
          options={this.state.categories}
        />
        <img
          className="ChuckNorris__Logo"
          src={CHUCK_IMAGE}
          alt="Chuck Norris"
        />
        {this.state.category && this._renderContent()}
      </div>
    )
  }
}

export default withAlert(App)
