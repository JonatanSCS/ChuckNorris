/* eslint-disable */
import React, { Component } from 'react'

export default class BaseComponent extends Component {
  constructor(props) {
    super(props)
  }

  // Custom binding method. It transforms inputs into objects and iterates within a for loop.
  _bind(...methods) {
    methods.forEach(method => (this[method] = this[method].bind(this)))
  }
}
