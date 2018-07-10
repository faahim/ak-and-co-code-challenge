import React, { Component } from 'react'
import SearchIcon from './SVGIcons'
import styles from '../styles/SearchBox.module.scss'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
      placeholderText: 'Have a question? Ask here or enter a search term',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetPlaceholer = this.resetPlaceholer.bind(this)
  }

  handleInput(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState(
      {
        inputText: '',
        placeholderText: 'This is a dummy serach box. Have fun! :)',
      },
      () => {
        setTimeout(this.resetPlaceholer, 2500)
      }
    )
  }

  resetPlaceholer() {
    this.setState({
      placeholderText: 'Have a question? Ask here or enter a search term',
    })
  }

  render() {
    const { inputText, placeholderText } = this.state

    return (
      <div className={styles.searchBoxWrapper}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputText}
            placeholder={placeholderText}
            onChange={this.handleInput}
          />
          <SearchIcon />
        </form>
      </div>
    )
  }
}

export default SearchBox
